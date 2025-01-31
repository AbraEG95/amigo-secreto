/*El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
Aquí deberás desarrollar la lógica para resolver el problema.*/

let amigos = []; // Array para almacenar los amigos

function agregarAmigo(){
    nombre = document.getElementById('amigo').value; // Obtiene el nombre del input
    mayusculas = nombre.toUpperCase(); // Convierte el nombre a mayúsculas
    console.log(`Añadiste ${mayusculas}`);

        // Valida si el campo de nombre está vacío
        if (nombre === '') {
            alert('Por favor, inserte un nombre.');
        }
        // Valida si el nombre ya está en el array
        else if (amigos.includes(mayusculas)) {
            alert('Ese nombre ya se encuentra.')
        }
        // Si no está vacío ni repetido, lo agrega al array
        else {
            amigos.push(mayusculas);
        }
        console.log(`Tu array tiene ${amigos}`);

    // Limpia el input
    limpiarCaja(); 
    
    // Muestra la lista
    mostrarAmigos();

    //sortearAmigo();
}

// Función para limpiar el input
function limpiarCaja(){
    document.getElementById('amigo').value = '';
}

function mostrarAmigos() {
    // Accedemos al <ul> con el id 'listaAmigos'
    let lista = document.getElementById('listaAmigos');
    // Limpiamos el contenido actual de la lista
    lista.innerHTML = '';

    // Recorremos el array de amigos
    amigos.forEach(amigo => {
        // Creamos un nuevo <li> para cada amigo
        let li = document.createElement('li');
        // Asignamos el nombre del amigo al contenido del <li>
        li.textContent = amigo;
        // Agregamos el <li> a la lista <ul>
        lista.appendChild(li);
    });
}

function sortearAmigo(){
    
    let indice = Math.floor(Math.random () * amigos.length);
    let ganador = '';
        if (amigos == '') {
            alert('No tiene participantes');
        }else{
            ganador += amigos[indice];
        }console.log(`el ganador es ${ganador}`);

    let nombreGanador = document.getElementById('resultado');
    nombreGanador.innerHTML = ganador;
    let li = document.createElement('li');
    li.textContent = ganador;
    nombreGanador.textContent = ganador;   
}

