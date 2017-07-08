// function hideShow(){
//
//   if(cheker%2=0){
//     var hider=document.querySelector("#hide");
//     hider.style.display="none";
//   }
// }
var cheker = 2;
var clikeShowHide = document.querySelector("#showHide");
var hider = document.querySelector(".showOne");
clikeShowHide.addEventListener('click', function() {
    if (cheker % 2 === 0) {
        hider.style.display = hider.style.display + " none";
        cheker++;
    } else {
        hider.style.display = hider.style.display.replace("none", "");
        cheker++;
    }
});

var prBtn = document.querySelector('button');
var contactName = document.querySelector('#contName');
var contactEmail = document.querySelector('#conEmail');
var contactPhone = document.querySelector('#conPhone');

prBtn.addEventListener('click', function() {

    if (contactName.value.length === 0) {
        contactName.style.backgroundColor = "gold";
        alert('please Add Your Name');


    } else {
        contactName.style.backgroundColor = "silver";

    }

    if (contactEmail.value.length === 0) {
        contactEmail.style.backgroundColor = "gold";

        alert('please Add Your Email Address');
    }
    // if (contactEmail.value.indexOf("@") > -1) {

    // } else {
    //     alert('add @');
    // }
    if (contactName.value.length > 0 && contactEmail.value.length > 0) {
        if (contactEmail.value.indexOf("@") > -1) {
            contactEmail.style.backgroundColor = "gold";
            alert("Well done");
            contactName.value = "";
            contactEmail.value = "";
            contactPhone.value = "";
            contactName.style.backgroundColor = "white";

            contactEmail.style.backgroundColor = "white";


        } else {
            alert("add @");
        }
    } else {
        alert("Plz Add The iteam marked * ");
    }


    event.preventDefault();

});



var request = new XMLHttpRequest(); //creating a request object

request.onreadystatechange = function() {
    var pargraph = document.querySelector(".showOne");
    if (request.readyState === 4) { // check if a response was sent back
        if (request.status === 200) { // check if request was successful
            var sendMsg = JSON.parse(request.responseText);

            console.log(sendMsg[0]);
            for (var i = 0; i < sendMsg.length; i++) {
                var sendInformationTitle = sendMsg[i].title;
                var sendInformationParg = sendMsg[i].summary;

                var newsTitle = document.createElement('h1')
                var newsPargraph = document.createElement('p')

                newsTitle.innerHTML = sendInformationTitle;
                newsPargraph.innerHTML = sendInformationParg;

                pargraph.appendChild(newsTitle);
                pargraph.appendChild(newsPargraph);
            }



        } else {
            consloe.log('An error occurred during your request: ' + request.status + ' ' + request.statusText);
        }
    }
}
var url = "https://private-e99507-kabaros.apiary-mock.com/news"; //server location
request.open("GET", url); // adding it to the request

request.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //header info
request.send();