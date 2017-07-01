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
      console.log(data)
      var textBox = document.querySelector('#newsInfo');

      for (var i = 0; i < data.length; i++) {
        var heading = document.createElement('h2');
        var paragraph = document.createElement('p');
        heading.innerText = data[i].title;
        paragraph.innerText = data[i].summary;
        textBox.appendChild(heading);
        textBox.appendChild(paragraph);

      }

    } else {

    }
  }
}


xhr.open('GET', 'https://private-e99507-kabaros.apiary-mock.com/news');
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);