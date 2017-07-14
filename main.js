var menus = document.querySelector('#submitForm');
menus.addEventListener('click', dosomething);

function dosomething() {
    var menu = document.querySelector('#name');
    var menuvalue = menu.value;
    if (menuvalue.length == 0) {
        alert("please enter a Name");
        return
    }
    var menu1 = document.querySelector('#email');
    var menu1value = menu1.value;
    if (menu1value.indexOf("@") === -1) {
        alert("enter an email");
        return
    }
    var menu2 = document.querySelector('#phonenumber');
    var menu2value = menu2.value;
    if (menu2value.length  > 11) {
        alert("enter a phone number");
        return;
    }
    alert("Thank you for completing your information.");
}
var request = new XMLHttpRequest(); 	    //creating a request object
var box = document.querySelector('#dynamicnews');
request.onreadystatechange = function () {
    if (request.readyState === 4) {  // check if a response was sent back
        
        if (request.status === 200) { 	// check if request was successful
            var news = JSON.parse(request.responseText);
            var output = '';
            for (i = 0; i < news.length; i++) {
                output += '<h3>' + news[i].title + '</h3>';
                output += '<p>' + news[i].summary + '</p>';
            }

            box.innerHTML = output;
        } else {
            box.innerHTML = 'An error occurred during your request: ' + request.status + ' ' + request.statusText;
        }
    }
}
var url = "https://private-e99507-kabaros.apiary-mock.com/news";	                                    //server location
request.open("GET", url);					// adding it to the request

request.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //header info
request.send();
								// sending the request
                       							// sending the request


const showHide =document.getElementById("showHide");
const showHideNews=document.getElementsByClassName("show-hide-news");
showHide.addEventListener("click",function (event) {
    box.classList.toggle("show-hide-news");
    event.preventDefault();
})