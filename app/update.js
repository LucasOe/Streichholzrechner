/*
	Updatet die die Tabelle bedingt durch den Inhalt
*/

var allInputs = document.querySelectorAll('input');

allInputs.forEach(function(button, buttonIndex) {
  button.addEventListener('click', handler, false);
	button.addEventListener('change', handler, false);

	function handler(event) {
		var input = document.getElementById(buttonIndex).value;
		var bedeutung = document.getElementById("b" + buttonIndex);
		var tr = document.querySelectorAll('tr');

		//Add input to array
		inputArray[button.id] = input;
		updateIsVar();

		//Update Bedeutung
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

		//Setzt die Klasse von tr zu var wenn der vorherige Befehl Ld x/y ist.
		tr.forEach(function(tr, trIndex) {
			var test = document.getElementById("tr" + trIndex);
			if(isVarArray[trIndex] === true) {
				test.classList.add("var");
			} else {
				test.classList.remove("var");
			}
		});
  }
});
