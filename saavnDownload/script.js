function fetch(lk)
{
    var text;
    var lk=document.getElementById("link").value
    var url="https://jiosaavnd.herokuapp.com/result/?query="+lk;
    
    var req=new XMLHttpRequest();
    req.open('GET',url,true);
    req.send();
    req.onreadystatechange=processRequest;

    function processRequest(e)
    {
        if(req.readyState==4 && req.status==200)
        {
            var resp=JSON.parse(req.responseText);
            var dl="location.href='"+resp.media_url+"';";
            document.getElementById('play').setAttribute('onclick',dl);
            alert(resp.media_url);
            document.getElementById('dll').setAttribute('href',resp.media_url);
            
        }
    }
     
}

function dow()
{
    document.getElementById('dll').click();
}



