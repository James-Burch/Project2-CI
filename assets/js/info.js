//This file contains all of the cars information
const cars = [
    { car: "Ferrari SF90", carSpeed: "211", carAccel: "2.5", carPower: "989", image: "assets/images/ferrarisf90.jpeg" },
    { car: "Lamborghini Aventador SVJ", carSpeed: "217", carAccel: "2.8", carPower: "759", image: "assets/images/lambosvj.jpeg" },
    { car: "Porsche 911 GT2 RS", carSpeed: "211", carAccel: "2.7", carPower: "690", image: "assets/images/911gt2rs.jpeg" },
    { car: "McLaren 720S", carSpeed: "212", carAccel: "2.8", carPower: "710", image: "assets/images/mclaren720.jpeg" },
    { car: "Bugatti Chiron Super Sport 300+", carSpeed: "304", carAccel: "2.4", carPower: "1578", image: "assets/images/bugattichironss300.jpeg" },
    { car: "Koenigsegg Jesko Absolut", carSpeed: "330", carAccel: "2.4", carPower: "1600", image: "assets/images/jeskoabsolut.jpeg" },
    { car: "Aston Martin Valkyrie", carSpeed: "250+", carAccel: "2.5", carPower: "1160", image: "assets/images/astonvalkyrie.jpeg" },
    { car: "Rimac C_Two", carSpeed: "258", carAccel: "1.85", carPower: "1914", image: "assets/images/rimac2.jpeg" },
    { car: "Pagani Huayra BC", carSpeed: "238", carAccel: "2.8", carPower: "745", image: "assets/images/paganihuayra.jpeg" },
    { car: "Ferrari LaFerrari", carSpeed: "217", carAccel: "2.4", carPower: "950", image: "assets/images/laferrari.jpeg" },
    { car: "Lamborghini Huracán Performante", carSpeed: "201", carAccel: "2.9", carPower: "640", image: "assets/images/huracanperf.jpeg" },
    { car: "Porsche 918 Spyder", carSpeed: "211", carAccel: "2.2", carPower: "887", image: "assets/images/918spyder.jpeg" },
    { car: "McLaren P1", carSpeed: "217", carAccel: "2.8", carPower: "903", image: "assets/images/mclarenp1.jpeg" },
    { car: "Bugatti Veyron Super Sport", carSpeed: "268", carAccel: "2.5", carPower: "1200", image: "assets/images/bugattiveyronss.jpeg" },
    { car: "Koenigsegg Agera RS", carSpeed: "278", carAccel: "2.8", carPower: "1160", image: "assets/images/agerars.jpeg" },
    { car: "Aston Martin Vulcan", carSpeed: "225", carAccel: "2.9", carPower: "800", image: "assets/images/astonmvulcan.jpeg" },
    { car: "Rimac Nevera", carSpeed: "258", carAccel: "1.97", carPower: "1914", image: "assets/images/rimacnevera.jpeg" },
    { car: "Pagani Zonda HP Barchetta", carSpeed: "220+", carAccel: "2.7", carPower: "800", image: "assets/images/paganizondahp.jpeg" },
    { car: "Ferrari F8 Tributo", carSpeed: "211", carAccel: "2.9", carPower: "710", image: "assets/images/f8tributo.jpeg" },
    { car: "Lamborghini Sian", carSpeed: "217", carAccel: "2.8", carPower: "819", image: "assets/images/lambosian.jpeg" },
    { car: "Porsche 911 Turbo S", carSpeed: "205", carAccel: "2.5", carPower: "640", image: "assets/images/911turbos.jpeg" },
    { car: "McLaren 765LT", carSpeed: "205", carAccel: "2.7", carPower: "765", image: "assets/images/mclaren765lt.jpeg" },
    { car: "Bugatti Centodieci", carSpeed: "236", carAccel: "2.4", carPower: "1600", image: "assets/images/bugatticentodieci.jpeg" },
    { car: "Koenigsegg Regera", carSpeed: "255", carAccel: "2.8", carPower: "1500", image: "assets/images/koenigseggregera.jpeg" },
    { car: "Aston Martin One-77", carSpeed: "220", carAccel: "3.5", carPower: "750", image: "assets/images/astoneone-77.jpeg" },
    { car: "Rimac Concept_One", carSpeed: "221", carAccel: "2.6", carPower: "1224", image: "assets/images/rimacc1.jpeg" },
    { car: "Pagani Huayra Roadster BC", carSpeed: "230", carAccel: "2.8", carPower: "800", image: "assets/images/paganihuayra.jpeg" },
    { car: "Ferrari 488 Pista", carSpeed: "211", carAccel: "2.85", carPower: "720", image: "assets/images/ferrari488pista.jpeg" },
    { car: "Lamborghini Veneno", carSpeed: "221", carAccel: "2.8", carPower: "750", image: "assets/images/lamboveneno.jpeg" },
    { car: "Porsche Carrera GT", carSpeed: "205", carAccel: "3.5", carPower: "612", image: "assets/images/carreragt.jpeg" },
    { car: "McLaren Senna", carSpeed: "208", carAccel: "2.8", carPower: "789", image: "assets/images/senna.jpeg" },
    { car: "Bugatti Divo", carSpeed: "236", carAccel: "2.4", carPower: "1500", image: "assets/images/bugattidivo.jpeg" },
    { car: "Koenigsegg Gemera", carSpeed: "249", carAccel: "1.9", carPower: "1700", image: "assets/images/koenigsegggemera.jpeg" },
    { car: "Aston Martin DBS Superleggera", carSpeed: "211", carAccel: "3.4", carPower: "715", image: "assets/images/dbssuperleggera.jpeg" },
    { car: "Rimac C_Two GT", carSpeed: "258", carAccel: "1.85", carPower: "1914", image: "assets/images/rimac2.jpeg" },
    { car: "Pagani Imola", carSpeed: "230", carAccel: "2.8", carPower: "827", image: "assets/images/paganiimola.jpeg" },
    { car: "Ferrari 812 Superfast", carSpeed: "211", carAccel: "2.9", carPower: "789", image: "assets/images/812superfast.jpeg" },
    { car: "Lamborghini Centenario", carSpeed: "217", carAccel: "2.8", carPower: "770", image: "assets/images/lambocentenario.jpeg" },
    { car: "Porsche 911 GT3 RS", carSpeed: "193", carAccel: "3.2", carPower: "520", image: "assets/images/911gt3rs.jpeg" },
    { car: "McLaren GT", carSpeed: "203", carAccel: "3.1", carPower: "612", image: "assets/images/mclarengt.jpeg" },
    { car: "Bugatti Bolide", carSpeed: "310+", carAccel: "2.2", carPower: "1850", image: "assets/images/bugattibolide.jpeg" },
    { car: "Koenigsegg CCX", carSpeed: "245", carAccel: "3.1", carPower: "806", image: "assets/images/koenigseggccx.jpeg" },
    { car: "Aston Martin DB11 AMR", carSpeed: "208", carAccel: "3.7", carPower: "630", image: "assets/images/db11amr.jpeg" }
];