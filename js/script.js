const track = document.querySelector(".carousel-track");
const next = document.getElementById("btn-next");
const prev = document.getElementById("btn-prev");

const cards = document.querySelectorAll(".refugio-card");

let indice = 0;
const visibles = 3;

function moverCarrusel() {
    const cardWidth = cards[0].offsetWidth;
    const gap = 20;

    track.style.transform =
        `translateX(-${indice * (cardWidth + gap)}px)`;
}

next.addEventListener("click", () => {

    if(indice >= cards.length - visibles){
        indice = 0;
    }else{
        indice++;
    }

    moverCarrusel();
});

prev.addEventListener("click", () => {

    if(indice <= 0){
        indice = cards.length - visibles;
    }else{
        indice--;
    }

    moverCarrusel();
});