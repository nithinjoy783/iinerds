

// let a =document.getElementById("a").addEventListener("click",function(e){
//         // if(e){
            
//         e.preventDefault()
//         form1();
//         // }
//     });
    
// }
// a.onclick
function form1()
{
    // e.preventDefault()
    
    

    var name =document.getElementById("name").value;
    var age =document.getElementById("age").value;
    var place =document.getElementById("Place").value;
    var phoneno =document.getElementById("phoneno").value;

    document.getElementById("display").innerHTML="Name of the applicant =\n"+name+"<br/>"+ho"Age = \n"+age+"<br/>"+"Place =\n"+place+"<br/>"+"Phone no=\n"+phoneno;
   

}
