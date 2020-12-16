const sequelize = require('../db');
const contact = require('../models/contact');
const region = require('../models/region');
const country = require('../models/country');
const city = require('../models/city');
const company = require('../models/company');
const admin = require('../models/admin');
const user = require('../models/user');
require('../associations');
//usuarios
const contacts = [
    {
        name: "Mariano",
        lastname: "Ospina",
        email: "mospina@gmail.com",
        position: "Gerente Comercial",
        channel: "Whatsapp",
        account: "mospina",
        address: "av madreselva",
        interest: 50,
        preference: 'Sin preferencia',
        image: null,
        companyId: 1,
        cityId: 1
    },
    {
        name: "Camilo",
        lastname: "Torres",
        email: "camitorre@hotmail.com",
        position: "comunity manager",
        channel: "Whatsapp",
        account: "ctorres",
        address: "Calle amazonas",
        interest: 100,
        preference: 'Sin preferencia',
        image: null,
        companyId: 1,
        cityId: 2
    },
    {
        name: "Juan Roman",
        lastname: "Requelme",
        email: "felipe_pal@gmail.com",
        position: "it manageer",
        channel: "Teléfono",
        account: "afelipepal8",
        address: "Calle 100 canton norte",
        interest: 100,
        preference: 'Canal favorito',
        image: null,
        companyId: 1,
        cityId: 8
    },
    {
        name: "Alvaro",
        lastname: "Uribe",
        email: "auribevel@gmail.com",
        position: "Ganadero",
        channel: "Teléfono",
        account: "auribevel",
        address: "uberrimo 911",
        interest: 75,
        preference: 'Canal favorito',
        image: null,
        companyId: 1,
        cityId: 6
    },
    {
        name: "Nemesio",
        lastname: "Camacho",
        email: "nemeca@yahoo.com",
        position: "analista de credito",
        channel: "Teléfono",
        account: "nemecho",
        address: "Calle 67 35 90",
        interest: 25,
        preference: 'Canal favorito',
        image: null,
        companyId: 4,
        cityId: 7
    },
    {
        name: "Fito",
        lastname: "Paez",
        email: "karol123@acme.com",
        position: "coordinador de planta",
        channel: "Teléfono",
        account: "quiguakarol45",
        address: "vereda portahachuelo",
        interest: 100,
        preference: 'Canal favorito',
        image: null,
        companyId: 10,
        cityId: 10
    },
    {
        name: "Monicca",
        lastname: "Bellucci",
        email: "mon.bellucci@gmail.com",
        position: "Secretaria",
        channel: "Whatsapp",
        account: "monibell",
        address: "av regional",
        interest: 100,
        preference: 'Sin preferencia',
        image: null,
        companyId: 12,
        cityId: 12
    },
    {
        name: "Laura",
        lastname: "Quijano",
        email: "lauqui@hotmail.com",
        position: "Madre superiora",
        channel: "Whatsapp",
        account: "lu_100",
        address: "Calle 20",
        interest: 100,
        preference: 'Sin preferencia',
        image: null,
        companyId: 12,
        cityId: 12
    },
];

const regions = [
    {
        name: "America",
        id: 1
    },
    {
        name: "Europa",
        id: 2
    },
    {
        name: "Asia",
        id: 3
    },
    {
        name: "Oceania",
        id: 4
    },
]

const countries = [
    {
        name: "Colombia",
        id: 1,
        regionId: 1,
    },
    {
        name: "Argentina",
        id: 2,
        regionId: 1,
    },
    {
        name: "Alemania",
        id: 3,
        regionId: 2,
    },
    {
        name: "España",
        id: 4,
        regionId: 2,
    },
    {
        name: "Korea",
        id: 5,
        regionId: 3,
    },
    {
        name: "Japón",
        id: 6,
        regionId: 3,
    },
    {
        name: "Nueva Zelandia",
        id: 7,
        regionId: 4,
    },
    {
        name: "Australia",
        id: 8,
        regionId: 4,
    },
]

