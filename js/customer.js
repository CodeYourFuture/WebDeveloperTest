/*================= Show & Hide News =================*/
const hideNews = document.querySelector('#hideNews');
const showNews = document.querySelector('#showNews');
const hidePragraph = document.querySelector('.hideNews');
const showPragraph = document.querySelector('.showNews');
setTimeout(hideNews.addEventListener('click', function () {
    hidePragraph.style.display = 'none';
}),10000);
setTimeout(showNews.addEventListener('click', function () {
    showPragraph.style.display = 'block';
}),10000);
/*================= Form validation =================*/
window.addEventListener('load', function () {
    submitForm.addEventListener('click', function (event) {
        event.preventDefault();
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phoneNumber = document.getElementById('phoneNumber');

        if (name.value !== "" && email.value.indexOf("@") !== 0 && email.value.indexOf("@") !== -1 && email.value.indexOf(".") !== -1 && email.value.lastIndexOf("@") < email.value.lastIndexOf(".") && email.value.lastIndexOf(".") < (email.value.length - 2) && phoneNumber.value !== "" && phoneNumber.value.length < 12) {
            alert('Thank you for register with us');
        }else if (name.value !== "" && email.value.indexOf("@") !== 0 && email.value.indexOf("@") !== -1 && email.value.indexOf(".") !== -1 && email.value.lastIndexOf("@") < email.value.lastIndexOf(".") && email.value.lastIndexOf(".") < (email.value.length - 2)) {
            if (name.value !== "" && email.value.indexOf("@") !== 0 && email.value.indexOf("@") !== -1 && email.value.indexOf(".") !== -1 && email.value.lastIndexOf("@") < email.value.lastIndexOf(".") && email.value.lastIndexOf(".") < (email.value.length - 2)) {
                phoneNumber.style.background = '#f00';
            }else if (name.value !== "" || email.value.indexOf("@") !== 0 && email.value.indexOf("@") !== -1 && email.value.indexOf(".") !== -1 && email.value.lastIndexOf("@") < email.value.lastIndexOf(".") && email.value.lastIndexOf(".") < (email.value.length - 2)) {
                if (name.value !== "") {
                    email.style.background = '#f00';
                    phoneNumber.style.background = '#f00';
                }else if (email.value.indexOf("@") !== 0 && email.value.indexOf("@") !== -1 && email.value.indexOf(".") !== -1 && email.value.lastIndexOf("@") < email.value.lastIndexOf(".") && email.value.lastIndexOf(".") < (email.value.length - 2)){
                    name.style.background = '#f00';
                    phoneNumber.style.background = '#f00';
                }else{
                    alert('error');
                }
            }
        }else if (name.value !== "" && phoneNumber.value !== "" && phoneNumber.value.length < 12) {
            if (name.value !== "" && phoneNumber.value !== "" && phoneNumber.value.length < 12) {
                email.style.background = '#f00';
            }else if (name.value !== "" || phoneNumber.value !== "" && phoneNumber.value.length < 12) {
                if (name.value !== "") {
                    email.style.background = '#f00';
                    phoneNumber.style.background = '#f00';
                }else if (phoneNumber.value !== "" && phoneNumber.value.length < 12){
                    name.style.background = '#f00';
                    email.style.background = '#f00';
                }else{
                    alert('error');
                }
            }
        }else if (email.value.indexOf("@") !== 0 && email.value.indexOf("@") !== -1 && email.value.indexOf(".") !== -1 && email.value.lastIndexOf("@") < email.value.lastIndexOf(".") && email.value.lastIndexOf(".") < (email.value.length - 2) && phoneNumber.value !== "" && phoneNumber.value.length < 12){
            if (email.value.indexOf("@") !== 0 && email.value.indexOf("@") !== -1 && email.value.indexOf(".") !== -1 && email.value.lastIndexOf("@") < email.value.lastIndexOf(".") && email.value.lastIndexOf(".") < (email.value.length - 2) && phoneNumber.value !== "" && phoneNumber.value.length < 12) {
                name.style.background = '#f00';
            }else if (email.value.indexOf("@") !== 0 && email.value.indexOf("@") !== -1 && email.value.indexOf(".") !== -1 && email.value.lastIndexOf("@") < email.value.lastIndexOf(".") && email.value.lastIndexOf(".") < (email.value.length - 2) || phoneNumber.value !== "" && phoneNumber.value.length < 12) {
                if (email.value.indexOf("@") !== 0 && email.value.indexOf("@") !== -1 && email.value.indexOf(".") !== -1 && email.value.lastIndexOf("@") < email.value.lastIndexOf(".") && email.value.lastIndexOf(".") < (email.value.length - 2)) {
                    name.style.background = '#f00';
                    phoneNumber.style.background = '#f00';
                }else if (phoneNumber.value !== "" && phoneNumber.value.length < 12){
                    name.style.background = '#f00';
                    email.style.background = '#f00';
                }else{
                    alert('error');
                }
            }
        }else if(name.value === "" && email.value.indexOf("@") === 0 || email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1 || email.value.lastIndexOf("@") > email.value.lastIndexOf(".") || email.value.lastIndexOf(".") > (email.value.length - 2) && phoneNumber.value === "" || phoneNumber.value.length > 11) {
            name.style.background = '#f00';
            email.style.background = '#f00';
            phoneNumber.style.background = '#f00';
        }else if (name.value === "" && email.value.indexOf("@") === 0 || email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1 || email.value.lastIndexOf("@") > email.value.lastIndexOf(".") || email.value.lastIndexOf(".") > (email.value.length - 2)) {
            if (name.value === "" && email.value.indexOf("@") === 0 || email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1 || email.value.lastIndexOf("@") > email.value.lastIndexOf(".") || email.value.lastIndexOf(".") > (email.value.length - 2)) {
                name.style.background = '#f00';
                email.style.background = '#f00';
            }else if (name.value === "" || email.value.indexOf("@") === 0 || email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1 || email.value.lastIndexOf("@") > email.value.lastIndexOf(".") || email.value.lastIndexOf(".") > (email.value.length - 2)) {
                if (name.value === "") {
                    name.style.background = '#f00';
                }else if (email.value.indexOf("@") === 0 || email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1 || email.value.lastIndexOf("@") > email.value.lastIndexOf(".") || email.value.lastIndexOf(".") > (email.value.length - 2)){
                    email.style.background = '#f00';
                }else{
                    alert('error');
                }
            }
        }else if (name.value === "" && phoneNumber.value === "" || phoneNumber.value.length > 11) {
            if (name.value === "" && phoneNumber.value === "" || phoneNumber.value.length > 11) {
                name.style.background = '#f00';
                phoneNumber.style.background = '#f00';
            }else if (name.value === "" && phoneNumber.value === "" || phoneNumber.value.length > 11) {
                if (name.value === "") {
                    name.style.background = '#f00';
                }else if (phoneNumber.value === "" || phoneNumber.value.length > 11){
                    phoneNumber.style.background = '#f00';
                }else{
                    alert('error');
                }
            }
        }else if (email.value.indexOf("@") === 0 || email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1 || email.value.lastIndexOf("@") > email.value.lastIndexOf(".") || email.value.lastIndexOf(".") > (email.value.length - 2) && phoneNumber.value === "" || phoneNumber.value.length > 11){
            if (email.value.indexOf("@") === 0 || email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1 || email.value.lastIndexOf("@") > email.value.lastIndexOf(".") || email.value.lastIndexOf(".") > (email.value.length - 2) && phoneNumber.value === "" || phoneNumber.value.length > 11) {
                email.style.background = '#f00';
                phoneNumber.style.background = '#f00';
            }else if (email.value.indexOf("@") === 0 || email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1 || email.value.lastIndexOf("@") > email.value.lastIndexOf(".") || email.value.lastIndexOf(".") > (email.value.length - 2) || phoneNumber.value === "" || phoneNumber.value.length > 11) {
                if (email.value.indexOf("@") === 0 || email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1 || email.value.lastIndexOf("@") > email.value.lastIndexOf(".") || email.value.lastIndexOf(".") > (email.value.length - 2)) {
                    nemailame.style.background = '#f00';
                }else if (phoneNumber.value === "" || phoneNumber.value.length){
                    phoneNumber.style.background = '#f00';
                }else{
                    alert('error');
                }
            }
        }          
    });
},false);