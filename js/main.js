var button = document.getElementById('button');

button.onclick = function displayAndHide() {
    var x = document.getElementById('displayInfo');
    if (x.style.display === "") {
        x.style.display = 'none';
    } else {
        x.style.display = '';
    }
}

var submitBtn = document.querySelector('#submitBtn'); // Element that is going to call the action
console.log(submitBtn);
submitBtn.addEventListener("click", checkName);

function checkName(evt) {
    evt.preventDefault();
    var nameArea = document.querySelector("#nameArea");
    if (nameArea.value == "") {
        alert("Error: Name is empty!");
        nameArea.focus();
        return false;
    }
}

submitBtn.addEventListener("click", checkEmail);

function checkEmail(evt) {
    evt.preventDefault();
    var emailArea = document.querySelector("#emailArea");
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (emailArea.value == "") {
        alert("Error: Email is empty!");
        emailArea.focus();
        return false;
    }
    if (!filter.test(emailArea.value)) {
        alert('Please provide a valid email address');
        emailArea.focus;
        return false;
    }
}



/*var submitBtn = document.querySelector('#submitBtn'); // Element that is going to call the action
console.log(submitBtn);
submitBtn.addEventListener("click", checkForm);

function checkMobileNumber (evt){
    evt.preventDefault();
    var phoneArea = document.querySelector("#phoneArea");
    if (phoneArea.value=""){}
}
*/
submitBtn.addEventListener("click", checkMobileNumber);

function checkMobileNumber(number) {
    number.preventDefault();
    var phoneArea = document.querySelector("#phoneArea");
    for (var i = 0; i < phoneArea.value.length; i++) {
        if (phoneArea.value.length != 10 && phoneArea.value.length != 11) {
            alert("Please enter a valid UK phone number.")
            return false
        }
        if (isNaN(phoneArea.value[i]) && parseInt(Number(phoneArea.value[i])) != phoneArea.value[i] &&
            isNaN(parseInt(phoneArea.value[i], 10))) {
            alert('Please provide a valid phone number');
            phoneNumber.focus();
            return false;
        }
    }
}


