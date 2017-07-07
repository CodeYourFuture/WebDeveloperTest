
var news = document.getElementById('News');   
var url = "https://private-e99507-kabaros.apiary-mock.com/news";                                     //server location
var request = new XMLHttpRequest();
request.open('GET',url)

request.onload = function() {
var newData = JSON.parse(request.responseText);
renderHTML(newData);
}
request.send();


function renderHTML(data){
    var htmlString = '';
    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].title + "</p>" + "<p>" + data[i].summary + "</p>";
    }
    News.insertAdjacentHTML('beforeend',htmlString);
}


var showHideNews = document.querySelector('#news-btn');
showHideNews.addEventListener('click', ShowHideNews);

function ShowHideNews() {
    ShowHide(document.querySelector('#News'));
}

function ShowHide(element) {
    if (element.className === "hidden") {
        element.className = 'show';
    } else {
        element.className = 'hidden';
    }
}

var MInfoButton = document.querySelector('.MInfo');
MInfoButton.addEventListener('click', News);

function News() {
    ShowHide(document.querySelector('#News p'));
}

var submitButton = document.querySelector('.submitBtn');

submitButton.addEventListener('click', submitForm);

function submitForm(event) {
    event.preventDefault();

    var nameInput = document.querySelector('#example-name-input');
    var nameInputWithValue = nameInput.value;
    var emailInput = document.querySelector('#example-email-input');
    var emailInputWV = emailInput.value;
    var numberInput = document.querySelector('#example-phone-input');
    var numberInputWV = numberInput.value;

    var SubmitFormIsValid = true;
    if (nameInputWithValue.length === 0) {
        nameInput.className = 'nameInput inValid';
        SubmitFormIsValid = false;
    }

    if (emailInputWV.length === 0 || emailInputWV.indexOf('@') === -1) {
        emailInput.className = 'emailInput inValid';
        SubmitFormIsValid = false;
    }

    if (numberInputWV.length > 11) {
        numberInput.className = 'numberInput inValid';
        SubmitFormIsValid = false;
    }

    if (SubmitFormIsValid) {
        alert('Thanks for filling the form');
        numberInput.className = 'numberInput';
        numberInput.value = "";

        emailInput.className = 'emailInput';
        emailInput.value = "";

        nameInput.className = 'nameInput';
        nameInput.value = "";
    }
}




