//Damir ahmetovic pizza calculator

var small = prompt("hoeveel small pizza's wilt u bestellen")
var medium = prompt("hoeveel medium pizza's wilt u bestellen")
var large =prompt("hoeveel large pizza's wilt u bestellen")

document.writeln("<br> aantal small pizza's: ")
document.writeln(small)

document.writeln("<br> aantal medium pizza's: ")
document.writeln(medium)
document.writeln("<br> aantal large pizza's: ")
document.writeln(large)
document.write("<br>")
document.write("<br> prijs voor small pizza's: $")
document.write(small * 4.5)
document.write("<br> prijs voor medium pizza's: $")
document.write(medium * 8)
document.write("<br> prijs voor large pizza's: $")
document.write(large * 12)
document.write("<br>")

document.write("<br> totale prijs: $")
document.write(small * 4.5 + medium * 8 + large * 12)