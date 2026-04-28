var p_proz;
function popup_butilka()
{
//Правим прозореца

p_proz = window.open("", "", "top=250, left=620, width=500, height=610");

//HTML в прозореца
//p_proz.document.open();

//HTML съдържание
p_proz.document.write("<html>");
p_proz.document.write("<head><title>Бутилка с филтър</title></head>");
p_proz.document.write("<center><font size=5 color=green><i><u>Бутилка с филтър</u></i></font></center><br>");
p_proz.document.write("<center><img src=images/butilka.png width=215 height=236></center>");
p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>Всички често си купуваме еднократни, пластмасови бутилки вода от магазина. След като изпием водата от бутилката ние обикновено я изхвърляме. Тези бутилки силно замърсяват природата. <br>По тази причина са създадени бутилките за многократна употреба. Също така тези бутилки понякога идват с филтър за вода. Филтрите в тези бутилки елиминират нуждата да купуваме вода от магазина. Mоже да използваме вода от чешмата.<br>Ако си купувате минерална вода 4-5 пъти в седмицата ще платите около 2 евро. За годината сумата надхвърля 90 евро. </font></p>");
p_proz.document.write("</html>");
//HTML прозорец затваряне

}





