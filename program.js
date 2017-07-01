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


 


var request = new XMLHttpRequest(); 		//creating a request object


    request.onreadystatechange = function () {
        if (request.readyState === 4) {  // check if a response was sent back
            var box = document.querySelector('#anser');
            if (request.status === 200) { 	// check if request was successful
               var news = JSON.parse(request.responseText);
                var output = '';
                for(i =0; i < news.length; i++ ){
                    output += '<h3>' + news[i].title + '</h3>';
                    output += '<p>' + news[i].summary + '</p>';
                }
                box.innerHTML = output;
            } else {
                box.innerHTML = 'An error occurred during your request: ' + request.status + ' ' + request.statusText;
            }
        }
    }
    var url = "https://private-e99507-kabaros.apiary-mock.com/news";	   
                                    //server location
    // content we want to send
    request.open("Get", url, true);			// adding them to the request

    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //header info
    request.send();


