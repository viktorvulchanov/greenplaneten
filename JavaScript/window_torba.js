var p_proz;
function popup_torba()
{
//Правим прозореца

p_proz = window.open("", "", "top=250, left=620, width=600, height=500");

//HTML в прозореца
//p_proz.document.open();

//HTML съдържание
p_proz.document.write("<html>");
p_proz.document.write("<head><title>Cloth Shopping Bag</title></head>");
p_proz.document.write("<center><font size=5 color=green><i><u>Cloth Shopping Bag</u></i></font></center><br>");
p_proz.document.write("<center><img src=images/torba.png width=215 height=236></center>");
p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>Having your own cloth shopping bag is a must if you care about the environment. Plus, it's cool! A bag in the store ranges between 5 and 20 euro cents.</font></p>");
p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>If you shop four times a week and use a cloth bag you would save around 34 euros per year. A cloth bag costs between 50 euro cents and 2 euros and 50 euro cents. </font></p>");
p_proz.document.write("</html>");
//HTML прозорец затваряне

}





