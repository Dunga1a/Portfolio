const menu = document.querySelector('#menu');
const header = document.querySelector('header');
console.log(header)
menu.addEventListener('click', function() {
    // console.log(e)
    this.classList.toggle('active');
    header.classList.toggle('active');
});

window.onscroll = function() {
    menu.classList.remove('active');
    header.classList.remove('active');
}

// console.log(menu)