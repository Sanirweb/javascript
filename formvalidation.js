function fnameValidate() {

    let first_name = document.getElementById('fname').value

    if (first_name == "") {
        displayMsg('firstname is mandatory', 'fnameMsg', 'red')
        return false
    }

    else if (!first_name.match(/^([A-Z]{1})([a-z])+$/)) {
        displayMsg('firstname only contains alphabet', 'fnameMsg', 'red')
        return false
    }

    else if (first_name.length < 3) {
        displayMsg('Cannot be less than 3', 'fnameMsg', 'red')
        return false
    }

    else {
        displayMsg('Valid Firstname', 'fnameMsg', 'green')
        return true
    }
}

function displayMsg(msg, name, color) {
    document.getElementById(name).innerHTML = msg
    document.getElementById(name).style.color = color
}

function lnameValidate() {

    let last_name = document.getElementById('lname').value

    if (last_name == "") {
        displayMsg('Last name  is mandatory', 'lnameMsg', 'red')
        return false
    }

    else if (!last_name.match(/^([a-zA-Z])+$/)) {
        displayMsg('Lastname only contains alphabet', 'lnameMsg', 'red')
        return false
    }

    else if (last_name.length < 3) {
        displayMsg('Cannot be less than 3', 'lnameMsg', 'red')
        return false
    }

    else {
        displayMsg('Valid Firstname', 'lnameMsg', 'green')
        return true
    }
}

function displayMsg(msg, name, color) {
    document.getElementById(name).innerHTML = msg
    document.getElementById(name).style.color = color
}


function emailValidate() {
    let email = document.getElementById('email').value

    if (email == '') {


        displayMsg('Cannort be empty', 'emailMsg', 'red')
        return false

    }

    else if (!email.match(/^([a-z0-9])[a-z0-9\_\.]+\@+(([a-z])+\.)+([a-z])/)) {
        displayMsg('Error emailformat', 'emailMsg', 'red')
        return false

    }

    else {
        displayMsg('valid Email', 'emailMsg', 'green')
        return true
    }



}



function pwValidate() {
    let email = document.getElementById('password').value

    if (email == '') {


        displayMsg('Cannot be empty', 'passwordmsg', 'red')
        return false

    }

    else if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$&-_.?!]) {8,}$/)) {

        displayMsg('Password Format Invalid','passwordmsg','red')
    }

    else {
        displayMsg('valid Password', 'passwordmsg', 'green')
        return true
    }



}


function validForm(){
    if(fnameValidate() && lnameValidate() && emailValidate() && pwValidate()){

        return true
    }

    else{
        return false
    }
}