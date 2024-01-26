// Taggarna output-container, first_paragraph och
// second_paragraph återfinns i HTML-filen

// Här skapar vi en variabel som länkar till taggen output_container
let output_container = document.getElementById("output-container");
// Man kan t ex ställa färgen på ett område
output_container.style.backgroundColor = "Blue";

// 1. Skapa tre olika variabler:
//    a) En som länkar till taggen med id 'title'
let title = document.getElementById("title");
//    b) En som länkar till taggen med id 'first_paragraph'
let first_paragraph = document.getElementById("first_paragraph");
//    c) En som länkar till taggen med id 'second_paragraph'
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
let förälder = document.getElementById("output-container");
förälder.appendChild(third_paragraph);
third_paragraph.style.color = "orange";

// Nu ska vi öva på att dels lägga in flera barn i samma container
// och samtidigt lära oss lite hur logiska operatorer fungerar
// 5. Skapa en for-loop som itererar i från 0 till 30. Varje gång i är
// delbart med 2 OCH 3 vill jag att ni
// * Skapar en paragraf-tag
// * Lägger in värdet på i som innerHTML
// * appendar den nya taggen till output_container
for (let i=0; i<= 30 ;i++){
    if ((i % 2 === 0) && (i % 3 === 0)){
        console.log(i+" är delbart med 2 och 3");
    }

    // let new_paragraph = document.createElement("")
    // new_paragraph.innerHTML = i;
    // förälder.appendChild(new_paragraph);
}

    // str = "Jag gillar glass"
    // str = str.toLowerCase()

    // if(str.includes("glass")){
    //     return true;
    // }

    // else if(str.includes("godis")){
    //     return true;
    // }

    // else{return false;}

