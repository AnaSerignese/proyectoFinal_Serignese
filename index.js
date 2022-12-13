//HERO THUMB
let twoBtn =document.querySelector('#two')
let threeBtn =document.querySelector('#three')
let fourBtn=document.querySelector('#four')
let imagen=document.querySelector('.imagen')
let inspirateBtn=document.querySelector('#inspirate')
twoBtn.onclick =function(){
    imagen.style.backgroundImage = "url(Inicio/Elementary.webp)";
}

threeBtn.onclick = function(){
    imagen.style.backgroundImage = "url(Inicio/two.png)";
}

fourBtn.onclick=function(){
    imagen.style.backgroundImage = "url(Inicio/Elementary.png)";
} 


//FASHION WEEK 
let loadMorebtn =document.querySelector('#load-more');
let currentItem =3;
loadMorebtn.onclick = () =>{
    let boxes = [...document.querySelectorAll('.containerF .box-containerF .boxF')];
    for(let i = currentItem; i < currentItem+3; i++){
    boxes[i].style.display = 'inline-block';
    }
    currentItem += 3;
    if(currentItem >= boxes.length){
        loadMorebtn.style.display ='none';
    }
}
inspirateBtn.addEventListener ('click', () => {
    swal("Será redirigido, ¿Desea continuar?",'','warning', {
        buttons: {
          No: "No",
          Si: {
            text: "Si",
            value: "confirmar",
          },
        },
      })
      .then((value) => {
        switch (value) {
       
          case "No":
            swal("No fue redirigido","","success");
            break;
       
          case "confirmar":
            swal("Está siendo redirigido", "","success");
            window.open("https://www.vogue.com/fashion-shows")
            break;
        }
      })

})

//SHOP
//INFO INDIVIDUAL DE LOS PRODUCTOS
const data = [
["one","two","three","four",
"five","six","seven","eigth"],
[
    "Gucci Shearling Outfit", " Gucci Silk Viscose Jumpsuit",
    "Gucci Wool Formal Outfit", "Gucci HA HA HA pinstripe wool Outfit",
    "Gucci HA HA HA Outfit" , "Gucci Tartan wool Outfit",
    "Gucci Coat Outfit", "Fine bouclé Outfit"
],
[
    "11.000","8.500","6.000","5.000","11.860","14.094","15.670","16.000"
],
["Outfit Size","Outfit Size","Outfit Size","Outfit Size","Outfit Size"
,"Outfit Size","Outfit Size","Outfit Size"],
[
    ["S","M","L","XL"],["S","M","L","XL"],
    ["S","M","L","XL"],["S","M","L","XL"],
    ["S","M","L","XL"],["S","M","L","XL"],
    ["S","M","L","XL"],["S","M","L","XL"],
],
[80, 91, 90, 99, 100, 100, 95, 98],
[
    "bw","bw","bw","bw","bw","bw","bw","bw"
]];
const progText = document.querySelector(".progText");
const progress = document.querySelector(".progress");

//ANIMACIÓN DE LA BARRA DE PROGRESO
function progressBar(percentage) {
    progText.innerText = 0;
    let count = 0;
    progress.style.transition = 50 * data[5][percentage] + "ms";
    progress.style.bottom = data[5][percentage] - 110 + "%";
    function updateCount () {
        const target = data[5][percentage];
        if (count < target) {
            count++;
            progText.innerText = count + "%";
            setTimeout(updateCount, 30);
        } else {
            progText.innerText = target + "%";
        }
    }
    updateCount();
}
progressBar(0);


//Tomar elementos del DOM
const optionsList = document.querySelector('.options-list');
const options = document.querySelector('.options-list > li');
optionsList.addEventListener('click', function(e) {
    if(e.target && e.target.classList.contains('option')){
        for(let i = 0; i < optionsList.children.length; i++) {
            optionsList.children[i].classList.remove('option-active');
        }
        e.target.classList.add('option-active');
    }
});
//SLIDER
//Tomar elementos del DOM
const arrLeft = document.querySelector('.arrow-left');
const arrRight = document.querySelector('.arrow-right');
const img = document.querySelector('.product-image img');
const name = document.querySelector('.product-name');
const price = document.querySelector('.product-price');
const optionTitle = document.querySelector('.product-option-title');
const bg = document.querySelector('.panel-1');

