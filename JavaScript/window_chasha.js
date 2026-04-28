var p_proz;
function popup_chasha()
{
//Правим прозореца

p_proz = window.open("", "", "top=250, left=620, width=500, height=610");

//HTML в прозореца
//p_proz.document.open();

//HTML съдържание
p_proz.document.write("<html>");
p_proz.document.write("<head><title>Чаша за многократна употреба</title></head>");
p_proz.document.write("<center><font size=5 color=green><i><u>Чаша за многократна употреба</u></i></font></center><br>");
p_proz.document.write("<center><img src=images/chasha.png width=215 height=236></center>");
p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>Колко често си купувате от близкия магазин капучино, кафе, чай или мляко с какао? Колко чашки изхрърляте ежедневно? Купете си бамбукова чаша за многократна употреба. Тя не е пластмасова и е подходяща за всякакви топли напитки. Не променя вкуса на напитките и е доста здрава. Не се чупи, когато я изпуснете. <br>Чашата за еднократна употреба оскъпява напитката с около 5 евро цента. Ако 5 дни в седмицата си взимате по едно кафе за изпът, това прави над 200 чашки годишно, или поне 10 евро, които бихте могли да похарчите за нещо по-полезно. Така ви остава удовлетворението, че не сте изхвърлили 200 пластмасови чашки. </font></p>");
p_proz.document.write("</html>");
//HTML прозорец затваряне

}





