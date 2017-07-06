var hideShow = document.querySelector('#hideitem');
hideShow.addEventListener('click', showHideNews);
var news = document.querySelector('#news');
function showHideNews(event) {
    event.preventDefault();
    if (news.style.display === '') {
        news.style.display = 'none';
    } else {
        news.style.display = '';
    }
}


var register = document.querySelector('#summitValid');
register.addEventListener('click', validatFormFild);


function validatFormFild() {
    event.preventDefault();
    var contactName = document.querySelector('#exampleContactName');
    var emailAddress = document.querySelector('#exampleInputEmail1');
    var contactPhone = document.querySelector('#examplePhone');
    var isEmail = false;
    for (i = 0; i < emailAddress.value.length; i++) {
        if (emailAddress.value[i] === '@') {
            isEmail = true;
        }
    } if (!isEmail) {
        alert('please Enter a valid Email Address');
    }
    else if (!contactName.value) {
        alert('please Enter your contact name?');
    }
    else if (!contactPhone.value) {
        alert('please insert your phone number');
    } else {
        //clear all the input
        alert('thank you for summit the form');
        contactName.value = '';
        emailAddress.value = '';
        contactPhone.value = '';
    }
}


var btn = document.getElementById('hideitem');
btn.addEventListener('click', ourRequest);
var ourRequest = new XMLHttpRequest();
var addContainer = document.getElementById('news');

ourRequest.onreadystatechange = function () {
    var ourData = JSON.parse(ourRequest.responseText);
    if (ourRequest.readyState === 4) {
        if (ourRequest.status === 200) {
            renderHTML(ourData).innerHTML = ourRequest.responseText;
        } else {
            renderHTML(ourData).innerHTML = 'An error occurred during your request: ' + ourRequest.status + ' ' + ourRequest.statusText;
        }

    }
};
    ourRequest.open('GET', 'https://private-e99507-kabaros.apiary-mock.com/news');
    ourRequest.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    ourRequest.send();
function renderHTML(ourData) {
    var htmlString = "";
    for (i = 0; i < ourData.length; i++) {
        htmlString += "<h5>" + ourData[i].title + "</h5>" + "<p>" + data[i].summary + "</p>";
    }
    addContainer.insertAdjacentHTML("beforeend", htmlString);

}