let id2 = 0;
let li;
function slider (id2) {
    img.src = "shop/" + data[0][id2] + ".png";
    img.classList.add('fade-in');
    setTimeout(() => {
        img.classList.remove('fade-in');
    }, 850);
    name.innerText = data[1][id2];
    price.innerText = data [2][id2];
    optionTitle.innerText = data[3][id];
    for(let i = 0; i < data [4][id2].length; i++){
        li = document.createElement('li');
        li.innerHTML = data [4][id2][i];
        li.classList.add('option');
        if(i === 0){
            optionsList.innerHTML = "";
            li.classList.add('option-active');
        }
        optionsList.appendChild(li);
    }
    bg.style.backgroundImage = "url(shop/" + data[6][id2] + ".webp)";
    progressBar(id2);
}
        
   arrLeft.addEventListener('click', () => {
   id2-- ;
   if(id2 < 0){
    id2 = data[0].length -1;
   }
   slider(id2);
});

arrRight.addEventListener('click', () => {
    id2++;
    if (id2 > data [0].length -1){
        id2 = 0;
    }
    slider(id2);
});
//LIKE BTN
let likebtn = document.querySelector ('#likebtn');
let dislikebtn = document.querySelector ('#dislikebtn');
let input1 = document.querySelector ('#input1')
let input2 = document.querySelector ('#input2')
likebtn.addEventListener('click', () => {
    input1.value = parseInt(input1.value) + 1;
    input1.style.color = "#12ff00";
});
dislikebtn.addEventListener('click', () => {
    input2.value = parseInt(input2.value) + 1;
    input2.style.color = "#ff0000";
});
//BUY NOW 
let nowBtn = document.querySelector('.btn-primary')
nowBtn.addEventListener('click', () => {
    window.open("https://www.gucci.com/it/it/")
});
//STREETSTYLE
     const sliderST = document.querySelector('.image-sliderST');
     const arrLeftST = document.querySelector('.arrow-leftST');
     const arrRightST = document.querySelector('.arrow-rightST');
     const headingST = document.querySelector('.captionST h1');

 const imagesST = ["ny_4.jpg","milan_1.jpg","ny_2.jpg",
     "ny_5.jpg","milan_3.webp","milan_6.jpg","ny_3.webp","one.jpg","four.jpg","eight.jpg" , "eleven.webp" , 
     "ny_8.webp", "nine.jpg" , "seven.jpg","ten.jpg", "three.webp", "twelve.jpg", "tokyo_3.jpeg",
     "tokyo_2.webp", "tokyo_1.png", "2.jpg"]
 const headingsST = ["New York, USA", "Milan, Italy", "New York, USA", "New York, USA",
     "Milan, Italy", "Milan, Italy", "New York, USA", "New York, USA", "New York, USA", 
     "New York, USA", "Seoul, South Korea", "New York, USA", "Madrid, Spain", "Madrid, Spain",
     "Tokyo, Japan", "New York, USA", "Paris, France","Tokyo, Japan","Tokyo, Japan","Tokyo, Japan",
     "Madrid, Spain" ];

 let id3 = 0;
 function slideS(id3) {
     sliderST.style.backgroundImage =
     `url(streetStyle/${imagesST[id3]})`
     sliderST.classList.add('image-fadeS');
     setTimeout(() => {
         sliderST.classList.remove('image-fadeS');
     }, 550);
     headingST.innerText = headingsST[id3]
 };
 arrLeftST.addEventListener('click', () => {
     id3--;
     if(id3 < 0) {
         id3 = imagesST.length -1;
     }
     slideS(id3)
 });

 arrRightST.addEventListener('click', () =>{
     id3++;
     if(id3 > imagesST.length -1){
         id3=0;
     }
     slideS(id3);
 });






    

