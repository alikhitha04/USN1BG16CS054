document.getElementById('btn').onmouseover=changeonmouseover;
document.getElementById('btn').onmouseout=changeonmouseout;

var but=document.getElementById('btn');
but.addEventListener('mouseover',changeonmouseover);
but.addEventListener('mouseut',changeonmouseout);

function changeonmouseover(){
    var but=document.getElementById('btn');
    but.style.background="red";
}
function changeonmouseout(){
    var but=document.getElementById('btn');
    this.style.background="blue";
}
document.querySelector('#hid').textContent="new text"; //to change text in hid