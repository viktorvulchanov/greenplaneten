var p_proz;
function popup_kutiq()
{
//Правим прозореца

p_proz = window.open("", "", "top=250, left=620, width=600, height=660");

//HTML в прозореца
//p_proz.document.open();

//HTML съдържание
p_proz.document.write("<html>");
p_proz.document.write("<head><title>Кутия за храна</title></head>");
p_proz.document.write("<center><font size=5 color=green><i><u>Кутия за храна</u></i></font></center><br>");
p_proz.document.write("<center><img src=images/kutiq_hrana.png width=215 height=236></center>");
p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>Колко пъти в ресторант не сте успявали да изядете всичката храна? Налагало ли се е да помолите да ви сложат храната за вкъщи? Носите ли си ваша кутия за храна?<br>Разкажете на сервитьора защо искате да постави остатъка от храна във вашата кутия. За да преодолеете притеснението си повтаряйте, че това е вашата кауза за по-чиста планета.<br> Повечето ресторанти таксуват от 25 до 50 евро цента за кутия.<br>	Ако ходите на ресторант средно 2-3 пъти в седмица ще спестите около 1 евро. За една година сумата може да надмине 40 евро.</font></p>");
p_proz.document.write("</html>");
//HTML прозорец затваряне

}





