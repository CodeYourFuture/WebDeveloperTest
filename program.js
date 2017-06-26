var buttons = document.querySelector("#submi");
buttons.addEventListener('click', changesome);

function changesome() {
    var button1 = document.querySelector('#inputname');
    var button1value = button1.value;
    if (button1value.length == 0) {
        alert("please enter a Name");
        return
    }
    var button2 = document.querySelector('#inputEmail');
    var button2value = button2.value;
    if (button2value.length == 0) {
        alert("please enter a email");
        return
    }
    var emailaddres = document.querySelector('#inputEmail');
    if (emailaddres.value.indexOf('@') === -1) {
        alert('Please write the @ sign to your email');
        return
    }

    var button3 = document.querySelector('#inputPassword');
    var button3value = button3.value;
    if (button3value.length !== 11) {
        alert("please enter a valid Phone number");
        return
    }
alert("Thank you for completing your information.");
}