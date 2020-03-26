/* Fizz Buzz test:
 Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi” FizzBuzz”.*/


//stampare tutti i numeri da 1 a 100
// for (var tutti = 1; tutti <= 100; tutti++){
// console.log(tutti);
// }
//sostituire "Fizz" ai multipli di 3

for (var i = 1; i <= 100;i++){
var prova = i;
 if (i % 3 == 0 && i % 5 == 0) {
   prova = "FizzBuzz";
 } else if (i % 5 == 0){
   prova = "Buzz";
 } else if (i % 3 == 0){
   prova = "Fizz";
 }
console.log(prova);
var totale = document.getElementById("asd").innerHTML;
document.getElementById("asd").innerHTML = totale + " " + prova;
}




//sostituire "Buzz" ai multipli di 5


// sostituire FizzBuzz ai multipli di entrambi i numeri
