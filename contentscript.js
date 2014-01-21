var dap = document.getElementsByClassName("monto-inversion");

console.log(dap.length);
var sum = 0;
for(var i = 0; i < dap.length; i++) {
  var d = dap[i].innerText;
  d = d.replace("$ ", "");
  d = d.replace(/\./g, "");
  d = parseInt(d);
  sum += d;  
}

console.log(sum);

var sumStr = "$ " + sum.toLocaleString();
sumStr = sumStr.replace(/,/g, ".");

var tableRef = document.getElementById("tbodyTabla1");
var newRow   = tableRef.insertRow(tableRef.rows.length);

var newCell = newRow.insertCell(0);
newCell.innerHTML = "<b>" + dap.length + " depositos </b>";

newCell  = newRow.insertCell(1);
newCell.innerHTML = "<b>Total</b>";

newCell  = newRow.insertCell(2);
newCell.innerHTML = "<b>" + sumStr + "</b>";

for(var i = 3; i < 6; i++) {
  newCell  = newRow.insertCell(i);
}
