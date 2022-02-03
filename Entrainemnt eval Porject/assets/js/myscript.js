function verifierFormulaire() {

    var inputs = document.getElementsByTagName("input");
    var textsArea = document.getElementsByTagName("textarea");
    var textArea = textsArea[0];


    for (let i = 0; i < inputs.length; i++) {

       if(inputs[i].value=="")inputs[i].style.borderColor="red";

       else {

        if(i!=3)inputs[i].style.borderColor="green";

        if(i==3)verifPass(inputs[i]);

        if (i==4 && inputs[4].checked==false)
        inputs[4].nextElementSibling.style.color="red";
        else if (i==4 && inputs[4].checked==true)
        inputs[4].nextElementSibling.style.color="green";


       }
    }

if(textArea.value=="")textArea.style.borderColor="red";

else
  textArea.style.borderColor="green";




}

function verifPass(inputsPassword){



  
if(inputsPassword.length.value<8)
document.getElementsByTagName("text-danger visible").style.visibility="hidden";

    
   

}