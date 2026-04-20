var p_proz;
function popup_kak_rabotiat()
{
//Правим прозореца

p_proz = window.open("", "", "top=250, left=620, width=600, height=800");

//HTML в прозореца
//p_proz.document.open();

//HTML съдържание
p_proz.document.write("<html>");
p_proz.document.write("<head><title>How do they work?</title></head>");
p_proz.document.write("<center><font size=5 color=green><i><u>How do they work?</u></i></font></center><br>");

p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>Electric cars operate using an electric motor powered by batteries that store electrical energy to drive the wheels. </font></p>");

p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>When the driver presses the accelerator pedal, a signal is sent to the controller, which regulates the flow of electricity from the battery to the electric motor, which converts electrical energy into mechanical energy to propel the vehicle. This process is known as electromechanical conversion and allows for instant acceleration, as the electric motor develops full torque from zero rpm.</font> </p>");
p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4> Key components: Electric vehicles consist of a battery, an electric motor, power electronics, and a charging system. The battery stores electrical energy, and the electric motor converts this energy into mechanical energy to drive the wheels. The power electronics control the flow of electricity between the battery and the motor. </font></p>");
p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>Regenerative braking: The electric motor can also be used to recharge the battery when coasting or braking, converting kinetic energy into electricity and returning it to the battery. This extends the range and reduces wear on the brake systems.</font></p>");
p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>Charging: Cars are charged from external sources through home or public charging stations, with charging from a regular outlet taking 4 to 8 hours, and fast stations can charge up to 70% in 20-30 minutes.</font></p>");

p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4> Maintenance and efficiency: Electric cars have lower energy costs (about 2-3 BGN per 100 km) and easier maintenance, as they do not need to change oil, filters or belts. They are also more environmentally friendly, producing zero exhaust emissions.</font></p>");
 
 

p_proz.document.write("</html>");
//HTML прозорец затваряне

}





