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
		td.appendChild(document.createTextNode("0")); //Add user input here, select by clicking row.
		td.className = 'inhalt';
		tr.appendChild(td);

		//Column Bedeutung
		var td = document.createElement('td');
		td.appendChild(document.createTextNode("0"));
		td.className = 'bedeutung';
		tr.appendChild(td);
  }
  tableDiv.appendChild(table);
}
createTable();
