/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Success: JavaScript running!');
console.log("Hello World!");

//Her er en kommentar//

/* Her er også en kommentar */

//Variabler//
let a = "husk at skrive til michael i aften";
let b = "husk at købe ind på vejen hjem";
let c = (45);
let d = (50);

//Fremvise ting i console //
console.log (a);
console.log (b);

/* Variabler kan regne*/
console.log (c+d);


//Boleans (true eller false)//
let JulemandenEksisterer = true;
console.log("Findes julemanden?" + JulemandenEksisterer);

let vaer_23_booked = false;
console.log("Er værelse 23 ledig?" + vaer_23_booked);


//Kontrolstrukturer (IF/Else)//
/* if (new Date().getHours() < 18) {
    document.getElementById("demo").innerHTML = "Good day!";
  }
*/

//Konkatenering (klistre sammen via + ) //
let header ="<h1>"+ a + "</h1>";
console.log(header);


//Ændring af HTML element i "træet" (DOM) via JS//
document.getElementById("hej").innerHTML=header;
document.getElementById ("hej").style.color ="blue";

