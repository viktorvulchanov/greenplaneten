var p_proz;
function popup_torba()
{
//Правим прозореца

p_proz = window.open("", "", "top=250, left=620, width=600, height=500");

//HTML в прозореца
//p_proz.document.open();

//HTML съдържание
p_proz.document.write("<html>");
p_proz.document.write("<head><title>Платнена торба за пазаруване</title></head>");
p_proz.document.write("<center><font size=5 color=green><i><u>Платнена торба за пазаруване</u></i></font></center><br>");
p_proz.document.write("<center><img src=images/torba.png width=215 height=236></center>");
p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>Да си имаш собствена платнена торба за пазаруване е задължително, ако си загрижен за природата. Освен това е готино! Една торбичка в магазина варира между 5 и 20 евро цента.</font></p>");
p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>Ако пазарувате четири пъти седмично и използвате платнена торба бихте спестили около 34 евро годишно. Една платнена торба струва между 50 евро цента и 2 евро и 50 евро цента. </font></p>");
p_proz.document.write("</html>");
//HTML прозорец затваряне

}





