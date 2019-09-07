//Setzt den Pointer zu der ersten Speicherzelle
function eventReset() {
	setPointer(1);
	resetReg();
	updateActive();
	updateDisplayReg();
	scrollWindow(1);
}

//Fuehrt alle Speicherzellen aus
function eventSkip() {
	for(var i=0; i<=inputArray.length; i++) {
		runCommand();
	}
	setPointer(1);
}

//Fuehrt die Speicherzelle aus auf die der Pointer gerade zeigt
function eventForward() {
	runCommand();
}
