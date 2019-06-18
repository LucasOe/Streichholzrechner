//Setzt den Pointer zu der ersten Speicherzelle
function eventReset() {
	console.log("DEBUG: Setzt den Pointer zu der ersten Speicherzelle");

	setPointer(1);
	resetVars();
	updateActive();
	updateDisplayVars();
}

//Fuehrt alle Speicherzellen aus
function eventSkip() {
	console.log("DEBUG: Fuehrt alle Speicherzellen aus");
}

//Fuehrt die Speicherzelle aus auf die der Pointer gerade zeigt
function eventForward() {
	console.log("DEBUG: Fuehrt die Speicherzelle aus auf die der Pointer gerade zeigt");

	runCommand();
}
