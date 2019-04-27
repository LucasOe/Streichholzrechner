function createTable() {
  var tableDiv = document.getElementById("tableDiv");
  var table = document.createElement('TABLE');

  var tableBody = document.createElement('TBODY');
	tableBody.id = 'tableBody';
  table.appendChild(tableBody);

	var tr = document.createElement('TR');
	tableBody.appendChild(tr);

	//Speicherzelle Header
	var speicherzelle_header = document.createElement('TD');
	speicherzelle_header.appendChild(document.createTextNode("Speicherzelle"));
	speicherzelle_header.id = 'tableHeader'
	tr.appendChild(speicherzelle_header);

	//Inhalt Header
	var inhalt_header = document.createElement('TD');
	inhalt_header.appendChild(document.createTextNode("Inhalt"));
	inhalt_header.id = 'tableHeader'
	tr.appendChild(inhalt_header);

	//Bedeutung Header
	var bedeutung_header = document.createElement('TD');
	bedeutung_header.appendChild(document.createTextNode("Bedeutung"));
	bedeutung_header.id = 'tableHeader'
	tr.appendChild(bedeutung_header);

	//Row
  for (var i = 0; i < 10; i++) {
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);

		//Column Speicherzelle
    var td = document.createElement('TD');
    td.appendChild(document.createTextNode("Speicherzelle " + i));
		td.id = 'speicherzelle';
    tr.appendChild(td);

		//Column Inhalt
		var td = document.createElement('TD');
		td.appendChild(document.createTextNode("Inhalt " + i));
		td.id = 'inhalt';
		tr.appendChild(td);

		//Column Bedeutung
		var td = document.createElement('TD');
		td.appendChild(document.createTextNode("Bedeutung " + i));
		td.id = 'bedeutung';
		tr.appendChild(td);
  }
  tableDiv.appendChild(table);
}
createTable();
