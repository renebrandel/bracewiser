const celebs = [{
    name: "Chuck Bass",
    picture: "http://www.thefineyounggentleman.com/wp-content/uploads/2012/08/ed-westwick-suspenders.jpg",
    braces: [{
        name: "Vínové kšandy",
        url: "https://www.charliehoksandy.cz/business-ksandy/vinove-ksandy.html",
        picture: "https://www.charliehoksandy.cz/out/pictures/z1/ksandy_rude(1)_z1.jpg"
    },
    {
        name: "Vínové kšandy s béžovými tečkami",        
        url: "https://www.charliehoksandy.cz/business-ksandy/vinove-ksandy-s-bezovymi-teckami.html",
        picture: "https://www.charliehoksandy.cz/out/pictures/z2/sam_9815_z2.jpg"
    }
    ]
},
{}]

export function returnCeleb(index) {
    return celebs[index]
}