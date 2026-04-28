var p_proz;
function popup_butilka()
{
//Правим прозореца

p_proz = window.open("", "", "top=250, left=620, width=500, height=610");

//HTML в прозореца
//p_proz.document.open();

//HTML съдържание
p_proz.document.write("<html>");
p_proz.document.write("<head><title>Water Bottle with a fliter</title></head>");
p_proz.document.write("<center><font size=5 color=green><i><u>Water Bottle with a fliter</u></i></font></center><br>");
p_proz.document.write("<center><img src=images/butilka.png width=215 height=236></center>");
p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>We all often buy disposable, plastic bottles of water from the store. After drinking the water from the bottle, we usually throw it away. These bottles heavily pollute the environment. <br>For this reason, reusable bottles were created. Also, these bottles sometimes come with a water filter. The filters in these bottles eliminate the need to buy water from the store. We can use tap water.<br>If you buy mineral water 4-5 times a week, you will pay about 2 euros. For the year, the amount exceeds 90 euros. </font></p>");
p_proz.document.write("</html>");
//HTML прозорец затваряне

}





