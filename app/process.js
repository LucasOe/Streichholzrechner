/*
	Steuert den Ablauf des Prozesses
*/

var inputArray = []; //Array mit den input als Befehle
var isVarArray = []; //Array ob es sich um eine Variable oder einen Befehl handelt
var pointer = 0; //Pointer der auf den aktuellen Befehl zeigt

//Füllt die Array mit leeren Werten
for(var i=0; i < rows; i++) {
	inputArray[i] = 0;
	isVarArray[i] = false;
}

//Setzt isVar zu true wenn der vorherige befehl ld x/y ist und es sich somit in der folgenden Zeile um eine Variable handelt
function updateIsVar() {
	var i = 1;
	inputArray.forEach(function(value) {
	  switch(value) {
			case "3": //Ld x
				isVarArray[i] = true;
				break;
			case "4": //Ld y
				isVarArray[i] = true;
				break;
			default:
				isVarArray[i] = false;
				break;
		}
		i++;
	});
}
