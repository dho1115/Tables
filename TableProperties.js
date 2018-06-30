

let h1 = document.querySelector("h1");

let table = document.createElement("Table");

let row1 = table.insertRow(0);
let row2 = table.insertRow(1);
let row3 = table.insertRow(2);

let cell1 = row1.insertCell(0);
let cell2 = row1.insertCell(1);

let cell3 = row2.insertCell(0);
let cell4 = row2.insertCell(1);

let cell5 = row3.insertCell(0);
let cell6 = row3.insertCell(1);

cell1.innerHTML = "cell 1";
cell2.innerHTML = "cell 2";

cell3.innerHTML = "cell 3";
cell4.innerHTML = "cell 4";

cell5.innerHTML = "cell 5";
cell6.innerHTML = "cell 6";

h1.append(table);