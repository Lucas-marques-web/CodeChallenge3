
// first task
const averageDolphin =(97+112+101)/3;
const averageKoala =(109+95+123)/3;

console.log(` Dolphin : ${averageDolphin}`);
console.log(` Koala : ${averageKoala}`);

/*
// second task
if(averageDolphin >= averageKoala){
    console.log("Dolphin won")
}else if(averageKoala >= averageDolphin){
    console.log("Koala won")
}else {
    console.log("it's a draw")
}
*/
// Bonus 1

if(averageDolphin > averageKoala && averageDolphin > 100){
    console.log("Dolphin won")
}else if(averageKoala > averageDolphin && averageKoala > 100){
    console.log("Koala won")
}else if( averageDolphin === averageKoala && (averageDolphin && averageKoala)>= 100) { // Bonus 2
    console.log("it's a draw")
}else{
    console.log("no teams have won :(")
}