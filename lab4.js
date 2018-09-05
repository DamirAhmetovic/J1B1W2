//Damir ahmetovic pizza calculator

var smallpizza = prompt("hoeveel small pizza's wilt u bestellen")
var mediumpizza = prompt("hoeveel medium pizza's wilt u bestellen")
var largepizza = prompt("hoeveel large pizza's wilt u bestellen")
var adres = prompt("wat is uw adres")
var smalldrankje = prompt("hoeveel small dankje wilt u bestellen")
var mediumdrankje = prompt("hoeveel medium drankje wilt u bestellen")
var largedrankje = prompt("hoeveel large drankje wilt u bestellen")

document.writeln("<br> aantal small pizza's: ")
document.writeln(smallpizza)
document.writeln("<br> aantal medium pizza's: ")
document.writeln(mediumpizza)
document.writeln("<br> aantal large pizza's: ")
document.writeln(largepizza)
document.write("<br>")

document.write("<br> prijs voor small pizza's: $")
document.write(smallpizza * 4.5)
document.write("<br> prijs voor medium pizza's: $")
document.write(mediumpizza * 8)
document.write("<br> prijs voor large pizza's: $")
document.write(largepizza * 12)
document.write("<br>")

document.write("<br> <br> totale prijs pizza's: $")
document.write(smallpizza * 4.5 + mediumpizza * 8 + largepizza * 12)



document.body.style.backgroundColor = "blue";



document.writeln("<br> <br> aantal small drankje: ")
document.writeln(smalldrankje)
document.writeln("<br> aantal medium drankje: ")
document.writeln(mediumdrankje)
document.writeln("<br> aantal large drankje: ")
document.writeln(largedrankje)
document.write("<br>")

document.write("<br> prijs voor small drankje: $")
document.write(smalldrankje * 1.5)
document.write("<br> prijs voor medium drankje: $")
document.write(mediumdrankje * 2)
document.write("<br> prijs voor large drankje: $")
document.write(largedrankje * 2.5)
document.write("<br>")

document.write("<br> totale prijs drankjes: $")
document.write(smalldrankje * 1.5 + mediumdrankje * 2 + largedrankje * 2.5)

document.write("<br> <br> <br>")

document.write("totale prijs: $")
document.write(smallpizza * 4.5 + mediumpizza * 8 + largepizza * 12 + smalldrankje * 1.5 + mediumdrankje * 2 + largedrankje *2.5)

document.writeln("<br> <br> uw adres: ")
document.write(adres)