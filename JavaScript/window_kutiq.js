var p_proz;
function popup_kutiq()
{
//Правим прозореца

p_proz = window.open("", "", "top=250, left=620, width=600, height=660");

//HTML в прозореца
//p_proz.document.open();

//HTML съдържание
p_proz.document.write("<html>");
p_proz.document.write("<head><title>Reusable food box</title></head>");
p_proz.document.write("<center><font size=5 color=green><i><u>Food box</u></i></font></center><br>");
p_proz.document.write("<center><img src=images/kutiq_hrana.png width=215 height=236></center>");
p_proz.document.write("<p style=text-indent:1cm;text-align:Justify;><font size=4>How many times have you not been able to eat all the food in a restaurant? Have you had to ask for takeout? Do you bring your own lunch box?<br>Tell the waiter why you want him to put the leftovers in your box. To overcome your anxiety, repeat that this is your cause for a cleaner planet.<br> Most restaurants charge from 25 to 50 euro cents per box.<br> If you go to a restaurant on average 2-3 times a week, you will save about 1 euro. In a year, the amount can exceed 40 euros.</font></p>");
p_proz.document.write("</html>");
//HTML прозорец затваряне

}





