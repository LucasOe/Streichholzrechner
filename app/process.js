/*
	Steuert den Ablauf des Prozesses
*/

var inputArray = []; //Array mit den input als Befehle
var isVarArray = []; //Array ob es sich um eine Variable oder einen Befehl handelt
var pointer = 1; //Pointer der auf den aktuellen Befehl zeigt. 0 makiert das Ende
var varX = 0;
var varY = 0;

//Füllt die Array mit leeren Werten
for(var i=0; i < rows; i++) {
	inputArray[i] = "";
	isVarArray[i] = false;
}

//Setzt isVar zu true wenn der vorherige befehl ld x/y ist und es sich somit in der folgenden Zeile um eine Variable handelt
function updateIsVar() {
	inputArray.forEach(function(input, i) {
		switch(input) {
			case "3": //LdX
				if(!isVarArray[i]) {
					isVarArray[i+1] = true;
					break;
				}
			case "4": //LdY
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

function printArray() {
	console.table(inputArray);
	console.table(isVarArray);
}

//returnt den Inhalt einer Zelle
function getCellContent(index) {
	return document.getElementById(index).value;
}

function setCellContent(index, content) {
	//User input vom aktuellen button
	document.getElementById(index).value = content.toString();

	//Fügt user input zum inputArray hinzu & updated isVar array
	inputArray[index] = content.toString();
	updateIsVar();

	updateClass();
	updateBedeutung(index);
}

//Setzt den Pointer zu einem bestimmten Wert
function setPointer(pointingAt) {
	pointer = pointingAt;
	updateActive();
}

function nextPointer() {
	pointer++;
	updateActive();
}

function setVarX(value) {
	varX = parseInt(value);
	updateDisplayVars();
}

function setVarY(value) {
	if(value < 0) {
		varY = 0;
	} else {
		varY = parseInt(value);
	}
	updateDisplayVars();
}

function resetVars() {
	varX = 0;
	varY = 0;
}

//Führt den Befehl aus auf den der Pointer zeigt
function runCommand() {
	if(pointer != 0 && pointer <= 256) {
		var cellContent = getCellContent(pointer);

		switch(cellContent) {
			case "1": //jmpg
				jmpg();
				break;
			case "2": //jmp
				jmp();
				break;
			case "3": //ldX
				ldX();
				break;
			case "4": //ldY
				ldY();
				break;
			case "5": //add
				add();
				break;
			case "6": //sub
				sub();
				break;
			case "7": //strX
				strX();
				break;
			case "8": //ldf
				ldf();
				break;
			default:
				nextPointer();
				break;
		}
	}
}

function checkExitCondition() {
	if(pointer == 0 || pointer > 256) {
		eventReset();
	}
}
