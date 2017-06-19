var button = document.getElementById('button');
 
 button.onclick = function displayAndHide(){
    var x = document.getElementById('displayInfo');
    if (x.style.visibility === 'block') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}


