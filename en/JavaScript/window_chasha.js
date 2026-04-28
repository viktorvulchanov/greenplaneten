var p_proz;
function popup_chasha()
{
//Правим прозореца

p_proz = window.open("", "", "top=250, left=620, width=500, height=610");

//HTML в прозореца
//p_proz.document.open();

//HTML съдържание
p_proz.document.write("<html>");
p_proz.document.write("<head><title>Reusable cup</title></head>");
p_proz.document.write("<center><font size=5 color=green><i><u>Reusable cup</u></i></font></center><br>");
p_proz.document.write("<center><img src=images/chasha.png width=215 height=236></center>");
p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>How often do you buy cappuccino, coffee, tea or milk with cocoa from a nearby store? How many cups do you throw away every day? Buy a reusable bamboo cup. It is not plastic and is suitable for all hot drinks. It does not change the taste of the drinks and is quite strong. It does not break when you drop it. <br>The disposable cup increases the price of the drink by about 5 euro cents. If you take a coffee on the go 5 days a week, that makes over 200 cups a year, or at least 10 euros that you could spend on something more useful. That way you have the satisfaction of not throwing away 200 plastic cups. </font></p>");p_proz.document.write("</html>");
//HTML прозорец затваряне

}





