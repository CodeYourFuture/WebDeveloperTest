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
        if (name.value === "") {
            name.style.background = '#f00';
        }else{
            return true;
        }
        const email = document.getElementById('email');
        if (email.value === "@" && email.value === "." && email.indexOf("@") !== -1 && email.indexOf(".") !== -1) {
            return true;
        }else{
            email.style.background = '#f00';
        }
        const phoneNumber = document.getElementById('phoneNumber');
        if (phoneNumber.value === "" ||  phoneNumber.value.length > 15 || phoneNumber.value.length < 11) {
            phoneNumber.style.background = '#f00';
        }else{
            return true;
        }
    });
},false);