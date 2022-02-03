function verifierFormulaire() {
    var name = document.forms["myForm"]["name"];
    var email= document.forms["myForm"]["email"];
    var prénom= document.forms["myForm"]["prénom"];
    var password= document.forms["myForm"]["password"];
    var mesaage= document.forms["myForm"]["message"];
    var check= document.getElementById("formCheck-1");


    if (name.value == "") {

        document.getElementsByTagName("input")[0].style.borderColor="red";
        name.focus(); 
        

    }

    else  //((name.value>=65 || name.value<=90) || (name.value>=97 || name.value<=122))
    {

        document.getElementsByTagName("input")[0].style.borderColor="green";

    }

    if (prénom.value == "") {

        document.getElementsByTagName("input")[1].style.borderColor="red";
        prénom.focus(); 
        

    }

    else //if ((prénom.value>=65 || prénom.value<=90) || (prénom.value>=97 || prénom.value<=122))
    {

        document.getElementsByTagName("input")[1].style.borderColor="green";

    }


    if (email.value == "") {

        document.getElementsByTagName("input")[2].style.borderColor="red";
        email.focus(); 
        

    }

    else //if ((email.value>=65 || email.value<=90) || (email.value>=97 || email.value<=122))
    {

        document.getElementsByTagName("input")[2].style.borderColor="green";

    }

    if (password.value == "" || password<=8 ) {

        document.getElementsByTagName("input")[3].style.borderColor="red";
        document.getElementsByTagName("small");
        password.focus(); 
        

    }

    else //if((password.value>=65 || password.value<=90) || (password.value>=97 || password.value<=122))
    {

        document.getElementsByTagName("input")[3].style.borderColor="green";

    }

    if (mesaage.value == "") {

        document.getElementsByTagName("textarea")[0].style.borderColor="red";
        mesaage.focus(); 
        

    }

    else //if ((mesaage.value>=65 || mesaage.value<=90) || (mesaage.value>=97 || mesaage.value<=122))
    {

        document.getElementsByTagName("textarea")[0].style.borderColor="green";

    }

    if (check.value== false) {

        document.getElementsByTagName("input").style.borderColor="red";
        check.focus(); 
        

    }
    else //if ((mesaage.value>=65 || mesaage.value<=90) || (mesaage.value>=97 || mesaage.value<=122))
    {

        document.getElementsByTagName("input").style.borderColor="green";

    }

    

}