const cities = [
    {
        name: "Medellín",
        id: 1,
        countryId: 1,
    },
    {
        name: "Cali",
        id: 2,
        countryId: 1,
    },
    {
        name: "Salta",
        id: 3,
        countryId: 2,
    },
    {
        name: "Rosario",
        id: 4,
        countryId: 2,
    },
    {
        name: "Stuttgart",
        id: 5,
        countryId: 3,
    },
    {
        name: "Hamburgo",
        id: 6,
        countryId: 3,
    },
    {
        name: "Valladolid",
        id: 7,
        countryId: 4,
    },
    {
        name: "Barcelona",
        id: 8,
        countryId: 4,
    },
    {
        name: "Seul",
        id: 9,
        countryId: 5,
    },
    {
        name: "Incheon",
        id: 10,
        countryId: 5,
    },
    {
        name: "Tokio",
        id: 11,
        countryId: 6,
    },
    {
        name: "Kyoto",
        id: 12,
        countryId: 6,
    },
    {
        name: "Wellington",
        id: 13,
        countryId: 7,
    },
    {
        name: "Auckland",
        id: 14,
        countryId: 7,
    },
    {
        name: "Brisbane",
        id: 15,
        countryId: 8,
    },
    {
        name: "Pearl",
        id: 16,
        countryId: 8,
    },
]

const companies = [
    {
        name: "Cementos Argos",
        address: "autopista sur",
        email: "contacto@argos.com",
        telephone: "034441234",
        cityId: 1,
    },
    {
        name: "Radio cadena nacional",
        address: "av caracas",
        email: "hola@rcn.com",
        telephone: "031441235",
        cityId: 2,
    },
    {
        name: "Mercado Libre",
        address: "Corrientes 348",
        email: "servicio@mercadolibre.com",
        telephone: "310456785",
        cityId: 3,
    },
    {
        name: "Globant",
        address: "Parlemo 123",
        email: "company@globant.com",
        telephone: "134579",
        cityId: 4,
    },
    {
        name: "BMW",
        address: "Baviera 458",
        email: "bmwauto@bmw.com",
        telephone: "123587456",
        cityId: 5,
    },
    {
        name: "Bayern Crops",
        address: "Munich",
        email: "hola@bc.com",
        telephone: "456789456798",
        cityId: 6,
    },
    {
        name: "grupo Prisa",
        address: "Madrid 12",
        email: "contacto@gprisa.com",
        telephone: "+457868114",
        cityId: 7,
    },
    {
        name: "Monsieur Limited",
        address: "Campos Elisios 8",
        email: "uoi@monltda.com",
        telephone: "78946465",
        cityId: 8,
    },
    {
        name: "Samsung",
        address: "mapo-gu 12313",
        email: "hola.sam@samsung.com",
        telephone: "3321232412",
        cityId: 9,
    },
    {
        name: "electronic inc",
        address: "daesing dong",
        email: "service@electroniinc.com",
        telephone: "7815161616",
        cityId: 10,
    },
    {
        name: "Sony",
        address: "samurai 456",
        email: "sonybusiness@sony.com",
        telephone: "15694876",
        cityId: 11,
    },
    {
        name: "Japan Goverment",
        address: "Palacio de Jade",
        email: "emperador@gov.jp",
        telephone: "999999999",
        cityId: 12,
    },
    {
        name: "Lord of the rings",
        address: "mordor",
        email: "frodo@cine.com",
        telephone: "7844654541",
        cityId: 13,
    },
    {
        name: "far far LCC",
        address: "El pantano",
        email: "Ogro@fiona.com",
        telephone: "12345679",
        cityId: 14,
    },
    {
        name: "Golden Aus LTD",
        address: "koala street",
        email: "goldeau@gmail.au",
        telephone: "963852741",
        cityId: 15,
    },
    {
        name: "Nemo Naviera",
        address: "P sherman 42 wallaby",
        email: "dory@nemo.au",
        telephone: "741789123",
        cityId: 16,
    },
]
const users = [
    {
        name: "prueba1",
        lastname: "prueba",
        email: "prueba1@test.com",
        password: "123456",
    },
    {
        name: "prueba2",
        lastname: "prueba",
        email: "prueba2@test.com",
        password: "123456",
    }
]

const admins = [
    {
        name: "super101",
        lastname: "admin101",
        email: "super101@admin.com",
        password: "*/789",
    },
    {
        name: "super102",
        lastname: "admin102",
        email: "super102@admin.com",
        password: "*/789",
    }
]

sequelize.sync({ force: true}).then(() => {
    console.log("Base de datos conectada")
}).then(() => {
    regions.forEach(regions => region.create(regions))
}).then(() => {
    countries.forEach(countries => country.create(countries))
}).then(() => {
    cities.forEach(cities => city.create(cities))
}).then(() => {
    companies.forEach(companies => company.create(companies))
}).then(() => {
    contacts.forEach(contacts => contact.create(contacts))
}).then(() => {
    users.forEach(users => user.create(users))
}).then(() => {
    admins.forEach(admins => admin.create(admins))
});