/*El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
Aquí deberás desarrollar la lógica para resolver el problema.*/

let amigos = [];

function agregarAmigo() {
    let nombre =  document.getElementById('amigo').value;
    let mayusculas = nombre.toUpperCase();
    //console.log(nombre);
    if (nombre === '') {
        //Alerta vacio
        alert('Por favor, inserte un nombre.');
        return;
    }else{
        if (amigos.includes(mayusculas)) {
            return;
        }
        amigos.push(mayusculas);
        console.log(`Amigo agregado: ${mayusculas}`);
        console.log(`Lista de amigos:`, amigos);
        //console.log(amigos.length);
    }
    //Limpia el input
    document.getElementById('amigo').value = '';
}


