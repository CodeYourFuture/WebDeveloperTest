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