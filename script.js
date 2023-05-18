async function display() {
    var kuralnum = document.getElementById("kuralno").value;
    if(kuralnum<1 || kuralnum>1330){
        div.innerHTML += `There are 1330 Thirukural<br>Enter a valid number`;
    }else{
    var url = `https://api-thirukkural.vercel.app/api?num=${kuralnum}`
    var res = await fetch(url);
    var res1 = await res.json();

    
 
    var lang = document.getElementById("Language").value;
    if(lang=="Tamil"){
        div.innerHTML += `"${res1.line1}<br>`;
        div.innerHTML += `${res1.line2}"<br><br>`;
        div.innerHTML += `பொருள்<br><br>${res1.tam_exp}<br><br>`;
        div.innerHTML += `இந்த குறள் ${res1.sect_tam} பின்னர் வந்தது `;
        
    }else if(lang == "English"){
        div.innerHTML += `"${res1.eng}"<br><br>`;
        div.innerHTML += `which means<br><br>${res1.eng_exp}`;

    }else if(lang == "Select Language"|| lang == null){
        div.innerHTML+= `Kindly Select A Language`;
    }
}    
}


var container = document.createElement("div");
container.classList.add("container-fluid");

var h1=document.createElement("h1");
h1.classList.add("display-1");
h1.innerHTML="THIRUKKURAL";



var div = document.createElement("div");
div.style.textAlign="center";

var input = document.createElement("select");
input.setAttribute("id", "Language");
input.classList.add("dropdown-select");
var placeholder=document.createElement("option");
placeholder.selected=true;
placeholder.text="Select Language";
var option1 = document.createElement("option");
option1.value = "Tamil";
option1.text = "Tamil";
var option2 = document.createElement("option");
option2.value = "English";
option2.text = "English";

var lnbr = document.createElement("br");

var inputnum = document.createElement("input");
inputnum.setAttribute("id", "kuralno");
inputnum.setAttribute("placeholder","Enter Kural number");


var lnbr1 = document.createElement("br");

var button=document.createElement("button");
button.classList.add("btn","btn-primary");
button.innerHTML="Get Info";
button.addEventListener("click",display);

var lnbr2 = document.createElement("br");

input.append(placeholder,option1,option2);

div.append(h1,input,lnbr,inputnum,lnbr1,button,lnbr2);

container.appendChild(div);

document.body.append(container);
