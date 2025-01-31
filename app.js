/*El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
Aquí deberás desarrollar la lógica para resolver el problema.*/

let amigos = [];

function agregarAmigo(){
    nombre = document.getElementById('amigo').value;
    mayusculas = nombre.toUpperCase();
    console.log(`Añadiste ${mayusculas}`);
        //Valida si tiene datos
        if (nombre === '') {
            alert('Por favor, inserte un nombre.');
        }
        //Valida si esta repetido
        else if (amigos == mayusculas) {
            alert('Ese nombre ya se encuentra.')
        }
        //Inserta el dato
        else {
            amigos.push(mayusculas);
        }
        console.log(`Se tu array tiene ${amigos}`);
    //limpia el input
    limpiarCaja();    
}

function limpiarCaja(){
    document.getElementById('amigo').value = '';
}
