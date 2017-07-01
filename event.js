var button = document.querySelector('#newsButton');
button.addEventListener('click', doSomething);

function doSomething() {
  //if my <p>is showing hide it,else show it
  var news = document.querySelector('#newsInfo');
  if (news.style.display === 'none') {
    news.style.display = 'block';
  } else {
    news.style.display = 'none';
  }

}


var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
      var textBox = document.querySelector('#newsInfo');
      var heading = document.createElement('h2');
      var paragraph = document.createElement('p');
      heading.innerText = data[0].title;
      paragraph.innerText = data[0].summary;
      textBox.appendChild(heading);
      textBox.appendChild(paragraph);
      // textBox.innerHTML = data[0].title +  data[0].summary;
      
    } else {
      //there is an error
    }
  }
}


xhr.open('GET', 'https://private-e99507-kabaros.apiary-mock.com/news');
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);