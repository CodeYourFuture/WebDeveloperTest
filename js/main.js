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

var xmlRequest = new XMLHttpRequest();
xmlRequest.onreadystatechange = function(){
    if (xmlRequest.readystate === 4){
        if(xmlRequest.status === 200){
            var data = JSON.parse(xmlRequest.responseText);
            var textBox = document.querySelector('#newsInfo');
            textBox.innerHTML = data[0].title + data[0].summary;
            console.log(data[0].title);
            console.log(data[0].summary);
        }else{
            alert('there is an error');
        }
    }
}
xmlRequest.open('Get', 'https://private-e99507-kabaros.apiary-mock.com/news');
xmlRequest.send();

console.log(xmlRequest.status);
console.log(xmlRequest.statusText);