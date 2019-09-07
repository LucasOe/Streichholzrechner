/*
	Die ausführbaren Befehle
*/

//Bedingter Sprung: Sprung zur Adresse, die im Y-Register steht, wenn der Inhalt des X-Registers größer 0 ist.
function jmpg() {
	if(regX > 0) {
		setPointer(regY);
	}
}

//Unbedingter Sprung: Sprung zu der Adresse, die im Y-Register steht.
function jmp() {
	setPointer(regY);
}

//Lade einen Wert in das X-Register.
function ldX() {
	setRegX(getCellContent(pointer + 1));

	pointer += 2;
	updateActive();
}

//Lade einen Wert in das Y-Register.
function ldY() {
	setRegY(getCellContent(pointer + 1));

	pointer += 2;
	updateActive();
}

//Addition: X-Register := X-Register + Y-Register
function add() {
	setRegX(regX + regY);

	nextPointer();
}

//Subtraktion: X-Register := X-Register – Y-Register
function sub() {
	setRegX(regX - regY);

	nextPointer();
}

//Store X: Der Wert vom X-Register wird in die Speicherzelle geschrieben, deren Nummer im Y-Register steht.
function strX() {
	setCellContent(regY, regX);

	nextPointer();
}

//Load from: Lädt den Inhalt der Speicherzelle in das X-Register, deren Nummer im Y-Register steht.
function Ldf() {
	setRegX(getCellContent(regY));

	nextPointer();
}
