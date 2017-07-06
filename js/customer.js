/*================= Form validation =================*/
window.addEventListener('load', function () {
    submitForm.addEventListener('click', function (event) {
        event.preventDefault();
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phoneNumber = document.getElementById('phoneNumber');
        function validName(name) {
            return name.value !== "";
        }
        function validEmail(email) {
            const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
            return pattern.test(email.value);
        }
        function validPhoneNumber(phoneNumber) {
            return phoneNumber.value !== "" && phoneNumber.value.length < 12;
        }
        if (validName(name) && validName(name) && validPhoneNumber(phoneNumber)) { alert('Thank you for register with us')}

        if (validName(name)) {
                return true;
                name.classList.remove('error');
        }else{
                name.classList.add('error');
        }

        if (validName(name)) {
                alert('yeas');
                return true;
                email.classList.remove('error');
        }else{
                email.classList.add('error');
        }
        
        if (validPhoneNumber(phoneNumber)) {
                phoneNumber.classList.remove('error');
                return true;
        }else{
                phoneNumber.classList.add('error');
        }

    });
}, false);
/*==================== Start AJAX Get Data===================*/
window.addEventListener('load', function () {
const resivedNews = document.getElementById('resivedNews');

const request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (request.readyState === 4 ){
        if (request.status === 200) {
            const data = JSON.parse(request.responseText);
            for (i = 0; i < data.length; i++) {                       
                resivedNews.innerHTML += "<h2>"+data[i].title+"</h2>"+"<br>"+ "<p>"+data[i].summary+".</p><br>";
            }
            }else {
                resivedNews.innerHTML = 'An error occurred during your request: ';
            }
        }         
    }
    const url = "https://private-e99507-kabaros.apiary-mock.com/news";
    request.open("GET", url);
    request.send();
    const showAndHide = document.querySelector('#showAndHide');
    showAndHide.addEventListener('click', function (event) {
        event.preventDefault();
            resivedNews.classList.toggle('hiddenShow');
    });
});




