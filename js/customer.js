/*================= Form validation =================*/
window.addEventListener('load', function () {
    submitForm.addEventListener('click', function (event) {
        event.preventDefault();
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phoneNumber = document.getElementById('phoneNumber');


        // is the name field ok?
        //    if no -> change it to red AND set nameValid = true
        //    if yes - > remove the red colour AND set nameValid = false
        // same for email
        // same for phone number
        // 

        // If the name, email and contact number valid excute this code
        if (name.value !== "" && email.value.indexOf("@") !== 0 && email.value.indexOf("@") !== -1 && email.value.indexOf(".") !== -1 && email.value.lastIndexOf("@") < email.value.lastIndexOf(".") && email.value.lastIndexOf(".") < (email.value.length - 2) && phoneNumber.value !== "" && phoneNumber.value.length < 12) {
            alert('Thank you for register with us');
        // If the name & email excute but contact number not this code
        } else if (name.value !== "" && email.value.indexOf("@") !== 0 && email.value.indexOf("@") !== -1 && email.value.indexOf(".") !== -1 && email.value.lastIndexOf("@") < email.value.lastIndexOf(".") && email.value.lastIndexOf(".") < (email.value.length - 2)) {
            if (name.value !== "" && email.value.indexOf("@") !== 0 && email.value.indexOf("@") !== -1 && email.value.indexOf(".") !== -1 && email.value.lastIndexOf("@") < email.value.lastIndexOf(".") && email.value.lastIndexOf(".") < (email.value.length - 2)) {
                phoneNumber.style.background = '#f00';
            } else if (name.value !== "" || email.value.indexOf("@") !== 0 && email.value.indexOf("@") !== -1 && email.value.indexOf(".") !== -1 && email.value.lastIndexOf("@") < email.value.lastIndexOf(".") && email.value.lastIndexOf(".") < (email.value.length - 2)) {
                if (name.value !== "") {
                    email.style.background = '#f00';
                    phoneNumber.style.background = '#f00';
                } else if (email.value.indexOf("@") !== 0 && email.value.indexOf("@") !== -1 && email.value.indexOf(".") !== -1 && email.value.lastIndexOf("@") < email.value.lastIndexOf(".") && email.value.lastIndexOf(".") < (email.value.length - 2)) {
                    name.style.background = '#f00';
                    phoneNumber.style.background = '#f00';
                } else {
                    alert('error');
                }
            }
        } else if (name.value !== "" && phoneNumber.value !== "" && phoneNumber.value.length < 12) {
            if (name.value !== "" && phoneNumber.value !== "" && phoneNumber.value.length < 12) {
                email.style.background = '#f00';
            } else if (name.value !== "" || phoneNumber.value !== "" && phoneNumber.value.length < 12) {
                if (name.value !== "") {
                    email.style.background = '#f00';
                    phoneNumber.style.background = '#f00';
                } else if (phoneNumber.value !== "" && phoneNumber.value.length < 12) {
                    name.style.background = '#f00';
                    email.style.background = '#f00';
                } else {
                    alert('error');
                }
            }
        } else if (email.value.indexOf("@") !== 0 && email.value.indexOf("@") !== -1 && email.value.indexOf(".") !== -1 && email.value.lastIndexOf("@") < email.value.lastIndexOf(".") && email.value.lastIndexOf(".") < (email.value.length - 2) && phoneNumber.value !== "" && phoneNumber.value.length < 12) {
            if (email.value.indexOf("@") !== 0 && email.value.indexOf("@") !== -1 && email.value.indexOf(".") !== -1 && email.value.lastIndexOf("@") < email.value.lastIndexOf(".") && email.value.lastIndexOf(".") < (email.value.length - 2) && phoneNumber.value !== "" && phoneNumber.value.length < 12) {
                name.style.background = '#f00';
            } else if (email.value.indexOf("@") !== 0 && email.value.indexOf("@") !== -1 && email.value.indexOf(".") !== -1 && email.value.lastIndexOf("@") < email.value.lastIndexOf(".") && email.value.lastIndexOf(".") < (email.value.length - 2) || phoneNumber.value !== "" && phoneNumber.value.length < 12) {
                if (email.value.indexOf("@") !== 0 && email.value.indexOf("@") !== -1 && email.value.indexOf(".") !== -1 && email.value.lastIndexOf("@") < email.value.lastIndexOf(".") && email.value.lastIndexOf(".") < (email.value.length - 2)) {
                    name.style.background = '#f00';
                    phoneNumber.style.background = '#f00';
                } else if (phoneNumber.value !== "" && phoneNumber.value.length < 12) {
                    name.style.background = '#f00';
                    email.style.background = '#f00';
                } else {
                    alert('error');
                }
            }
        } else if (name.value === "" && email.value.indexOf("@") === 0 || email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1 || email.value.lastIndexOf("@") > email.value.lastIndexOf(".") || email.value.lastIndexOf(".") > (email.value.length - 2) && phoneNumber.value === "" || phoneNumber.value.length > 11) {
            name.style.background = '#f00';
            email.style.background = '#f00';
            phoneNumber.style.background = '#f00';
        } else if (name.value === "" && email.value.indexOf("@") === 0 || email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1 || email.value.lastIndexOf("@") > email.value.lastIndexOf(".") || email.value.lastIndexOf(".") > (email.value.length - 2)) {
            if (name.value === "" && email.value.indexOf("@") === 0 || email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1 || email.value.lastIndexOf("@") > email.value.lastIndexOf(".") || email.value.lastIndexOf(".") > (email.value.length - 2)) {
                name.style.background = '#f00';
                email.style.background = '#f00';
            } else if (name.value === "" || email.value.indexOf("@") === 0 || email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1 || email.value.lastIndexOf("@") > email.value.lastIndexOf(".") || email.value.lastIndexOf(".") > (email.value.length - 2)) {
                if (name.value === "") {
                    name.style.background = '#f00';
                } else if (email.value.indexOf("@") === 0 || email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1 || email.value.lastIndexOf("@") > email.value.lastIndexOf(".") || email.value.lastIndexOf(".") > (email.value.length - 2)) {
                    email.style.background = '#f00';
                } else {
                    alert('error');
                }
            }
        } else if (name.value === "" && phoneNumber.value === "" || phoneNumber.value.length > 11) {
            if (name.value === "" && phoneNumber.value === "" || phoneNumber.value.length > 11) {
                name.style.background = '#f00';
                phoneNumber.style.background = '#f00';
            } else if (name.value === "" && phoneNumber.value === "" || phoneNumber.value.length > 11) {
                if (name.value === "") {
                    name.style.background = '#f00';
                } else if (phoneNumber.value === "" || phoneNumber.value.length > 11) {
                    phoneNumber.style.background = '#f00';
                } else {
                    alert('error');
                }
            }
        } else if (email.value.indexOf("@") === 0 || email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1 || email.value.lastIndexOf("@") > email.value.lastIndexOf(".") || email.value.lastIndexOf(".") > (email.value.length - 2) && phoneNumber.value === "" || phoneNumber.value.length > 11) {
            if (email.value.indexOf("@") === 0 || email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1 || email.value.lastIndexOf("@") > email.value.lastIndexOf(".") || email.value.lastIndexOf(".") > (email.value.length - 2) && phoneNumber.value === "" || phoneNumber.value.length > 11) {
                email.style.background = '#f00';
                phoneNumber.style.background = '#f00';
            } else if (email.value.indexOf("@") === 0 || email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1 || email.value.lastIndexOf("@") > email.value.lastIndexOf(".") || email.value.lastIndexOf(".") > (email.value.length - 2) || phoneNumber.value === "" || phoneNumber.value.length > 11) {
                if (email.value.indexOf("@") === 0 || email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1 || email.value.lastIndexOf("@") > email.value.lastIndexOf(".") || email.value.lastIndexOf(".") > (email.value.length - 2)) {
                    nemailame.style.background = '#f00';
                } else if (phoneNumber.value === "" || phoneNumber.value.length) {
                    phoneNumber.style.background = '#f00';
                } else {
                    alert('error');
                }
            }
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



