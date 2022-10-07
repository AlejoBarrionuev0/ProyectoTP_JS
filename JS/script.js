/*Le asigno una variable al boton, al contenedor del captcha y 
a los div que mostraran el mensaje de error y el desenfoque del fondo*/
const btnCheckear = document.querySelector(".checkear");
const container = document.querySelector(".div");
const msj = document.querySelector(".error");
let blur = document.querySelector(".blur");
let n = "td4eva";

    btnCheckear.addEventListener("click", e => {//al clickear el boton
        e.preventDefault();//para evitar que la página se refresque al momento de llamar al evento
        const input = document.querySelector("input").value;//guardo en una variable el valor que se haya ingresado en el input
        if(input==n){
        //el container y el boton del captcha se ocultan
        container.style.display = "none"; 
        btnCheckear.style.display = "none";
        blur.remove();//elimino el elemento
        }else{
            msj.innerText="Los caracteres no coinciden!";
        }
    
    });

//Hecho por: Alejo Barrionuevo 07/10/2022