
/*
//Challenge-2
var bill=[124,48,268];
var bill_tip=[];
function tip_calculator(bill)
{
    if(bill<50)
    {
        return total_bill=bill+(bill*(20/100));
        
    }
    else if(bill>=50 && bill<200)
    {
        return total_bill=bill+(bill*(15/100));
    }
    else if(bill>=200)
    {
        return total_bill=bill+(bill*(10/100));
    }
}
a=tip_calculator(bill[0]);
b=tip_calculator(bill[1]);
c=tip_calculator(bill[2]);
bill_tip.push(a);
bill_tip.push(b);
bill_tip.push(c);
console.log(bill);
console.log(bill_tip);


//decision making statements
var age=18;
if(age<13)
{
    console.log("minor");
}
else if(age>=18)
{
    console.log("major");
}
//con?true:false
age>=18?console.log("major"):console.log("minor");

//function
function Likhitha(fname,lname){
    console.log(fname+" "+lname);
}
Likhitha('sushmitha','narayan');

//arrays
var names=["BNMIT","Chandana","Sneha"];
console.log(names[2]);
console.log(names.length);
names.push("sushmi");
names.unshift("raman");
console.log(names);
names.pop();
console.log(names);
*/



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