

/* VARIABLES */
let cuadrados = document.querySelector('.cuadrados');
let colors = [];
let square = document.querySelectorAll(".square")
let colorDisplay = document.querySelector("#colorDisplay")
let body= document.querySelector("body")
let h1 = document.querySelector("h1")
let botonReiniciar = document.querySelector(".botonReiniciar");
let botonJugarAgain = document.querySelector(".botonJugarAgain");
let botonesDificultad = document.querySelector(".botones__dificultad");
let botonEasy = document.querySelector(".botones__easy");
let botonEstandar = document.querySelector(".botones__estandar");
let botonHard = document.querySelector(".botones__hard");





/* EVENTOS */

botonesDificultad.addEventListener('click', e =>{
    colors=[];
    generateRandomColors((dificultadJuego(e)));
    juego();
})

botonJugarAgain.addEventListener('click', ()=>{
    colors=[];
    generateRandomColors()
    botonJugarAgain.innerHTML="Reset colors";
    colorDisplay.style.background= "none";
    botonEasy.style.background = "red";
        botonEstandar.style.background = "rgb(0, 255, 0)";
        botonHard.style.background = "";
})


const dificultadJuego = e =>{
    if(e.target.classList.contains('botones__easy')){
        botonEasy.style.background = "rgb(0, 255, 0)";
        botonEstandar.style.background = "red";
        botonHard.style.background = "red";
        valor = 3
    }else if(e.target.classList.contains('botones__hard')){
        botonEasy.style.background = "red";
        botonEstandar.style.background = "red";
        botonHard.style.background = "rgb(0, 255, 0)";
        valor = 9;
    }else{
        botonEasy.style.background = "red";
        botonEstandar.style.background = "rgb(0, 255, 0)";
        botonHard.style.background = "";
        valor = 6;
    }
    e.stopPropagation();
    return valor;
}




//Esta funcion sirve para que se genere el color aleatoriamente
let randomColor= ()=> {
    let r = Math.floor(Math.random()* 255);
    let g = Math.floor(Math.random()* 255);
    let b = Math.floor(Math.random()* 255);
    let rgb = `rgb(${r}, ${g}, ${b})`;
    return rgb;
}


/* Para los botones EASY / ESTANDAR / HARD */
function generateRandomColors(num){
    if(num===3){
        cuadrados.innerHTML = "";
        for(let i = 1; i<=3;i++){
            colors.push(randomColor());
            cuadrados.innerHTML += `<div class="square"></div>`
        }
    }else if (num===9){
        cuadrados.innerHTML = "";
        for(let i = 1; i<=9;i++){
            colors.push(randomColor());
            cuadrados.innerHTML += `<div class="square"></div>`
        }
    }else{
        cuadrados.innerHTML = "";
        for(let i = 1; i<=6;i++){
            colors.push(randomColor());
            cuadrados.innerHTML += `<div class="square"></div>`
        }
    }
    let square = document.querySelectorAll(".square")
    //Le aplico el color a cada uno de los divs con la clase "square" mediante (square[1]en el loop) con .style.background = colors en [i]
    for(let i=0; i<square.length; i++){
        square[i].style.background=colors[i]
    }

    juego(square);
}

    generateRandomColors();


function juego (square){

    //función para asignarle a pickedColor un color random de nuestro arreglo de colores.
    let pickColor = ()=> {
        let random = Math.floor(Math.random() * colors.length)
        let resultado = colors[random]
        return resultado
    }
    console.log(colors);
    let pickedColor = pickColor();
    //Aca le agrego con la propiedad .innerHTML para que refleje el nombre del color que tengo guardado en pickedColor
    document.getElementById("colorDisplay").innerHTML=pickedColor;
    console.log(pickedColor);
    
    //Agrego un evento de click a cada uno de los cuadrados
    let changeColors = function () {
        for(let i=0; square.length; i++){
            square[i].style.background= pickedColor
        }
    }
    
    for(let i=0; i<square.length; i++){
        square[i].addEventListener("click", function cambio(){
            let clickedColor = square[i].style.background= colors[i]
                if(clickedColor==pickedColor){
                botonJugarAgain.innerHTML="Play Again";
                document.getElementById("message").innerHTML="Correct!";
                //al colorDisplay le pongo el color que defini en pickedColor
                colorDisplay.style.background=pickedColor;
                changeColors();
                }else{
                    square[i].style.background= body
                    document.getElementById("message").innerHTML="Try Again!"
                    square[i].style.background= "#232323"
                }
        })
    }

    //Esta funcion sirve para que al clickear el color correcto todos los otros cuadrados tomen el color ese
}


