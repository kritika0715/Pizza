function Multiply()
{
var M=Number(document.getElementById("no").value);
var U=Number(document.getElementById("o1").value);
var L=M*U;
document.getElementById("result").value=L;
}
function myFunction()
{
var a=document.getElementById("fname").value;
var b=document.getElementById("lname").value;
var c=document.getElementById("em").value;
var d=document.getElementById("phoneno").value;
var e=document.getElementById("no").value;
var f=document.getElementById("o1").value;

if(a == "" || b == "")
{
alert("No blank values allowed. Please fill out your order!");
return false;
}
else{
true;
}
}
