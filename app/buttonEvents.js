//Setzt den Pointer zu der ersten Speicherzelle
function eventReset() {
	setPointer(1);
	resetVars();
	updateActive();
	updateDisplayVars();
}

//Fuehrt alle Speicherzellen aus
function eventSkip() {
	for(var i=0; i<=inputArray.length; i++) {
		runCommand();
	}
}

//Fuehrt die Speicherzelle aus auf die der Pointer gerade zeigt
function eventForward() {
	runCommand();
}
