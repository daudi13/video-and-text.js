//add active class on click
const sec = document.querySelector('.dot');
const dot = document.querySelector('.sec');
dot.onclick = function () {
    dot.classList.toggle('active');  
    sec.classList.toggle('active');
}


document.addEventListener('mousemove', function (e) {
    const dot = document.querySelector('.dot');
    dot.style.left = e.pageX + 'px';
    dot.style.top = e.pageY + 'px';
});
