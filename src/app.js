import restify from 'restify'
import builder from 'botbuilder'
import Questions from './questions'

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
  '/', 
  Questions.map(question => (session, result, next) => {
      const card = new builder.HeroCard(session)
        .text(question.text)
        .buttons(question.answers.map(answer => builder.CardAction.imBack(session, answer.text, answer.text)))
      const msg = new builder.Message(session).attachments([card])
      builder.Prompts.text(session, msg)
  })
)
