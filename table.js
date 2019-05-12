function createTable() {
  var tableDiv = document.getElementById("tableDiv");
  var table = document.createElement('table');

  var tableBody = document.createElement('tbody');
	tableBody.className = 'tableBody';
  table.appendChild(tableBody);

	//Row
  for (var i = 0; i < 20; i++) {
    var tr = document.createElement('tr');
		tr.className = 'tr';
		tr.id = i;
    tableBody.appendChild(tr);

		//Column Speicherzelle
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(i));
		td.className = 'speicherzelle';
    tr.appendChild(td);

		//Column Inhalt
		var td = document.createElement('td');
		var input = document.createElement("input")
			input.setAttribute("type", "number");
			input.setAttribute("min", "0");
			input.setAttribute("defaultValue", "0");
			input.setAttribute("placeholder", "0");
			input.id = 'input' + i;
			input.className = 'userInput';
		td.appendChild(input);
		td.className = 'inhalt';
		tr.appendChild(td);

		//Column Bedeutung
		var td = document.createElement('td');
		td.appendChild(document.createTextNode("0"));
		td.id = "bedeutung" + i;
		td.className = 'bedeutung';
		tr.appendChild(td);
  }
  tableDiv.appendChild(table);
}
createTable();


//Updated die Bedeutung bei änderung des Inhalts
var allInputs = document.querySelectorAll('input');

allInputs.forEach(function(button, buttonIndex) {
  button.addEventListener('click', function() {
		var input = document.getElementById("input" + buttonIndex).value;
		var bedeutung = document.getElementById("bedeutung" + buttonIndex);
		//bedeutung.textContent = input;
		switch(input) {
			case "0":
				bedeutung.textContent = "Jmpg";
				break;
			case "1":
				bedeutung.textContent = "Jmp";
				break;
			case "2":
				bedeutung.textContent = "Ld x";
				break;
			case "3":
				bedeutung.textContent = "Ld y";
				break;
			case "4":
				bedeutung.textContent = "Add";
				break;
			case "5":
				bedeutung.textContent = "Sub";
				break;
			case "6":
				bedeutung.textContent = "Str X";
				break;
			case "7":
				bedeutung.textContent = "Ld f";
				break;
			default:
				bedeutung.textContent = input;
		}
  });
});
