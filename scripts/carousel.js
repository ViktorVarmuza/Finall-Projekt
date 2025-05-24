itemy = document.querySelectorAll('.second-item');

current = 0;
delka = itemy.length;
function next() {
    itemy[current].classList.remove('aktivni');
    current = (current + 1) % delka;
    itemy[current].classList.add('aktivni');
}

function prev() {
    itemy[current].classList.remove('aktivni');
    current = (current - 1 + delka) % delka;
    itemy[current].classList.add('aktivni');
}

document.querySelector(".next").addEventListener("click",() => {
    next();
    console.log("Next button clicked");
})

document.querySelector(".prev").addEventListener("click",() => {
    prev();
})