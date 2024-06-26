//This file contains all of the cars information
const cars = [
    { car: "Ferrari SF90", carSpeed: "211", carPower: "989", carPrice: "507000", image: "assets/images/ferrarisf90.avif" },
    { car: "Lamborghini Aventador SVJ", carSpeed: "217", carPower: "759", carPrice: "517770", image: "assets/images/lamborghinisvj.avif" },
    { car: "Porsche 911 GT2 RS", carSpeed: "211", carPower: "690", carPrice: "293200", image: "assets/images/porsche911gt2rs.avif" },
    { car: "McLaren 720S", carSpeed: "212", carPower: "710", carPrice: "299000", image: "assets/images/mclaren720s.avif" },
    { car: "Bugatti Chiron Super Sport 300+", carSpeed: "304", carPower: "1578", carPrice: "3850000", image: "assets/images/bugattichiron300ss.avif" },
    { car: "Koenigsegg Jesko Absolut", carSpeed: "330", carPower: "1600", carPrice: "3000000", image: "assets/images/koenigseggjeskoabsolut.avif" },
    { car: "Aston Martin Valkyrie", carSpeed: "250+", carPower: "1160", carPrice: "3000000", image: "assets/images/astonmartinvallkyrie.avif" },
    { car: "Pagani Huayra BC", carSpeed: "238", carPower: "745", carPrice: "3400000", image: "assets/images/paganihuayrabc.png" },
    { car: "Ferrari LaFerrari", carSpeed: "217", carPower: "950", carPrice: "1500000", image: "assets/images/laferrari.avif" },
    { car: "Lamborghini Huracán Performante", carSpeed: "201", carPower: "640", carPrice: "274390", image: "assets/images/lambohuracanperf.avif" },
    { car: "Porsche 918 Spyder", carSpeed: "211", carPower: "887", carPrice: "845000", image: "assets/images/porsche918spyder.avif" },
    { car: "McLaren P1", carSpeed: "217", carPower: "903", carPrice: "1150000", image: "assets/images/mclarenp1.avif" },
    { car: "Bugatti Veyron Super Sport", carSpeed: "268", carPower: "1200", carPrice: "2400000", image: "assets/images/bugattiveyronss.avif" },
    { car: "Koenigsegg Agera RS", carSpeed: "278", carPower: "1160", carPrice: "2700000", image: "assets/images/koenigseggagerars.jpeg" },
    { car: "Aston Martin Vulcan", carSpeed: "225", carPower: "800", carPrice: "2300000", image: "assets/images/astonmartinvulcan.jpeg" },
    { car: "Rimac Nevera", carSpeed: "258", carPower: "1914", carPrice: "2200000", image: "assets/images/rimacnevera.avif" },
    { car: "Ferrari F8 Tributo", carSpeed: "211", carPower: "710", carPrice: "276550", image: "assets/images/ferrarif8.avif" },
    { car: "Lamborghini Sian", carSpeed: "217", carPower: "819", carPrice: "3600000", image: "assets/images/lamborginhisian.avif" },
    { car: "Porsche 911 Turbo S", carSpeed: "205", carPower: "640", carPrice: "203500", image: "assets/images/porsche911turbos.avif" },
    { car: "McLaren 765LT", carSpeed: "205", carPower: "765", carPrice: "375000", image: "assets/images/mclaren765lt.avif" },
    { car: "Bugatti Centodieci", carSpeed: "236", carPower: "1600", carPrice: "9000000", image: "assets/images/bugatticentodieci.avif" },
    { car: "Koenigsegg Regera", carSpeed: "255", carPower: "1500", carPrice: "2100000", image: "assets/images/koenigseggregera.jpeg" },
    { car: "Aston Martin One-77", carSpeed: "220", carPower: "750", carPrice: "1800000", image: "assets/images/astonmartinone77.jpeg" },
    { car: "Rimac Concept_One", carSpeed: "221", carPower: "1224", carPrice: "980000", image: "assets/images/rimacconcept1.jpeg" },
    { car: "Pagani Huayra Roadster BC", carSpeed: "230", carPower: "800", carPrice: "3500000", image: "assets/images/paganihuayrabc.jpeg" },
    { car: "Ferrari 488 Pista", carSpeed: "211", carPower: "720", carPrice: "331000", image: "assets/images/ferrari488pista.jpeg" },
    { car: "Lamborghini Veneno", carSpeed: "221", carPower: "750", carPrice: "4500000", image: "assets/images/lamborghiniveneno.jpeg" },
    { car: "Porsche Carrera GT", carSpeed: "205", carPower: "612", carPrice: "448000", image: "assets/images/porschecarreragt.jpeg" },
    { car: "McLaren Senna", carSpeed: "208", carPower: "789", carPrice: "837000", image: "assets/images/mclarensenna.avif" },
    { car: "Bugatti Divo", carSpeed: "236", carPower: "1500", carPrice: "5700000", image: "assets/images/bugattidivo.avif" },
    { car: "Koenigsegg Gemera", carSpeed: "249", carPower: "1700", carPrice: "1500000", image: "assets/images/koenigsegggemera.jpeg" },
    { car: "Aston Martin DBS Superleggera", carSpeed: "211", carPower: "715", carPrice: "316300", image: "assets/images/astondbssuperleggera.jpeg" },
    { car: "Pagani Imola", carSpeed: "230", carPower: "827", carPrice: "5700000", image: "assets/images/paganiimola.jpeg" },
    { car: "Ferrari 812 Superfast", carSpeed: "211", carPower: "789", carPrice: "335000", image: "assets/images/ferrari812superfast.avif" },
    { car: "Lamborghini Centenario", carSpeed: "217", carPower: "770", carPrice: "1900000", image: "assets/images/lambocentenario.jpeg" },
    { car: "Porsche 911 GT3 RS", carSpeed: "193", carPower: "520", carPrice: "187500", image: "assets/images/porsche911gt3rs.avif" },
    { car: "McLaren GT", carSpeed: "203", carPower: "612", carPrice: "210000", image: "assets/images/mclarengt.jpeg" },
    { car: "Bugatti Bolide", carSpeed: "310+", carPower: "1850", carPrice: "4000000", image: "assets/images/bugattibolide.jpeg" },
    { car: "Koenigsegg CCX", carSpeed: "245", carPower: "806", carPrice: "695000", image: "assets/images/koenigseggccxr.jpeg" },
    { car: "Aston Martin DB11 AMR", carSpeed: "208", carPower: "630", carPrice: "241000", image: "assets/images/db11amr.jpeg" }
];


