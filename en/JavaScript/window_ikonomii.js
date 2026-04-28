var p_proz;
function popup_ikonomii()
{
//Правим прозореца

p_proz = window.open("", "", "top=250, left=620, width=600, height=570");

//HTML в прозореца
//p_proz.document.open();

//HTML съдържание
p_proz.document.write("<html>");
p_proz.document.write("<head><title>Economic Benefits</title></head>");
p_proz.document.write("<center><font size=5 color=green><i><u>Economic Benefits</u></i></font></center><br>");
p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>Electric cars also have major economic benefits:</font></p>");

p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4><li> With an annual mileage of 20,000 km, the cost of charging an electric car is around <u> 720 BGN.</u>, while for the same annual mileage, the cost of fuel for a conventional car is around <u>3150 BGN.</u> – more than four times more. </li> </font></p>");

p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4><li> In addition, a <b>conventional car</b> has significant <b>oil and other maintenance costs</b> every year – nearly <u>1000 leva</u> for an average mileage of 20,000 km. These costs for an <b>electric car</b> are equal to <u>0 leva.</u> </li></font></p>");

p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4><li>All this makes an electric car about 6 times more economical in the long run. </li></font></p>");
p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>In addition, electric vehicles are significantly more practical and easy to drive, especially in busy urban environments. They provide quiet movement, which dramatically helps reduce noise. </font></p>");
p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>Added to this is the fact that electric vehicle owners have the right to free access to blue/green parking zones, which generates additional economic benefits.</font></p>");
 
 

p_proz.document.write("</html>");
//HTML прозорец затваряне

}





