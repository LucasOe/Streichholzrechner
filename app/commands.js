/*
	Die ausführbaren Befehle
*/

//Bedingter Sprung: Sprung zur Adresse, die im Y-Register steht, wenn der Inhalt des X-Registers größer 0 ist.
function jmpg() {
	if(varX > 0) {
		setPointer(varY);
	}
}

//Unbedingter Sprung: Sprung zu der Adresse, die im Y-Register steht.
function jmp() {
	setPointer(varY);
}

//Lade einen Wert in das X-Register.
function ldX() {
	var nextCellContent = getCellContent(pointer + 1);
	setVarX(nextCellContent);
	pointer += 2;

	updateDisplayVars();
	updateActive();
}

//Lade einen Wert in das Y-Register.
function ldY() {
	var nextCellContent = getCellContent(pointer + 1);
	setVarY(nextCellContent);
	pointer += 2;

	updateDisplayVars();
	updateActive();
}

//Addition: X-Register := X-Register + Y-Register
function add() {
	setVarX(varX + varY);
	pointer++;

	updateDisplayVars();
	updateActive();
}

//Subtraktion: X-Register := X-Register – Y-Register
function sub() {
	setVarX(varX - varY);
	pointer++;

	updateDisplayVars();
	updateActive();
}

//Store X: Der Wert vom X-Register wird in die Speicherzelle geschrieben, deren Nummer im Y-Register steht.
function strX() {
	console.log("7");
}

//Load from: Lädt den Inhalt der Speicherzelle in das X-Register, deren Nummer im Y-Register steht.
function Ldf() {
	console.log("8");
}
