function Pali()
{
var x= document.getElementById("Palindrome").value;
console.log(x);
var w =[]
console.log('in',x.length);

for(i=1;i<=x.length;i++)
{
    console.log(x[x.length-i])
    w.push(x[x.length-i])
     
}
console.log('w',w,w.join(''));

if(w.join('') == x){
    document.getElementById("Out").innerHTML="Is Palindrome";
    
    
}else{
    document.getElementById("Out").innerHTML="Not a  Palindrome";
    
    
}
}