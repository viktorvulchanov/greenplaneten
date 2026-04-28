var p_proz;
function popup_okolna_sreda()
{
//Правим прозореца

p_proz = window.open("", "", "top=250, left=620, width=600, height=600");

//HTML в прозореца
//p_proz.document.open();

//HTML съдържание
p_proz.document.write("<html>");
p_proz.document.write("<head><title>Околна среда</title></head>");
p_proz.document.write("<center><font size=5 color=green><i><u>Околна среда</u></i></font></center><br>");

p_proz.document.write("<p style=text-indent:1cm;><font size=4>Електрическите автомобили имат значителни ползи за околната среда, най-вече защото не генерират въглеродни емисии и спомагат за намаляването на изгорелите газове, въглеводородите и праховите частици в атмосферата.</font></p>");

p_proz.document.write("<p><font size=4>Според коефициентите на Евро-емисионните стандарти: </font> </p>");
p_proz.document.write("<p><font size=4><li>Eдин конвенционален <b>дизелов автомобил</b> отделя средно 12.8 кг емисии CO2 при пробег от 20 000 км годишно;  </li> </font></p>");
p_proz.document.write("<p><font size=4><li>Eдин конвенционален <b>бензинов автомобил</b> отделя средно 46 кг емисии CO2 при пробег от 20 000 км годишно. ; </li></font></p>");
p_proz.document.write("<p><font size=4><li>За <b>електромобилите</b> тази цифра е 0. </li></font></p>");

p_proz.document.write("<p style=text-indent:1cm;><font size=4>Освен с редуцирането на отделяните въглеродни емисии в атмосферата, с което допринасят за намаляване изменението на климата, електромобилите спомагат и за намаляването на фините прахови частици и други замърсители на въздуха, произвеждани от конвенционалните автомобили.</font></p>");
p_proz.document.write("<p style=text-indent:1cm;><font size=4>Насърчаване използването на електромобили спомага за изпълнението на задълженията на страната ни, заложени както в Закона за изменението на климата, така и в Европейската Директива за чист въздух в Европа.</font></p>");
 
 

p_proz.document.write("</html>");
//HTML прозорец затваряне

}





