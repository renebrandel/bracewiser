import restify from 'restify'
import builder from 'botbuilder'
import Questions from './questions'
import { returnCeleb } from './celebs'
// Setting up the server
const server = restify.createServer()
server.listen(3978, () => {
    console.log('%s listening to %s', server.name, server.url)
})

// Create chat bot
const connector = new builder.ChatConnector({
    appId: process.env.APP_ID,
    appPassword: process.env.APP_SECRET,
})

const bot = new builder.UniversalBot(connector)

server.post('/api/messages', connector.listen())

bot.dialog(
    '/', [
        session.send('Ahoj, já jsem tvůj pomocník s výběrem kšand. Odpověz mi prosím na pár otázek a já ti řeknu jaké kšandy se k tobě hodí'),
        session.send('A jako bonus ti řeknu jaká celebrita by si vybrala stejně jako ty :-)'),
        (session, args, next) => {
            session.userData.answers = []
            next()
        }, ...Questions.map(question => (session, result, next) => {
            if (result.response) {
                session.userData.answers.push(result.response)
            }
            const card = new builder.HeroCard(session)
                .text(question.text)
                .buttons(question.answers.map(answer => builder.CardAction.imBack(session, answer.text, answer.text)))
            const msg = new builder.Message(session).attachments([card])
            builder.Prompts.text(session, msg)
        }), (session, result) => {
            if (result.response) {
                session.userData.answers.push(result.response)
            }
            const scores = session.userData.answers
                .map((response, index) => Questions[index].answers.find(answer => answer.text === response).scores)
                .reduce((prev, curr) => prev.map((value, index) => value + curr[index]), [0, 0, 0, 0, 0, 0, 0])
            const celeb = returnCeleb(scores.indexOf(Math.max(...scores)))
            const card = new builder.HeroCard(session)
                .title(celeb.name)
                .images([
                    builder.CardImage.create(session, celeb.picture)
                ])
            const msg = new builder.Message(session).attachments([card])
            session.send(msg)

            session.send('Zajímavé, vy jste jasný:')

            const braces = new builder.Message(session)
                .attachmentLayout(builder.AttachmentLayout.carousel)
                .attachments(celeb.braces.map(
                    brace => new builder.HeroCard(session)
                    .images([
                        builder.CardImage.create(session, brace.picture)
                    ])
                    .buttons([
                        builder.CardAction.openUrl(session, brace.url, brace.name)
                    ])
                ))
            session.send(braces)

        }
    ]
)