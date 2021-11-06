import axios from "axios";
import * as url from "url";


// axios.get(`https://restcountries.com/v2/all`);

// async function getCountry() {
//     try {
//         const result = await axios.get(`https://restcountries.com/v2/all`);
//         console.log(result);
//         // 4. Probeer eens om de _naam_ van het _allereerste_ land te loggen in de console, welk pad moet je hiervoor volgen?
//     } catch (e) {
//
//     }
// }
// getCountry()



// [X]     5. Maak een `<ul>`-tag in de HTML die je als referentie kunt gebruiken in jouw JavaScript bestand;
// []6. Zorg ervoor dat de naam van het allereerste land wordt weergegeven als `<li>`-tag in het lijst-element op de pagina;
// ouderwets? of innerhtml (uitzoeken innerhtml)
// ouderswets = anker (getelementbyId) Ul Tag ID
// vervolgens createelement(li?)
// vervolgens appendcheld?
// uitzoeken hoe data op te slaan van get request in een variable

//  *knutselwerk* function naam (array) {
//      const firstCountryList = document.getElementById("first-country")
//      array.map((object) => {
//          const countryList = document.createElement("Li")
//          countryList.innerHTML = `<p>
//  ${object.name} heeft een populatie van ${object.population}.
// </p>`
// firstCountryList.appendChild(countryList)
//      })
//
//  }
// async function getFirstCountry() {
//     try {
//         const result = await axios.get(`https://restcountries.com/v2/all`);
//         console.log(result.data)
//         const country = result.data
//         naam(country)
//     } catch (e) {
//         return console.error("Data ophalen is mislukt")
//     }
// }
// getFirstCountry()

async function getFirstCountry() {
    try {
        const result = await axios.get(`https://restcountries.com/v2/all`);
        console.log(result)
        result.data.sort((a, b) => a.population - b.population)
//result.data[0].name (zie data.map() locatie) dit hoef ik niet meer een index locatie mee te geven, map methode heeft al een for - loop
        result.data.map((object) => {

            const countryList = document.getElementById("first-country")
            const countryItems = document.createElement("li")
            countryItems.textContent = `${object.name} Has a population of  ${object.population} people`


            const countryRegion = document.createElement("li")
            countryRegion.textContent = `${object.region}`
            countryRegion.setAttribute("class", object.region)
// 10. Gebruik de `map`-methode om over de array met landen heen te mappen, en zo een `<li>`-element te maken voor álle
// landen;
            const countryFlag = document.createElement("img")
            countryFlag.setAttribute("src",object.flag )
            countryFlag.setAttribute("class","country-flag")

            countryRegion.appendChild(countryFlag)
            countryList.appendChild(countryRegion)
            countryList.appendChild(countryItems)



            // alles combineren zodat ik met css kan stylen, dan werkt mijn eerste class niet meer.
            // countryList.innerHTML = `test ${object.name} en ${object.region}`

        })


    } catch (e) {
        return console.error("Data ophalen is mislukt")
    }
}
getFirstCountry()



//[x] 7. Zorg er nu ook voor dat de populatie (`Has a population of [amount] people`) daaronder wordt weergegeven;
// [x]8. Schrijf een aparte functie die één regio-naam verwacht, en op basis van deze regio de correcte kleur-naam als string
// teruggeeft. Gebruik deze, om de naam van het land in de juiste kleur weer te geven op de pagina. _Tip_: zorg ervoor
// [x]dat je CSS-classes maakt voor alle regio-kleuren!
//     9. Breidt de `<li>`-tag uit met een `<img>`-tag om zo ook de url van de meegegeven vlag-afbeelding weer te kunnen geven;
// [X]10. Gebruik de `map`-methode om over de array met landen heen te mappen, en zo een `<li>`-element te maken voor álle
// landen;
// 11. Zorg er ten slotte voor dat je de response data eerst sorteert op populatie, van laag naar hoog, voor je eroverheen
// mapt om de landen op de pagina weer te geven.