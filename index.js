
//Variable with text content containing my name several times. 

var text = "Hola, me llamo Maria Jose\
estoy casada con Gabriel y vivimos en Boulder.\
Mis papas me nombraron Maria Jose porque pensaron\
que Maria Jose es un bonito nombre.";

//Variable establishing my name/name that will be searched for

var myName = "Maria Jose";

//Establishing loop that will loop through the array, compare 
//each letter to the first letter of my name and if it sees the letter
//and all the letters that follow it to an array, stopping when the number
//of letters it pushes are equal to the number of letters in my name.

var hits = [];

for (var i = 0; i < text.length; i++) {
    if (text[i] === "M") {
        for(var j = i; j < (myName.length + i); j++) {
            hits.push(text[j]);
        }
    }
}

if (hits.length === 0){
    console.log("Your name wasn't found!");
}

else {
    console.log(hits);
}