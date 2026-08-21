

function submitpopup()
{
    var nam = document.forms["fbform"]["fbname"].value;
    var ema = document.forms["fbform"]["fbmail"].value;
    var fed = document.forms["fbform"]["fbfb"].value
    if ( nam != "" && ema != "" && fed != "")
    {
        var poppp = document.getElementById("alsopopup");
        var blurr = document.getElementById("test1")
        poppp.classList.toggle("show")
        blurr.classList.toggle("show")
    }

}
