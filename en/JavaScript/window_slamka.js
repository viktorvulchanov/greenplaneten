var p_proz;
function popup_slamka()
{
//Правим прозореца

p_proz = window.open("", "", "top=250, left=620, width=600, height=680");

//HTML в прозореца
//p_proz.document.open();

//HTML съдържание
p_proz.document.write("<html>");
p_proz.document.write("<head><title>Straw</title></head>");
p_proz.document.write("<center><font size=5 color=green><i><u>Reusable straw</u></i></font></center><br>");
p_proz.document.write("<center><img src=images/slamka.png width=215 height=236></center>");
p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>Straws are all around us. They are put in cappuccino and ayran, and in cocktails sometimes there are 2 or 3 to make it more attractive.</font></p>");
p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>All coffee and cocktail drinks on the beach are served with a straw. In a significant percentage of cases, these straws are thrown on the sand. From there, they end up in the water and become a serious pollutant.</font></p>");

p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>Buy a reusable straw (with a cleaning brush) for 3 euros. Put the straw in your backpack or bag. Cleaning them after use is easy with the brush.</font></p>");

p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>Plastic straws cost about 1 euro cent. If you use an average of 4 straws per week, you will save about 1 euro per year.</font></p>");
p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4> Think about how this will save the suffering of at least one sea creature.</font></p>");

p_proz.document.write("</html>");
//HTML прозорец затваряне

}





