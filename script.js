//Defino los colores RGB
let colors = ["rgb(202, 18, 120)", "rgb(77, 152, 87)", "rgb(210, 157, 160)", "rgb(97, 19, 174)", "rgb(103, 88, 12)", "rgb(10, 20, 150)"]


//Creo las variables con los elementos para poder usarlo en mi js
let square = document.querySelectorAll(".square")
let colorDisplay = document.querySelector("#colorDisplay")
let body= document.querySelector("body")
let h1 = document.querySelector("h1")
let boton = document.querySelector(".boton");




console.log(boton)


//función para asignarle a pickedColor un color random de nuestro arreglo de colores.
let pickColor= ()=> {
    let random = Math.floor(Math.random()* colors.length)
    let resultado = colors[random]
    return resultado
}

let pickedColor= pickColor()



//Le aplico el color a cada uno de los divs con la clase "square" mediante (square[1]en el loop) con .style.background = colors en [i]
for(let i=0; i<square.length; i++){
    square[i].style.background=colors[i]
}



//Aca le agrego con la propiedad .innerHTML para que refleje el nombre del color que tengo guardado en pickedColor
document.getElementById("colorDisplay").innerHTML=pickedColor;

//Esta funcion sirve para que al clickear el color correcto todos los otros cuadrados tomen el color ese
let changeColors = function () {
    for(let i=0; square.length; i++){
        square[i].style.background= pickedColor
    }
}

//Agrego un evento de click a cada uno de los cuadrados
for(let i=0; i<square.length; i++){
    square[i].addEventListener("click", function(){
        let clickedColor = square[i].style.background= colors[i]
            if(clickedColor==pickedColor){
            document.getElementById("message").innerHTML="Correct!";
            //al colorDisplay le pongo el color que defini en pickedColor
            colorDisplay.style.background=pickedColor;
            boton.classList.remove("botonReset");
            changeColors();
            }else{
                square[i].style.background= body
                document.getElementById("message").innerHTML="Try Again!"
                square[i].style.background= "#232323"
            }
    })
}


//Esta funcion sirve para que se genere el color aleatoriamente
let randomColor= ()=> {
    let r = Math.floor(Math.random()* 255)
    let g = Math.floor(Math.random()* 255)
    let b = Math.floor(Math.random()* 255)
    let rgb = `rgb (${r}, ${g}, ${b})`
    return rgb
}


/* Botones modo EASY Y HARD */



