
// Show/Hide news control
var controlElement = document.querySelector('#controlElement');
controlElement.addEventListener('click', showHide);
var news = document.querySelector('#news');

//receive news section from AJAX
var request = new XMLHttpRequest();         //creating a request object
request.onreadystatechange = function () {
    if (request.readyState === 4) {  // check if a response was sent back
        if (request.status === 200) {     // check if request was successful
            var array = JSON.parse(request.responseText);
            for (var i = 0; i < array.length; i++) {
                var titlePara = document.createElement("p");
                titlePara.innerText = array[i].title;
                titlePara.className += 'title';
                var summarypara = document.createElement("p");
                summarypara.innerText = array[i].summary;
                summarypara.className += 'summary';
                news.appendChild(titlePara);
                news.appendChild(summarypara);
            }
        } else {
            alert('An error occurred during your request: ' + request.status + ' ' + request.statusText);
        }
    }
}
var url = "https://private-e99507-kabaros.apiary-mock.com/news";    //server location
request.open("GET", url);                    // adding it to the request
request.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //header info
request.send();

// Show/Hide Function
function showHide(event) {
    event.preventDefault();    
    if (news.style.display === "") {
        $( "#news" ).hide( "slow" );
    }
    else if (news.style.display === "none") {
        $( "#news" ).show( "slow" );
    }
    else {
         $( "#news" ).hide( "slow" );
    }
}

// Form Validation
//input Text
var textEmail = document.querySelector('#InputEmail');
var textName = document.querySelector('#text-input-name');
var textPhone = document.querySelector('#text-input-phone');
var inputName = document.querySelector('#inputName');
var inputEmail = document.querySelector('#inputEmail');
var inputNumber = document.querySelector('#inputNumber');



//alarms messages
var alertNameField = document.createElement("p");
alertNameField.innerText = "This filed is required,Please type letters only";
alertNameField.className = 'nameAlert';
var alertEmailField = document.createElement("p");
alertEmailField.innerText = "This filed is required,Please enter email like:- Example@XX.XX";
alertEmailField.className = 'emailAlert';
var alertContactField = document.createElement("p");
alertContactField.innerText = "Please enter maxsimum 11 numbers";
alertContactField.className = 'contactAlert';

//submit button
var sbumitButton = document.querySelector('form .btn-primary');
sbumitButton.addEventListener('click', submitForm);
//submit function
function submitForm(event) {
    event.preventDefault();
    var checkValideEmail = checkEmail();
    var checkValideName = checkName();
    var checkValideNumber = checkNumber();
    if (checkValideEmail && checkValideName) {
        textEmail.value = "";
        textName.value = "";
        textPhone.value = "";
        setTimeout(function () {
            alert('Thank you for filling out the form');
        }, 200);
    }
}
//check text in email field 
function checkEmail() {
    if (textEmail.value.length <= 0 || textEmail.value.indexOf('@') < 0 || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(textEmail.value))) {
        inputEmail.appendChild(alertEmailField);
    }
    else {
        if ($('p.emailAlert').length === 1) {
            inputEmail.removeChild(alertEmailField);
        }
        return true;
    }
}

//check text in name field 
function checkName() {
    if (textName.value.length <= 0 || /\d/.test(textName.value) || /[~`!#$%\^&*+=\-\[\]\\';,/{}.|\\":<>\?]/.test(textName.value)) {
        inputName.appendChild(alertNameField);
    }
    else {
        if ($('p.nameAlert').length === 1) {
            inputName.removeChild(alertNameField);
        }
        return true;
    }
}

//check text in number field 
function checkNumber() {
    if (!(/[~`!#$%\^&*+=\-\[\]\\';,/{}.|\\":<>\?]/g.test(textPhone.value)) && textPhone.value.length < 11 && (!(/[A-Za-z]/.test(textPhone.value)) || textPhone.value.length === 0)) {
        if ($('p.contactAlert').length === 1) {
            inputNumber.removeChild(alertContactField);
        }
        return true;
    }
    else {
        inputNumber.appendChild(alertContactField);
        return false;
    }
}



