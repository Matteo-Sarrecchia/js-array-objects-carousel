// variabili globali
const container = document.getElementById("container");
let arrowNext = document.querySelector('.arrowNext');
let arrowPrev = document.querySelector(".arrowPrev")

// array di oggetti
const images = [
    {
        image: 'img/01.webp',
        title: "Marvel's Spiderman Miles Morale",
        text: 'Experience the rise of Miles Morales as the new hero masters, incredible, explosive new powers to become his own Spider-Man.'
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    }
];

// creo elementi item per inserire contunuto array
images.forEach(element => {

    const item = document.createElement("div");
    container.append(item)
    item.classList.add("item")
    item.innerHTML += `<img src="${element.image}" alt="">
    <h2>${element.title}</h2>
    <div>${element.text}</div>`
});

// imposto valore di riferimento
let positionItem = 0;

// seleziono tutti gli item
let item = document.querySelectorAll(".item");
console.log(item);

// aggiungo classe active al primo item
item[positionItem].classList.add("active");


// aggiungo evento al click arrow next
arrowNext.addEventListener("click",
    
    function(){
        if(positionItem <= images.length - 1){

            // tolgo la classe active al primo elemento
            item[positionItem].classList.remove("active");
        
            // se sono all'ultimo elemento
            if (positionItem === images.length - 1){
                positionItem = 0
            } else {
                // passo all'elemento successivo
                positionItem++
            }
            
            // aggiungo la classe active all'elemento successivo
            item[positionItem].classList.add("active");

        }     
    }
);

// aggiungo evento al click arrow prev
arrowPrev.addEventListener("click",

    function(){

        if(positionItem <= images.length -1){

            // tolgo la classe active al primo elemento
            item[positionItem].classList.remove("active");
            
            // se sono all'ultimo elemento
            if (positionItem === 0){
                positionItem = 4
            }else {
                // passo all'elemento successivo
                positionItem--
            }
            
            // aggiungo la classe active all'elemento successivo
            item[positionItem].classList.add("active");
        }     
    }
)
