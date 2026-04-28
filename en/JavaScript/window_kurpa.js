var p_proz;
function popup_kurpa()
{
//Правим прозореца

p_proz = window.open("", "", "top=250, left=620, width=600, height=660");

//HTML в прозореца
//p_proz.document.open();

//HTML съдържание
p_proz.document.write("<html>");
p_proz.document.write("<head><title>Cloth Towels</title></head>");
p_proz.document.write("<center><font size=5 color=green><i><u>Cloth Towels</u></i></font></center><br>");
p_proz.document.write("<center><img src=images/karpichka.png width=215 height=215></center>");
p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>Forget about wet and dry wipes, which, in addition to coming with plastic packaging, cannot be recycled.</font></p>");
p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>Use cloth nose towels. They are versatile. They can be used to soak up spills, clean your nose, wipe your hands after eating, etc. At the end of the day, the handkerchiefs can be washed and used again the next day.</font></p>");
p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>A packet of dry nose towels costs about 15 euro cents, and wet ones - 50 cents.</font></p>");
p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>The cloth towels you probably have at home are free. If you don't have any, you can make some yourself from worn-out cotton clothes.</font></p>");
p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>That means you save over 1 euro every week, which is over 50 euros in a year.</font></p>");




 
 

p_proz.document.write("</html>");
//HTML прозорец затваряне

}





