var p_proz;
function popup_kakvo_e()
{
//Правим прозореца

p_proz = window.open("", "", "top=250, left=620, width=800, height=950");

//HTML в прозореца
//p_proz.document.open();

//HTML съдържание
p_proz.document.write("<html>");
p_proz.document.write("<head><title>Какво е електромобил?</title></head>");
p_proz.document.write("<center><font size=5 color=green><i><u>Какво е електромобил?</u></i></font></center><br>");

p_proz.document.write("<p><font size=4><li>Електромобилът е кола, която се движи с електричество, а не с бензин или дизел.</li></font></p>");
p_proz.document.write("<p><font size=4><li>Има батерия и електромотор.</font> </p>");
p_proz.document.write("<p><font size=4><li>Електромобилите са по-тихи от обикновените коли – почти не се чуват.</li> </font></p>");
p_proz.document.write("<p><font size=4><li> Не замърсяват въздуха, защото не отделят вредни газове.</li></font></p>");
p_proz.document.write("<p><font size=4><li>Могат да се зареждат у дома, както телефон.</li></font></p>");
p_proz.document.write("<p><font size=4><li>Ускоряват много бързо – някои са по-бързи от спортни коли.</li></font></p>");
p_proz.document.write("<p><font size=4><li>Имат умни технологии – екрани, автопилот, интернет.</li></font></p>");
p_proz.document.write("<p><font size=4><li>При спиране те връщат енергия в батерията (регенеративно спиране).</li></font></p>");
p_proz.document.write("<p><font size=4><li>Първите електромобили са създадени още преди 100 години.</li></font></p>");
p_proz.document.write("<center><img src=images/electric-car_ustroistvo.jpg width=720 height=520></center>");

p_proz.document.write("</html>");
//HTML прозорец затваряне

}





