
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Taggarna output-container, first_paragraph och
// second_paragraph återfinns i HTML-filen

// Här skapar vi en variabel som länkar till taggen output_container
let output_container = document.getElementById("output-container");
// Man kan t ex ställa färgen på ett område
output_container.style.backgroundColor = "Blue";

// 1. Skapa tre olika variabler:
// a) En som länkar till taggen med id 'title'
let title = document.getElementById("title");
// b) En som länkar till taggen med id 'first_paragraph'
let first_paragraph = document.getElementById("first_paragraph");
// c) En som länkar till taggen med id 'second_paragraph'
let second_paragraph = document.getElementById("second_paragraph");


// För att ändra text i en tagg använder ni innerHTML
// Ex för att ändra på titeln title.innerHTML = "Aaaaa";
// 2. Ändra på titeln så det står "Javascript är coolt"
title.innerHTML = "Javascript är coolt";

// 3. Byt färg på den första och den andra paragrafen (för att byta färg
// används style.color)
first_paragraph.style.color = "yellow";
second_paragraph.style.color = "cyan";

// För att skapa ett nytt barn i DOMen används document.createElement("<tagg>")
// (Istället för <tagg> skriver ni in den typ av tagg ni vill ha, ex. p, li, h1 osv.)
// För att lägga till den till DOMen används appendChild(), och ni appendar barnet under den
// container ni vill ha.

// 4. Skapa en fjärde paragraf där det står något lämpligt och
// appenda den till output_container
let third_paragraph = document.createElement("p");
third_paragraph.innerHTML = "Dethär är den tredje paragrafen";
let förälder = document.getElementById("third_paragraph");
förälder.appendChild(third_paragraph);
third_paragraph.style.color = "black";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(".1")
// 1. Skapa en variabel som är en array som innehåller olika datatyper (strängar, heltal och booleans). 
let arr = ["en sträng", 12, 42, true, 3.13];
arr.forEach((element) => console.log(element));

// 2. Lägg till ett element genom att använda .push() på din array. Skriv ut hela arrayen till konsolen.
arr.push("hej");
console.log(arr);

// 3. Ta bort det sista elementet genom att använda .pop() på din array. Skriv ut hela arrayen till konsolen.
arr.pop();
console.log(arr);

// 4. Använd .includes() för att undersöka om ett element finns i din array. Logga resultatet till konsolen.
console.log(arr.includes(12));
console.log(arr.includes(13));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(".2")
// 1. Skapa variablerna firstName och lastName och tilldela dem värden som är strängar. 
// Skriv ut “Välkommen firstName lastName” (med mellanslag) i konsolen. 
// Sätt ihop dina strängar med +.
let firstName = "Nils ";
let lastName = "Bengtsson";

// 2. Använd dig av en template string för att göra samma sak. Då slipper du använda + och koden brukar bli mer läsbar.
console.log(`Välkommen ${firstName + lastName}`);

// 3. Använd nu en template string för att skapa följande HTML-struktur och lägg in i din sida med hjälp av insertAdjacentHTML():
let htmlTemplate = `
<div>
    <div id="firstname">
  <strong>Förnamn:</strong> ${firstName}
    </div>
    <div id="lastname">
  <strong>Efternamn:</strong> ${lastName}
    </div>
</div>
`;
let targetElement = document.getElementById("names");
targetElement.insertAdjacentHTML("beforeend", htmlTemplate);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(".3")

// 1. Skapa ett objekt och tilldela det till en variabel
// Logga objektet till konsolen.
let person = {firstName: "Kalle", lastName: "Anka"};
console.log(person)

// 2. Sätt om firstName på objektet genom att köra person.firstName = “Kajsa”. Logga objektet till konsolen.
person.firstName = "Kajsa"
console.log(person)

// 3. Sätt om firstName på objektet genom att köra person[“firstName”] = “Knatte”. Logga objektet till konsolen.
person["firstName"] = "Knatte"
console.log(person)

// 4. Logga person.lastName till konsolen.
console.log(person.lastName)

// 5. Ta bort lastName med delete. Logga objektet till konsolen.
delete person.lastName
console.log(person)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(".4")
// 1. Skapa en funktion sum(a,b) som tar två inparametrar och summerar dem.
// Och konsol-logga ut värdet i result.
function sum(a,b) {
    return a+b
};
let result = sum(3,4);
console.log(result);

// 2. Skapa en funktion even(a) som tar en inparameter och konsol-loggar “Jämnt” som talet a är jämnt delbart med två, 
// annars “Udda”. Skapa en if-sats och använd %-operatorn för att avgöra om talet är jämnt delbart.
function even(a) {
    if (a % 2 == 0){
        console.log("Jämnt")
    } else {
        console.log("Udda")
    }
};
even(10);
even(3);
even(8);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(".5")
// 1. Skapa en array med personobjekt
let persons = [ { name: "Kalle Anka", age: 40 }, { name: "Kajsa Anka", age: 41 }, { name: "Knatte Anka", age: 12 }]

// 2. Använd .filter() för att välja ut alla personer i arrayen som är 40 år eller äldre. Konsol-logga resultatet.
let personOver40 = persons.filter(person => person.age >= 40)
console.log(personOver40)

// 3. Kan du hitta ett sätt att summera åldern på alla personer i arrayen?
let sumAges = persons.reduce((accumbulator, person) => accumbulator + person.age, 0);
console.log(sumAges)

// 4. Kan du skapa en .forEach() som går igenom hela arrayen och lägger in information om personerna i DOMen så att de syns i sidan?
const personsListElement = document.getElementById("personsList");
persons.forEach(person => {
    const personElement = document.createElement("div")
    personElement.innerHTML = `<strong>Namn:</strong> ${person.name}, <strong>Ålder:</strong> ${person.age}`
    personsListElement.appendChild(personElement);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(".6")
