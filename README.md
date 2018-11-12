# FE2

To start, clone this repo and run:
1. `npm install` (install all needed dependencies)
2. `npm start` (start our local development server)

> `http://0.0.0.0:3000` is the default path to our served site

1. Perkelti žanrų sąrašo ir jiems priklausančių filmų gavimą bei saugojimą į redux (react komponentuose neturi būti funkcionalumo, susijusio su šių duomenų gavimu bei saugojimu).
2. Žanrų ir rodomų filmų masyvai turi būti gaunami iš redux store.
3. Perkelti širdučių (laikinimo) funkcionalumą iš react komponentų į redux (state turi turėti argumentą “hearted” su sąrašu filmų ID, kurie turi uždėtą širdutę).
4. Sukurti redux store argumentą “logs”, kuriame būtų kiekvienam iš nurodytų event’ų (eventai sekančioje skaidrėje) saugomas objektas su event iškvietimo laiku kaip argumentu ir evento pavadinimu kaip argumento reikšme.

Galutiniame rezultate react komponentuose this.state turi būti nebenaudojamas.

4 užduoties info:
Event’ai: 
Baigus krauti aplikaciją
Pakeitus žanrą (pavadinime nurodyti į kokį)
Uždėjus širdelę, nuėmus širdelę (pavadinime nurodyti filmo pavadinimą).
Note: Laikų formatavimui https://www.w3schools.com/js/js_date_methods.asp

State pvz:
logs: 
    2018-11-10 12:15:45 "Aplikacija užkrauta"
    2018-11-10 12:45:45 "Pakeistas žanras į Drama"
    2018-11-10 15:15:45 "Pakeistas žanras į Action"
    2018-11-10 16:20:45 "Uždėta širdelė filmui Avatar"
    2018-11-10 18:15:45 "Nuimta širdelė filmui Avatar"
    

