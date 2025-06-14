// první stránka část s carousel
import { mapka } from '../data/mapa-info.js';


const itemy = document.querySelectorAll('.second-item');
const tlacitka = document.querySelectorAll('.carousel-js')



let current = 0;
const delka = itemy.length;
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

document.querySelector(".next").addEventListener("click", () => {
  next();
  console.log("Next button clicked");
})

document.querySelector(".prev").addEventListener("click", () => {
  prev();
})

tlacitka.forEach((tlacitko, index) => {
  tlacitko.addEventListener("click", (event) => {
    itemy[current].classList.remove('aktivni');
    current = index;
    itemy[current].classList.add('aktivni');
    console.log(`Button ${index + 1} clicked`);
  });
});


// první stránka část s mapou


const piny = document.querySelectorAll('.pin-js');

let previous = 0;


piny.forEach((pin) => {
  pin.addEventListener("click", (event) => {
    const id = pin.dataset.id;
    const ikonka = document.getElementById(id);

    if (previous !== id) {

      ikonka.style.fontSize = "140%";
      ikonka.style.opacity = "1";
      ikonka.style.transition = "font-size 0.2s ease-in-out";


      if (previous !== 0) {
        const previousIkonka = document.getElementById(previous);
        previousIkonka.style.fontSize = "110%";
        previousIkonka.style.opacity = "0.7";
      }

      previous = id;
    } else {
      ikonka.style.fontSize = "110%";
      ikonka.style.opacity = "0.7";
      previous = 0;
    }
    prelet(id);
    setTimeout(() => {
      zobrazInfo(id);
    }, 400);
  });
});

let cislo = 0;

function zobrazInfo(id) {
  cislo = ((id % mapka.length) + mapka.length) % mapka.length;
  if (cislo === 0) {
    cislo = 10;

  }

  console.log(cislo);
  const matchingMapka = mapka.find(item => item.id === cislo);
  console.log(matchingMapka);
  const infoElement = document.querySelector('.info-js');
  if (matchingMapka) {
    //piny[id - 1].click();

    infoElement.innerHTML = `
    <h1 class="text-white">${matchingMapka.name}</h1>
                <div class="d-flex justify-content-evenly pb-3">
                    <p>${matchingMapka.description}</p>
                    <img class="w-25 rounded ms-1" src="img/mapa/${matchingMapka.image}" alt="">
                </div>   


                <div style="position: relative;">
                    <div class="d-flex" style=" position: absolute;">
                        <!-- Accordion 1 -->
                        <div class="accordion " id="accordionOne">
                            <div class="accordion-item bg-black">
                                <h2 class="accordion-header" id="headingOne1">
                                    <button
                                        class="accordion-button collapsed bg-black text-white border border-1 border-white"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1"
                                        aria-expanded="false" aria-controls="collapseTwo1">
                                        ${matchingMapka.accordition1.title}
                                    </button>
                                </h2>
                                <div id="collapseOne1" class="accordion-collapse collapse" aria-labelledby="headingOne1"
                                    data-bs-parent="#accordionOne">
                                    <div class="accordion-body  p-3 border-bottom border-1 border-white">
                                        <img class="w-100 rounded mt-1" src="img/mapa/${matchingMapka.accordition1.img}" alt="">
                                        <p class="text-white text-center mt-2 mb-0">${matchingMapka.accordition1.text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Accordion 2 -->
                        <div class="accordion" id="accordionTwo">
                            <div class="accordion-item bg-black">
                                <h2 class="accordion-header" id="headingTwo1">
                                    <button
                                        class="accordion-button collapsed bg-black text-white border border-1 border-white"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo1"
                                        aria-expanded="false" aria-controls="collapseTwo1">
                                        ${matchingMapka.accordition2.title}
                                    </button>
                                </h2>
                                <div id="collapseTwo1" class="accordion-collapse collapse" aria-labelledby="headingTwo1"
                                    data-bs-parent="#accordionTwo">
                                    <div class="accordion-body  p-3 border-bottom border-1 border-white">
                                        <img class="w-100 rounded mt-1" src="img/mapa/${matchingMapka.accordition2.img}" alt="">
                                        <p class="text-white text-center mt-2 mb-0">${matchingMapka.accordition2.text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion " id="accordionThree">
                            <div class="accordion-item bg-black">
                                <h2 class="accordion-header" id="headingThree1">
                                    <button
                                        class="accordion-button collapsed bg-black text-white border border-1 border-white"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree1"
                                        aria-expanded="false" aria-controls="collapseThree1">
                                        ${matchingMapka.accordition3.title}
                                    </button>
                                </h2>
                                <div id="collapseThree1" class="accordion-collapse collapse"
                                    aria-labelledby="headingThree1" data-bs-parent="#accordionThree">
                                    <div class="accordion-body  p-3 border-bottom border-1 border-white">
                                        <img class="w-100 rounded mt-1" src="img/mapa/${matchingMapka.accordition3.img}" alt="">
                                        <p class="text-white text-center mt-2 mb-0">${matchingMapka.accordition3.text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
    
    `
  }

}

function prelet(id) {
  const plane = document.querySelector('.plane');
  const target = piny[id - 1];
  const mapa = document.querySelector('.mapa');

  const targetRect = target.getBoundingClientRect();
  const mapaRect = mapa.getBoundingClientRect();
  const planeRect = plane.getBoundingClientRect();

  // Cílový střed v souřadnicích .mapa
  const targetX = targetRect.left + targetRect.width / 2 - mapaRect.left;
  const targetY = targetRect.top + targetRect.height / 2 - mapaRect.top;

  // Aktuální střed letadla v souřadnicích .mapa
  const planeX = planeRect.left + planeRect.width / 2 - mapaRect.left;
  const planeY = planeRect.top + planeRect.height / 2 - mapaRect.top;

  // Výpočet směru
  const dx = targetX - planeX;
  const dy = targetY - planeY;

  const angleRad = Math.atan2(dy, dx);
  const angleDeg = angleRad * (180 / Math.PI);

  // Rotace a přesun
  plane.style.transform = `rotate(${angleDeg}deg)`;
  plane.style.left = `${targetX - plane.offsetWidth / 2}px`;
  plane.style.top = `${targetY - plane.offsetHeight / 2}px`;
}






const infoNext = document.querySelector('.mapa-next')
const infoPrev = document.querySelector('.mapa-prev')
infoNext.addEventListener('click', () => {
  cislo = ((cislo + 1 % mapka.length) + mapka.length) % mapka.length;
  if (cislo === 0) {
    cislo = 10;

  }
  piny[cislo - 1].click();
});

infoPrev.addEventListener('click', () => {
  cislo = ((cislo - 1 % mapka.length) + mapka.length) % mapka.length;
  if (cislo === 0) {
    cislo = 10;

  }
  piny[cislo - 1].click();
});


//piny[0].click(); 



