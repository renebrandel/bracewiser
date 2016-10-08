var Chuck = 0;
var Gatsby = 0;
var Oconnel = 0;
var Bond = 0;
var Gekko = 0;
var Holmes = 0;
var Corleone = 0;

const celebs = [{
        name: "Chuck Bass",
        picture: "http://www.thefineyounggentleman.com/wp-content/uploads/2012/08/ed-westwick-suspenders.jpg",
        braces: [{
                name: "Vínové kšandy",
                url: "https://www.charliehoksandy.cz/business-ksandy/vinove-ksandy.html",
                picture: "https://www.charliehoksandy.cz/out/pictures/z1/ksandy_rude(1)_z1.jpg"
            },
            {
                name: "Fialové kšandy",
                url: "https://www.charliehoksandy.cz/klasicke-ksandy/fialove-ksandy.html",
                picture: "https://www.charliehoksandy.cz/out/pictures/z1/fialov_s_pruhy_-_pidat_z1.jpg"
            },
            {
                name: "Kárované vínovo-černé kšandy",
                url: "https://www.charliehoksandy.cz/business-ksandy/karovane-vinovo-cerne-ksandy.html",
                picture: "https://www.charliehoksandy.cz/out/pictures/z1/ksandy_karovane_z1.jpg"
            },
            {
                name: "Vínové kšandy s béžovými tečkami",
                url: "https://www.charliehoksandy.cz/business-ksandy/vinove-ksandy-s-bezovymi-teckami.html",
                picture: "https://www.charliehoksandy.cz/out/pictures/z1/sam_9811_z1.jpg"
            },
            {
                name: "Béžové kšandy s čeveným a zeleným pruhem",
                url: "https://www.charliehoksandy.cz/business-ksandy/bezove-ksandy-s-cevenym-a-zelenym-pruhem.html",
                picture: "https://www.charliehoksandy.cz/out/pictures/z1/sam_9860(1)_z1.jpg"
            }
        ]
    },
    {
        name: "Great Gatsby",
        picture: "https://s-media-cache-ak0.pinimg.com/564x/96/3d/aa/963daa8c3cfc77f5ed5bb18e3eafda5f.jpg",
        braces: [{
                name: "Béžové kšandy s čeveným a zeleným pruhem",
                url: "https://www.charliehoksandy.cz/business-ksandy/bezove-ksandy-s-cevenym-a-zelenym-pruhem.html",
                picture: "https://www.charliehoksandy.cz/out/pictures/z1/sam_9860(1)_z1.jpg"
            },
            {
                name: "Béžové kšandy s modrými pruhy",
                url: "https://www.charliehoksandy.cz/klasicke-ksandy/bezove-ksandy-s-modrymi-pruhy.html",
                picture: "https://www.charliehoksandy.cz/out/pictures/z1/hnd_s_pruhy_-_pidat_z1.jpg"
            },
            {
                name: "Pískové kšandy s tmavě modrými pruhy",
                url: "https://www.charliehoksandy.cz/klasicke-ksandy/piskove-ksandy-s-tmave-modrymi-pruhy.html",
                picture: "https://www.charliehoksandy.cz/out/pictures/z1/pskov_s_pruhy_-_pedlat_z1.jpg"
            },
            {
                name: "Tmavě modré kšandy s červeným pruhem",
                url: "https://www.charliehoksandy.cz/business-ksandy/tmave-modre-ksandy-s-cervenym-pruhem.html",
                picture: "https://www.charliehoksandy.cz/out/pictures/z1/sam_9885_z1.jpg"
            },
            {
                name: "Šedé kšandy s károváním",
                url: "https://www.charliehoksandy.cz/business-ksandy/sede-ksandy-s-karovanim.html",
                picture: "https://www.charliehoksandy.cz/out/pictures/z1/sam_9799_z1.jpg"
            }
        ]
    },
    {
        name: "Rick O'Connel",
        picture: "http://vignette4.wikia.nocookie.net/mummy/images/c/cf/Rick03.jpg/revision/latest?cb=20090313052224",
        braces: [{
                name: "Hnědé kožené kšandy",
                url: "https://www.charliehoksandy.cz/klasicke-ksandy/hnede-kozene-ksandy.html",
                picture: "https://www.charliehoksandy.cz/out/pictures/z1/koen_-_pidat_z1.jpg"
            },
            {
                name: "Béžové kšandy",
                url: "https://www.charliehoksandy.cz/business-ksandy/bezove-ksandy.html",
                picture: "https://www.charliehoksandy.cz/out/pictures/z1/sam_9778_z1.jpg"
            },
            {
                name: "Hnědé kšandy s lemováním",
                url: "https://www.charliehoksandy.cz/business-ksandy/hnede-ksandy-s-lemovanim.html",
                picture: "https://www.charliehoksandy.cz/out/pictures/z1/sam_9871_z1.jpg"
            },
            {
                name: "Béžové kšandy s černým zdobením",
                url: "https://www.charliehoksandy.cz/business-ksandy/bezove-ksandy-s-cernym-zdobenim.html",
                picture: "https://www.charliehoksandy.cz/out/pictures/z1/sam_9887_edited_z1.jpg"
            },
            {
                name: "Šedé kšandy s károváním",
                url: "https://www.charliehoksandy.cz/business-ksandy/sede-ksandy-s-karovanim.html",
                picture: "https://www.charliehoksandy.cz/out/pictures/z1/sam_9799_z1.jpg"
            }
        ]
    },
    {
        name: "James Bond",
        picture: "https://s-media-cache-ak0.pinimg.com/564x/bc/1d/25/bc1d2587ad78815aaad4c1369f03cc98.jpg",
        braces: [{
                name: "Tmavě modré kšandy",
                url: "https://www.charliehoksandy.cz/business-ksandy/tmave-modre-ksandy.html",
                picture: "https://www.charliehoksandy.cz/out/pictures/z1/sam_8283_z1.jpg"
            },
            {
                name: "Vínové kšandy",
                url: "https://www.charliehoksandy.cz/business-ksandy/vinove-ksandy.html",
                picture: "https://www.charliehoksandy.cz/out/pictures/z1/ksandy_rude(1)_z1.jpg"
            },
            {
                name: "Béžové kšandy",
                url: "https://www.charliehoksandy.cz/business-ksandy/bezove-ksandy.html",
                picture: "https://www.charliehoksandy.cz/out/pictures/z1/sam_9778_z1.jpg"
            },
            {
                name: "Černé kšandy s bílými tečkami",
                url: "https://www.charliehoksandy.cz/business-ksandy/cerne-ksandy-s-bilymi-teckami.html",
                picture: "https://www.charliehoksandy.cz/out/pictures/z1/sam_9858(1)_z1.jpg"
            }
        ]
    },
    {
        name: "Gordon Gekko",
        picture: "http://newsimg.bbc.co.uk/media/images/45721000/jpg/_45721302_gekko_douglas_rex_466.jpg",
        braces: [{
                name: "Vínové kšandy",
                url: "https://www.charliehoksandy.cz/business-ksandy/vinove-ksandy.html",
                picture: "https://www.charliehoksandy.cz/out/pictures/z1/ksandy_rude(1)_z1.jpg"
            },
            {
                name: "Béžové kšandy",
                url: "https://www.charliehoksandy.cz/business-ksandy/bezove-ksandy.html",
                picture: "https://www.charliehoksandy.cz/out/pictures/z1/sam_9778_z1.jpg"
            },
            {
                name: "Kárované vínovo-černé kšandy",
                url: "https://www.charliehoksandy.cz/business-ksandy/karovane-vinovo-cerne-ksandy.html",
                picture: "https://www.charliehoksandy.cz/out/pictures/z1/ksandy_karovane_z1.jpg"
            },
            {
                name: "Tmavě hnědé kšandy s bílým vzorem",
                url: "https://www.charliehoksandy.cz/business-ksandy/tmave-hnede-ksandy-s-bilym-vzorem.html",
                picture: "https://www.charliehoksandy.cz/out/pictures/z1/sam_9810(3)_z1.jpg"
            },
            {
                name: "Tmavě modré kšandy",
                url: "https://www.charliehoksandy.cz/business-ksandy/tmave-modre-ksandy.html",
                picture: "https://www.charliehoksandy.cz/out/pictures/z1/sam_8283_z1.jpg"
            }
        ]
    },
    {
        name: "Sherlock Holmes",
        picture: "https://s-media-cache-ak0.pinimg.com/236x/9f/86/61/9f8661a38b91f520dd5eb07f27bf52f8.jpg",
        braces: [{
                name: "Hnědé kožené kšandy",
                url: "https://www.charliehoksandy.cz/klasicke-ksandy/hnede-kozene-ksandy.html",
                picture: "https://www.charliehoksandy.cz/out/pictures/z1/koen_-_pidat_z1.jpg"
            },
            {
                name: "Béžové kšandy s černým zdobením",
                url: "https://www.charliehoksandy.cz/business-ksandy/bezove-ksandy-s-cernym-zdobenim.html",
                picture: "https://www.charliehoksandy.cz/out/pictures/z1/sam_9887_edited_z1.jpg"
            },
            {
                name: "Modré kšandy s červeným károváním",
                url: "https://www.charliehoksandy.cz/business-ksandy/modre-ksandy-s-cervenym-karovanim.html",
                picture: "https://www.charliehoksandy.cz/out/pictures/z1/sam_9786(1)_z1.jpg"
            },
            {
                name: "Šedé kšandy s károváním",
                url: "https://www.charliehoksandy.cz/business-ksandy/sede-ksandy-s-karovanim.html",
                picture: "https://www.charliehoksandy.cz/out/pictures/z1/sam_9799_z1.jpg"
            },
            {
                name: "Béžové kšandy s modrými pruhy",
                url: "https://www.charliehoksandy.cz/klasicke-ksandy/bezove-ksandy-s-modrymi-pruhy.html",
                picture: "https://www.charliehoksandy.cz/out/pictures/z1/hnd_s_pruhy_-_pidat_z1.jpg"
            }
        ]
    },
    {
        name: "Michael Corleone",
        picture: "https://bamfstyle.files.wordpress.com/2014/10/gf55m-cl3-tie2.jpg",
        braces: [{
                name: "Kárované vínovo-černé kšandy",
                url: "https://www.charliehoksandy.cz/business-ksandy/karovane-vinovo-cerne-ksandy.html",
                picture: "https://www.charliehoksandy.cz/out/pictures/z1/ksandy_karovane_z1.jpg"
            },
            {
                name: "Vínové kšandy s béžovými tečkami",
                url: "https://www.charliehoksandy.cz/business-ksandy/vinove-ksandy-s-bezovymi-teckami.html",
                picture: "https://www.charliehoksandy.cz/out/pictures/z2/sam_9815_z2.jpg"
            },
            {
                name: "Tmavě hnědé kšandy s bílým vzorem",
                url: "https://www.charliehoksandy.cz/business-ksandy/tmave-hnede-ksandy-s-bilym-vzorem.html",
                picture: "https://www.charliehoksandy.cz/out/pictures/z1/sam_9810(3)_z1.jpg"
            },
            {
                name: "Hnědé kožené kšandy",
                url: "https://www.charliehoksandy.cz/klasicke-ksandy/hnede-kozene-ksandy.html",
                picture: "https://www.charliehoksandy.cz/out/pictures/z1/koen_-_pidat_z1.jpg"
            },
            {
                name: "Béžové kšandy",
                url: "https://www.charliehoksandy.cz/business-ksandy/bezove-ksandy.html",
                picture: "https://www.charliehoksandy.cz/out/pictures/z1/sam_9778_z1.jpg"
            }
        ]
    }
]

export function returnCeleb(index) {
    return celebs[index]
}