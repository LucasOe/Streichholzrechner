/*
	Updatet die die Tabelle
*/

//Druchläuft alle buttons und fügt Event Listeners hinzu
var allInputs = document.querySelectorAll('input');

allInputs.forEach(function(button, buttonIndex) {
	if(buttonIndex < rows) {
		buttonIndex++;

		button.addEventListener('click', 	handler);
		button.addEventListener('change', handler);

		function handler(event) {
			//User input vom aktuellen button
			var input = document.getElementById(buttonIndex).value;

			//Fügt user input zum inputArray hinzu & updated isVar array
			inputArray[button.id] = input;
			updateIsVar();

			updateClass();
			updateBedeutung(buttonIndex);
		}
	}
});

function updateClass() {
	//Setzt tr zu var wenn es sich um eine Variable handelt
	var allTr = document.querySelectorAll('tr');

	allTr.forEach(function(tr, trIndex) {
		if(trIndex < rows) {
			trIndex++;

			var tr = document.getElementById("tr" + trIndex);
			if(isVarArray[trIndex]) {
				tr.classList.add("var");
			} else {
				if(tr) tr.classList.remove("var");
			}
			updateBedeutung(trIndex);
		}
	});
}

function updateBedeutung(index) {
	var input 		= document.getElementById(index).value;
	var bedeutung = document.getElementById("b" + index);

	if(isVarArray[index]) {
		bedeutung.textContent = input;
		bedeutung.removeAttribute("title");
	} else {
		switch(input) {
			case "1":
				bedeutung.textContent = "Jmpg";
				bedeutung.title = "Bedingter Sprung:\nSprung zur Adresse, die im Y-Register steht, wenn der Inhalt des X-Registers größer 0 ist.";
				break;
			case "2":
				bedeutung.textContent = "Jmp";
				bedeutung.title = "Unbedingter Sprung:\nSprung zu der Adresse, die im Y-Register steht.";
				break;
			case "3":
				bedeutung.textContent = "Ld x";
				bedeutung.title = "Lade einen Wert in das X-Register.";
				break;
			case "4":
				bedeutung.textContent = "Ld y";
				bedeutung.title = "Lade einen Wert in das Y-Register.";
				break;
			case "5":
				bedeutung.textContent = "Add";
				bedeutung.title = "Addition:\nX-Register := X-Register + Y-Register";
				break;
			case "6":
				bedeutung.textContent = "Sub";
				bedeutung.title = "Subtraktion:\nX-Register := X-Register – Y-Register";
				break;
			case "7":
				bedeutung.textContent = "Str X";
				bedeutung.title = "Store X:\nDer Wert vom X-Register wird in die Speicherzelle geschrieben, deren Nummer im Y-Register steht.";
				break;
			case "8":
				bedeutung.textContent = "Ld f";
				bedeutung.title = "Load from:\nLädt den Inhalt der Speicherzelle in das X-Register, deren Nummer im Y-Register steht.";
				break;
			case "":
				bedeutung.textContent = "0";
				bedeutung.removeAttribute("title");
				break
			default:
				bedeutung.textContent = input;
				bedeutung.removeAttribute("title");
		}
	}
}

function updateActive() {
	//Setzt tr zu active wenn der pointer gerade auf sie zeigt
	var allTr = document.querySelectorAll('tr');

	allTr.forEach(function(tr, trIndex) {
		if(trIndex < rows) {
			trIndex++;

			var tr = document.getElementById("tr" + trIndex);
			if(pointer === trIndex) {
				tr.classList.add("active");
			} else {
				if(tr) tr.classList.remove("active");
			}
		}
	});
}

function updateDisplayReg() {
	//Updated die X&Y-Variablen die angezeigt werden
	document.getElementById("regX").innerHTML = regX;
	document.getElementById("regY").innerHTML = regY;
}
