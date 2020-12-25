function fetch()
{
    var usern=document.getElementById("username").value;
    var url="https://www.instagram.com/"+usern+"/?__a=1";
    var req=new XMLHttpRequest();
    req.open('GET',url,true);
    req.send();
    req.onreadystatechange=processRequest;
   
    function processRequest(e)
    {
        if(req.readyState==4 && req.status==200)
        {
            var resp=JSON.parse(req.responseText);
            var pplink=resp.graphql.user.profile_pic_url_hd;
            document.getElementById('pp').setAttribute('src',pplink);
            //alert(resp.media_url);
            //document.getElementById('dll').setAttribute('href',resp.media_url);
            
        }
    }



}