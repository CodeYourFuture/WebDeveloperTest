/*================= Show & Hide News =================*/
const hideNews = document.querySelector('#hideNews');
const showNews = document.querySelector('#showNews');
const hidePragraph = document.querySelector('.hideNews');
const showPragraph = document.querySelector('.showNews');
setTimeout(hideNews.addEventListener('click', function () {
    hidePragraph.style.display = 'none';
}),10000);
setTimeout(showNews.addEventListener('click', function () {
    showPragraph.style.display = 'block';
}),10000);