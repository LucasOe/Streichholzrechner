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
	inputArray.forEach(function(input, i) {
	  switch(input) {
			case "3": //Ld x
				if(!isVarArray[i]) {
					isVarArray[i+1] = true;
					break;
				}
			case "4": //Ld y
				if(!isVarArray[i]) {
					isVarArray[i+1] = true;
					break;
				}
			default:
				isVarArray[i+1] = false;
				break;
		}
	});
}
