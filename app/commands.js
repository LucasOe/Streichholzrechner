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
	setVarX(getCellContent(pointer + 1));

	pointer += 2;
	updateActive();
}

//Lade einen Wert in das Y-Register.
function ldY() {
	setVarY(getCellContent(pointer + 1));

	pointer += 2;
	updateActive();
}

//Addition: X-Register := X-Register + Y-Register
function add() {
	setVarX(varX + varY);

	nextPointer();
}

//Subtraktion: X-Register := X-Register – Y-Register
function sub() {
	setVarX(varX - varY);

	nextPointer();
}

//Store X: Der Wert vom X-Register wird in die Speicherzelle geschrieben, deren Nummer im Y-Register steht.
function strX() {
	setCellContent(varY, varX);

	nextPointer();
	console.log("A");
}

//Load from: Lädt den Inhalt der Speicherzelle in das X-Register, deren Nummer im Y-Register steht.
function Ldf() {
	setVarX(getCellContent(varY));

	nextPointer();
}
