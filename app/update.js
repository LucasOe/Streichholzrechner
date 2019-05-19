/*
	Updatet die die Tabelle bedingt durch den Inhalt
*/

//Druchläuft alle buttons und fügt Event Listeners hinzu
var allInputs = document.querySelectorAll('input');

allInputs.forEach(function(button, buttonIndex) {
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

});

function updateClass() {
	//Durchläuft alle tr & setzt die Klasse zu var wenn es sich um eine Variable handelt
	var allTr = document.querySelectorAll('tr');

	allTr.forEach(function(tr, trIndex) {
		var tr = document.getElementById("tr" + trIndex);
		if(isVarArray[trIndex]) {
			tr.classList.add("var");
		} else {
			if(tr) tr.classList.remove("var");
		}
		updateBedeutung(trIndex);
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
				bedeutung.title = "Bedingter Sprung \n Sprung zur Adresse, die im Y-Register steht, wenn der Inhalt des X-Registers größer 0 ist.";
				break;
			case "2":
				bedeutung.textContent = "Jmp";
				bedeutung.title = "Unbedingter Sprung \n Sprung zu der Adresse, die im Y-Register steht.";
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
				bedeutung.title = "Addition \n X-Register := X-Register + Y-Register";
				break;
			case "6":
				bedeutung.textContent = "Sub";
				bedeutung.title = "Subtraktion \n X-Register := X-Register – Y-Register";
				break;
			case "7":
				bedeutung.textContent = "Str X";
				bedeutung.title = "Store X \n Der Wert vom X-Register wird in die Speicherzelle geschrieben, deren Nummer im Y-Register steht.";
				break;
			case "8":
				bedeutung.textContent = "Ld f";
				bedeutung.title = "Load from \n Lädt den Inhalt der Speicherzelle in das X-Register, deren Nummer im Y-Register steht.";
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
