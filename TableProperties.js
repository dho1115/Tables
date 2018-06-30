let h1 = document.querySelector("h1");

let table = document.createElement("Table");

function insertRowCells(tab) 
{
	let randnum = Math.floor(Math.random()*10);

	let row1 = tab.insertRow(0);

	let cell1 = row1.insertCell(0);
	let cell2 = row1.insertCell(1);
	let cell3 = row1.insertCell(2);

	cell1.innerHTML = randnum;
	randnum = Math.floor(Math.random()*10);
	cell2.innerHTML = randnum;
	randnum = Math.floor(Math.random()*10);
	cell3.innerHTML = randnum;
}

h1.append(table);