/*================= Form validation =================*/
window.addEventListener('load', function () {
    submitForm.addEventListener('click', function (event) {
        event.preventDefault();
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phoneNumber = document.getElementById('phoneNumber');
        function validEmail (email) {
            return email.value.indexOf("@") !== 0 && email.value.indexOf("@") !== -1 && email.value.indexOf(".") !== -1 && email.value.lastIndexOf("@") < email.value.lastIndexOf(".") && email.value.lastIndexOf(".") < (email.value.length - 2) 
        }
        function validName(name) {
            return name.value !== "";
        }
        function validPhoneNumber(phoneNumber) {
            return phoneNumber.value !== "" && phoneNumber.value.length < 12;
        }
        // If the name, email and contact number valid execute this code
        /*==============================================================*/
        if (validName(name) && validPhoneNumber(phoneNumber) && validEmail(email)) {
                    alert('Thank you for register with us');
        // If the name, email and contact number are not valid execute this code
        /*====================================================================*/
        }else if (!validName(name) && !validPhoneNumber(phoneNumber) && !validEmail(email)) {
                    name.style.background = '#f00';
                    email.style.background = '#f00';
                    phoneNumber.style.background = '#f00';
        // If the name and email are valid but phone number not execute this code
        /*====================================================================*/
        }else if(validName(name) && !validPhoneNumber(phoneNumber) && validEmail(email)) {
                    phoneNumber.style.background = '#f00';
        // If the name and phone number are valid but email not execute this code
        /*==================================================================*/
        }else if(validName(name) && validPhoneNumber(phoneNumber) && !validEmail(email)) {           
                    email.style.background = '#f00';
        // If the email and phone number are valid but name not execute this code
        /*==================================================================*/
        }else  if(!validName(name) && validPhoneNumber(phoneNumber) && validEmail(email)) {
                    name.style.background = '#f00';
        // If the name is valid but email and phone number are not execute this code
        /*==================================================================*/
        }else if(validName(name) && !validPhoneNumber(phoneNumber) && !validEmail(email)) {
                    email.style.background = '#f00';
                    phoneNumber.style.background = '#f00';
        // If the email is valid but name and phone number are not execute this code
        /*==================================================================*/
        } else if(!validName(name) && !validPhoneNumber(phoneNumber) && validEmail(email)) {
                    name.style.background = '#f00';
                    phoneNumber.style.background = '#f00';
        // If the phone number is valid but email and name are not execute this code
        /*==================================================================*/
        }else if(!validName(name) && validPhoneNumber(phoneNumber) && !validEmail(email)) {
                    name.style.background = '#f00';
                    email.style.background = '#f00';
        }else {
                    alert('error');
                    return false;
        }

    });
}, false);
/*==================== Start AJAX Get Data===================*/
window.addEventListener('load', function () {
    const resivedNews = document.getElementById('resivedNews');
resivedNews.style.display = 'none';
const showNews = document.querySelector('#showNews');
const url = "https://private-e99507-kabaros.apiary-mock.com/news";
var request = new XMLHttpRequest();
    showNews.addEventListener('click', function (event) {
        event.preventDefault();
        request.onreadystatechange = function () {
            if (request.readyState === 4 ){
                if (request.status === 200) {
                    const data = JSON.parse(request.responseText);
                    for (i = 0; i < data.length; i++) {                       
                        resivedNews.innerHTML += "<h2>"+data[i].title+"</h2>"+"<br>"+ "<p>"+data[i].summary+".</p><br>";
                    }
                    resivedNews.style.display = 'block';
                }else {
                    console.log();
                    resivedNews.innerHTML = 'An error occurred during your request: ';
                } 
            }         
        }
        request.open("GET", url);
        request.send();
    });

    const hideNews = document.querySelector('#hideNews');
    hideNews.addEventListener('click', function () {
        resivedNews.style.display = 'none';
    });
});



