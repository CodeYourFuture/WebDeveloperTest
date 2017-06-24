var button = document.getElementById('buttonNews');
button.onclick = function displayAndHide() {
    var hide = document.getElementById('displayInfo');
    if (hide.style.display === "") {
        hide.style.display = 'none';
    } else {
        hide.style.display = '';
    }
}

var submitBtn = document.querySelector('#submitBtn');
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

/*var addNews = document.querySelector("#buttonNews"); // Element that is going to call the action
addNews.addEventListener("click", request);*/

  var request = new XMLHttpRequest();         //creating a request object

  request.onreadystatechange = function() {
    if(request.readyState === 4) {  // check if a response was sent back
      if(request.status === 200) {     // check if request was successful
        displayInfo.innerHTML = request.responseText;
      } else {
        displayInfo.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
      }
    }
  }
  var url = "https://private-e99507-kabaros.apiary-mock.com/news";                                        //server location
  request.open("GET", url);                    // adding it to the request

request.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //header info
request.send();                                 // sending the request
