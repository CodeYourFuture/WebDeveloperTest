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
            alert("add @")
        }
    } else {
        alert("Plz Add The iteam marked * ")
    }


    event.preventDefault();

});