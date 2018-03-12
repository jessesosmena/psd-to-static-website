$(function(){

if (
    navigator.appVersion.toUpperCase().indexOf("CHROME") != -1 ||
    navigator.appVersion.toUpperCase().indexOf("OPERA") != -1 ||
    navigator.appVersion.toUpperCase().indexOf("TRIDENT") != -1 ||
    navigator.appVersion.toUpperCase().indexOf("SAFARI") != -1 
)
{
	var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'fontawesome/js/fontawesome-all.js';    
    document.getElementsByTagName('head')[0].appendChild(script);
}

else if (
	navigator.appVersion.toUpperCase().indexOf("CHROME") != -1 ||
    navigator.appVersion.toUpperCase().indexOf("TRIDENT") != -1 ||
    navigator.appVersion.toUpperCase().indexOf("OPERA") != -1 ||
    navigator.appVersion.toUpperCase().indexOf("SAFARI") != -1 ||
    navigator.appVersion.toUpperCase().indexOf("MSIE") != -1
)
{
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'modernizr-custom.js';    
    document.getElementsByTagName('head')[0].appendChild(script);
}
else if (
    navigator.appVersion.toLowerCase().indexOf("firefox")
)
{
	var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'fontawesome/js/fontawesome-all.js';    
    document.getElementsByTagName('head')[0].appendChild(script);

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'modernizr-custom.js';    
    document.getElementsByTagName('head')[0].appendChild(script);
}
else if (
    navigator.appVersion.toLowerCase().indexOf("safari") 
)
{
    alert("OK");
}

});