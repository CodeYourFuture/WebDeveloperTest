
//Show and Hide The news Sections
var controlElement = document.querySelector('#show');
controlElement.addEventListener('click', showHide);
var content = document.querySelector('#mybutton');
function showHide(event) {
    event.preventDefault();
    if (content.className === "hide") {
        content.className = "";
    }
    else  {
        content.className = "hide";
    }
}

   


//Form Selectors //

var userEmail = document.querySelector('#useremail');
var userName = document.querySelector('#username');
var userPhone = document.querySelector('#userphone');

var sbumitButton = document.querySelector('#submit-input');
sbumitButton.addEventListener('click', submitForm);

function submitForm(event) {
 event.preventDefault();
    verifyUserEmail();
    verifyUserName();
    verifyUserPhone();
    if (verifyUserEmail() && verifyUserName() && verifyUserPhone()) {
        userEmail.value = "";
        userName.value = "";
        userPhone.value = "";
        alert('Thanks');
       
}
}

function verifyUserName() {
    if (userName.value.length <= 0 ) {
        userName.style.backgroundColor = "red";
    }
    else {
        userName.style.backgroundColor = "white";
        return true;
    }
}

function verifyUserPhone() {
    if ( userPhone.value.length < 11 && userPhone.value.length > 0 ) {
        userPhone.style.backgroundColor = "white";
        return true;
    }
    else {
        userPhone.style.backgroundColor = "red";
        return false;
    }
}

function verifyUserEmail() {
    if (userEmail.value.length <= 0 || textEmail.value.indexOf('@') < 0 ) {
        userEmail.style.backgroundColor = "red";
    }
    else {
        userEmail.style.backgroundColor = "white";
        return true;
    }
}


// AJAX REQUEST

var xhrcontent = document.getElementsByClassName(content);
var request = new XMLHttpRequest(); 	    //creating a request object

 request.onreadystatechange = function() {
   if(request.readyState === 4) {  // check if a response was sent back
     if(request.status === 200) { 	// check if request was successful
       var array = JSON.parse(request.responseText);
            for (var i = 0; i < array.length; i++) {
                var ajaxNewsTitle = document.createElement("p");
                ajaxNewsTitle.innerText = array[i].title; // the ajax request title name
                ajaxNewsTitle.className += 'ajaxTitle';
                content.appendChild(ajaxNewsTitle);
                var ajaxNewsSummary = document.createElement("p");
                ajaxNewsSummary.innerText = array[i].summary;
                ajaxNewsSummary.className += 'ajaxSummary';
                content.appendChild(ajaxNewsSummary);}
     } else {
 alert('An error occurred during your request: ' + request.status + ' ' + request.statusText);
     }
   }
 }

 var url = "https://private-e99507-kabaros.apiary-mock.com/news";	                                    //server location
 request.open("GET", url);					// adding it to the request
request.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //header info
request.send(); 								// sending the request