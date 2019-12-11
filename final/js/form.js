function formValidation() {

    var name=document.contact.name;
    var email = document.contact.email;
       if (AllLetter(name) &&
        ValidateEmail(email)) {
            
        return true;
    }

    else {
       
        return false;

    }
}

//verify only alphabet is used
function AllLetter(name) {
    var letters = /^[A-Za-z\s]+$/;
    if (name.value.match(letters)) {
        return true;
    }
    else {
        alert('Please input alphabet characters only');
        return false;
    }
}


//validate email address
function ValidateEmail(email)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
if(email.value.match(mailformat))
{
return true;
}
else
{
alert("Please enter a valid email address!");
email.focus();
return false;
}
}
