var p_proz;
function popup_ikonomii()
{
//Правим прозореца

p_proz = window.open("", "", "top=250, left=620, width=600, height=570");

//HTML в прозореца
//p_proz.document.open();

//HTML съдържание
p_proz.document.write("<html>");
p_proz.document.write("<head><title>Икономически ползи</title></head>");
p_proz.document.write("<center><font size=5 color=green><i><u>Икономически ползи</u></i></font></center><br>");
p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>Електромобилите имат и големи икономически ползи:</font></p>");


p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4><li> При 20 000 км годишен пробег <b>разходите за зареждане на един електромобил</b> са около <u> 720 лв.</u>, за същия годишен пробег <b>разходите за гориво на един конвенционален автомобил </b> са около <u>3150 лв.</u> – повече от четири пъти повече. </li>  </font></p>");

p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4><li> Освен това, един <b>конвенционален автомобил </b>има значителни <b>разходи за масла и друга поддръжка</b> всяка година – близо <u>1000 лева</u> за среден пробег от 20 000 км.  Тези разходи при <b>електромобила</b> са равни на <u>0 лева.</u> </li></font></p>");

p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4><li>Всичко това прави електромобила около 6 пъти по-икономичен в дългосрочен план.  </li></font></p>");
p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>Освен това, електромобилите са значително по-практични и лесни за управление, особено в натоварена градска среда. Те осигуряват тихо придвижване, с което драстично спомагат за намаляването на шума. </font></p>");
p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>Към това трябва да се прибави и факта, че притежателите на електромобили имат право на безплатен достъп до синя/зелена зона за паркиране, което генерира допълнителни  икономически ползи.</font></p>");

 
 

p_proz.document.write("</html>");
//HTML прозорец затваряне

}





