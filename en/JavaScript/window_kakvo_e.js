var p_proz;
function popup_kakvo_e()
{
//Правим прозореца

p_proz = window.open("", "", "top=250, left=620, width=800, height=950");

//HTML в прозореца
//p_proz.document.open();

//HTML съдържание
p_proz.document.write("<html>");
p_proz.document.write("<head><title>What is an electric car?</title></head>");
p_proz.document.write("<center><font size=5 color=green><i><u>What is an electric car?</u></i></font></center><br>");

p_proz.document.write("<p><font size=4><li>An electric car is a car that runs on electricity, not gasoline or diesel.</li></font></p>");
p_proz.document.write("<p><font size=4><li>It has a battery and an electric motor.</font> </p>");
p_proz.document.write("<p><font size=4><li>Electric cars are quieter than regular cars – they are almost inaudible.</li> </font></p>");
p_proz.document.write("<p><font size=4><li> They do not pollute the air because they do not emit harmful gases.</li></font></p>");
p_proz.document.write("<p><font size=4><li>They can be charged at home, like a phone.</li></font></p>");
p_proz.document.write("<p><font size=4><li>They accelerate very quickly - some are faster than sports cars.</li></font></p>");
p_proz.document.write("<p><font size=4><li>They have smart technologies - screens, autopilot, internet.</li></font></p>");
p_proz.document.write("<p><font size=4><li>When stopping, they return energy to the battery (regenerative braking).</li></font></p>");
p_proz.document.write("<p><font size=4><li>The first electric cars were created 100 years ago.</li></font></p>");
p_proz.document.write("<center><img src=images/electric-car_ustroistvo.jpg width=720 height=520></center>");

p_proz.document.write("</html>");
//HTML прозорец затваряне

}





