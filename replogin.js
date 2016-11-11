export default function replogin(url){
    if (url ==""){ // проверка на пустую строку
	    return nameout = "Invalid username";
	}
    var nameout = "@";
	nameout = nameout + url.replace(/(\/*)?.+?\.(com|ru|net|me|xn.[^\/]*)\//i,"");
    /*проверяем наличие \ и их может 2 и боле, потом ищем (.) после нее проверяем на все известные домены до симлова /, ВАЖНО зработало только когда убрал - G в регулярке*/ 
    nameout = nameout.replace(/\?.+|\/.+/gi,""); // удаляем все символы если логин записан в виде login@blabla или login/bla bla bla
    nameout = nameout.replace(/@+/gi, "@"); // убираем лишние симловы @  если они есть
	return nameout;
} 