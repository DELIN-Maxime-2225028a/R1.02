function style(){
    var theme = document.getElementsByTagName('link')[0]; 
    if (theme.getAttribute('href') == 'style.css') { 
        theme.setAttribute('href', 'sombre.css'); 
    } else { 
        theme.setAttribute('href', 'style.css'); 
    } 
}