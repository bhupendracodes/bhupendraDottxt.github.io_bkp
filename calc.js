function init()
{
    calculate(2020);
    document.getElementById("cyear").innerHTML="YEAR - 2020";
}

function submit()
{
    var year=document.getElementById("year").value;
    document.getElementById("cyear").innerHTML="YEAR - "+year;
    calculate(year);
}

function isLeap(y)
{
    var leap=false;
    if(y%100 == 0)
    {
        if(y%400 == 0)
        leap=true;
        else
        leap=false;
    }
    else
    {
        if(y%4 == 0)
        leap=true;
        else
        leap=false;
    }
    return leap;
}
function calculate(year)
{
    var yearin=year;
    if(yearin>0 && yearin<=999999)
    {
        year=year-1;
        var y1=year%100;
        var cent=year-y1;
        var g=0;
        var finodd=0;
        var leap=0;
        var normal=0;
        if(cent%400 != 0)
        {
            cent=cent-100;
            g=100;
            if(cent%400 != 0)
            {
                cent=cent-100;
                g=200;
                if(cent%400 != 0)
                {
                    cent=cent-100;
                    g=300;
                }
            }
        }
        if(g==100)
        finodd=5;
        else if(g==200)
        finodd=3;
        else if(g==300)
        finodd=1;
        else
        finodd=0;
        leap=Math.floor(y1/4);
        normal=y1-leap;
        finodd=finodd+(2*leap)+normal;
        finodd=finodd+1;
        finodd=finodd%7; 
        //JANUARY
        var f=0;
        var k=1;
        var jan=[];
        k=1;
        var fr=finodd;
        for(f=0;f<=41;f++)
        {
            if(f<fr || k>31)
            jan[f]="";
            else
            {
                jan[f]=k;
                k++;
            }                
        }
        for(k=1;k<=42;k++)
        {
            var id="jan"+k;
            var sg=document.getElementById(id);
            sg.innerHTML = jan[k-1];
        }
        //FEBRUARY
        finodd=(finodd+31)%7;
        var f=0;
        var k=1;
        var feb=[];
        k=1;
        var fr=finodd;
        for(f=0;f<=41;f++)
        {
            if(f<fr || k>(isLeap(yearin)?29:28))
            feb[f]="";
            else
            {
                feb[f]=k;
                k++;
            }                
        }
        for(k=1;k<=42;k++)
        {
            var id="feb"+k;
            var sg=document.getElementById(id);
            sg.innerHTML = feb[k-1];
        }
        //MARCH
        finodd=(finodd+(isLeap(yearin)?29:28))%7;
        var f=0;
        var k=1;
        var mar=[];
        k=1;
        var fr=finodd;
        for(f=0;f<=41;f++)
        {
            if(f<fr || k>31)
            mar[f]="";
            else
            {
                mar[f]=k;
                k++;
            }                
        }
        for(k=1;k<=42;k++)
        {
            var id="mar"+k;
            var sg=document.getElementById(id);
            sg.innerHTML = mar[k-1];
        }
        //APRIL
        finodd=(finodd+31)%7;
        var f=0;
        var k=1;
        var apr=[];
        k=1;
        var fr=finodd;
        for(f=0;f<=41;f++)
        {
            if(f<fr || k>30)
            apr[f]="";
            else
            {
                apr[f]=k;
                k++;
            }                
        }
        for(k=1;k<=42;k++)
        {
            var id="apr"+k;
            var sg=document.getElementById(id);
            sg.innerHTML = apr[k-1];
        }
        //MAY
        finodd=(finodd+30)%7;
        var f=0;
        var k=1;
        var may=[];
        k=1;
        var fr=finodd;
        for(f=0;f<=41;f++)
        {
            if(f<fr || k>31)
            may[f]="";
            else
            {
                may[f]=k;
                k++;
            }                
        }
        for(k=1;k<=42;k++)
        {
            var id="may"+k;
            var sg=document.getElementById(id);
            sg.innerHTML = may[k-1];
        }
        //jun
        finodd=(finodd+31)%7;
        var f=0;
        var k=1;
        var jun=[];
        k=1;
        var fr=finodd;
        for(f=0;f<=41;f++)
        {
            if(f<fr || k>30)
            jun[f]="";
            else
            {
                jun[f]=k;
                k++;
            }                
        }
        for(k=1;k<=42;k++)
        {
            var id="jun"+k;
            var sg=document.getElementById(id);
            sg.innerHTML = jun[k-1];
        }
        //jul
        finodd=(finodd+30)%7;
        var f=0;
        var k=1;
        var jul=[];
        k=1;
        var fr=finodd;
        for(f=0;f<=41;f++)
        {
            if(f<fr || k>31)
            jul[f]="";
            else
            {
                jul[f]=k;
                k++;
            }                
        }
        for(k=1;k<=42;k++)
        {
            var id="jul"+k;
            var sg=document.getElementById(id);
            sg.innerHTML = jul[k-1];
        }
        //aug
        finodd=(finodd+31)%7;
        var f=0;
        var k=1;
        var aug=[];
        k=1;
        var fr=finodd;
        for(f=0;f<=41;f++)
        {
            if(f<fr || k>31)
            aug[f]="";
            else
            {
                aug[f]=k;
                k++;
            }                
        }
        for(k=1;k<=42;k++)
        {
            var id="aug"+k;
            var sg=document.getElementById(id);
            sg.innerHTML = aug[k-1];
        }
        //sep
        finodd=(finodd+31)%7;
        var f=0;
        var k=1;
        var sep=[];
        k=1;
        var fr=finodd;
        for(f=0;f<=41;f++)
        {
            if(f<fr || k>30)
            sep[f]="";
            else
            {
                sep[f]=k;
                k++;
            }                
        }
        for(k=1;k<=42;k++)
        {
            var id="sep"+k;
            var sg=document.getElementById(id);
            sg.innerHTML = sep[k-1];
        }
        //oct
        finodd=(finodd+30)%7;
        var f=0;
        var k=1;
        var oct=[];
        k=1;
        var fr=finodd;
        for(f=0;f<=41;f++)
        {
            if(f<fr || k>31)
            oct[f]="";
            else
            {
                oct[f]=k;
                k++;
            }                
        }
        for(k=1;k<=42;k++)
        {
            var id="oct"+k;
            var sg=document.getElementById(id);
            sg.innerHTML = oct[k-1];
        }  
        //nov
        finodd=(finodd+31)%7;
        var f=0;
        var k=1;
        var nov=[];
        k=1;
        var fr=finodd;
        for(f=0;f<=41;f++)
        {
            if(f<fr || k>30)
            nov[f]="";
            else
            {
                nov[f]=k;
                k++;
            }                
        }
        for(k=1;k<=42;k++)
        {
            var id="nov"+k;
            var sg=document.getElementById(id);
            sg.innerHTML = nov[k-1];
        } 
        //dec
        finodd=(finodd+30)%7;
        var f=0;
        var k=1;
        var dec=[];
        k=1;
        var fr=finodd;
        for(f=0;f<=41;f++)
        {
            if(f<fr || k>31)
            dec[f]="";
            else
            {
                dec[f]=k;
                k++;
            }                
        }
        for(k=1;k<=42;k++)
        {
            var id="dec"+k;
            var sg=document.getElementById(id);
            sg.innerHTML = dec[k-1];
        }
    }
    else
    alert("Please enter year from range: 1-999999 only");
        
}