var p_proz;
function popup_slamka()
{
//Правим прозореца

p_proz = window.open("", "", "top=250, left=620, width=600, height=680");

//HTML в прозореца
//p_proz.document.open();

//HTML съдържание
p_proz.document.write("<html>");
p_proz.document.write("<head><title>Сламка</title></head>");
p_proz.document.write("<center><font size=5 color=green><i><u>Сламка</u></i></font></center><br>");
p_proz.document.write("<center><img src=images/slamka.png width=215 height=236></center>");
p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>Сламките са навсякъде около нас. Слагат ги в капучиното и в айряна, а в коктейлите понякога са по 2 или 3, за да е по-атрактивно.</font></p>"); 
p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>Всички кафени и коктейлни напитки на плажа се сервират със сламка. В немалък процент от случаите тези сламки се захвърлят по пясъка. От там те се озовават във водата и стават сериозен замърсител.</font></p>");

p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>Купете си сламка за многократна употреба (с четка за почистване) за 3 евро. Поставете сламката в своята раница или чанта. Почистването им след употреба става лесно с помощта на четката.</font></p>"); 

p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>Пластмасовите сламки струват около 1 евро цент. Ако използвате средно по 4 сламки на седмица, то за годината ще спестите около 1 евро.</font></p>"); 
p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4> Помислете как това ще спести страданията на поне едно морско същество.</font></p>");

p_proz.document.write("</html>");
//HTML прозорец затваряне

}





