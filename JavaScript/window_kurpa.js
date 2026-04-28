var p_proz;
function popup_kurpa()
{
//Правим прозореца

p_proz = window.open("", "", "top=250, left=620, width=600, height=660");

//HTML в прозореца
//p_proz.document.open();

//HTML съдържание
p_proz.document.write("<html>");
p_proz.document.write("<head><title>Платнени кърпи</title></head>");
p_proz.document.write("<center><font size=5 color=green><i><u>Платнени кърпи</u></i></font></center><br>");
p_proz.document.write("<center><img src=images/karpichka.png width=215 height=215></center>");
p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>Забравете за мокрите и сухи кърпички, които освен, че вървят с пластмасова опаковка, не могат да се рециклират.</font></p>");
p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>Използвайте платнени носни кърпички. Те са универсални. Могат да се ползват за попиване на разлятото, почистване на носа, забърсване на ръцете след хранене и др. В края на деня кърпите могат да се изперат и да се ползват отново на следващия ден.</font></p>");
p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>Едно пакетче сухи кърпички струва около 15 евро цента, а мокрите - 50 цента.</font></p>"); 
p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>Платнените кърпи, които вероятно имате у дома са безплатни. Ако нямате, може да си направите сами няколко кърпи от износени памучни дрехи.</font></p>");
p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>Тоест всяка седмица спестявате над 1 евро, което за година прави над 50 евро.</font></p>");




 
 

p_proz.document.write("</html>");
//HTML прозорец затваряне

}





