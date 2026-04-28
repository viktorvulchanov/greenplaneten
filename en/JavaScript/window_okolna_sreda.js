var p_proz;
function popup_okolna_sreda()
{
//Правим прозореца

p_proz = window.open("", "", "top=250, left=620, width=600, height=600");

//HTML в прозореца
//p_proz.document.open();

//HTML съдържание
p_proz.document.write("<html>");
p_proz.document.write("<head><title>Environment</title></head>");
p_proz.document.write("<center><font size=5 color=green><i><u>Environment</u></i></font></center><br>");

p_proz.document.write("<p style=text-indent:1cm;><font size=4>Electric cars have significant environmental benefits, mainly because they do not generate carbon emissions and help reduce exhaust gases, hydrocarbons and particulate matter in the atmosphere.</font></p>");

p_proz.document.write("<p><font size=4>According to the coefficients of the Euro-emission standards: </font> </p>");
p_proz.document.write("<p><font size=4><li>A conventional <b>diesel car</b> emits an average of 12.8 kg of CO2 emissions when driven 20,000 km per year; </li> </font></p>");
p_proz.document.write("<p><font size=4><li>A conventional <b>gasoline car</b> emits an average of 46 kg of CO2 emissions when driven 20,000 km per year. ; </li></font></p>");
p_proz.document.write("<p><font size=4><li>For <b>electric cars</b> this figure is 0. </li></font></p>");

p_proz.document.write("<p style=text-indent:1cm;><font size=4>In addition to reducing carbon emissions into the atmosphere, thereby contributing to reducing climate change, electric vehicles also help reduce fine dust particles and other air pollutants produced by conventional cars.</font></p>");
p_proz.document.write("<p style=text-indent:1cm;><font size=4>Encouraging the use of electric vehicles helps to fulfill our country's obligations set out in both the Climate Change Act and the European Clean Air Directive in Europe.</font></p>"); 
 

p_proz.document.write("</html>");
//HTML прозорец затваряне

}





