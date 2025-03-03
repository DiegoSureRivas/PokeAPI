//Buscar datos del pokemón dependiendo su nombre o numero
function buscarPokemon(contenedorNumero){
    let inputId = `pokemonInput${contenedorNumero}`;
    let nombrePokemon = document.getElementById(inputId).value.trim().toLowerCase();
    let urlAPI = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;


    fetch(urlAPI)
    .then(Response => Response.json())
    .then(datosPokemon => mostrarPokemon(datosPokemon, contenedorNumero))
    .catch(() => mostrarError(contenedorNumero))
}

// Mostrar informacion del Pokemon

function mostrarPokemon(datosPokemon, contenedorNumero){
    let infoDivID = `pokemonInfo${contenedorNumero}`;
    let infoDiv = document.getElementById(infoDivID);

    infoDiv.innerHTML=`
    <h2 class="pk-name">${datosPokemon.name.toUpperCase()}</h2>
    <img class="pk-img" src="${datosPokemon.sprites.other["official-artwork"].front_default}">
    <p>Numero:${datosPokemon.id}</p>
    <p>Weight:${datosPokemon.weight/10}kg.</p>
    <p>Height:${datosPokemon.height}cm.</p>
    `
}

// Error busqueda de Pokemon

function mostrarError(contenedorNumero){
    let infoDivID = `pokemonInfo${contenedorNumero}`;
    let infoDiv = document.getElementById(infoDivID);

    infoDiv.innerHTML=`
    <img class="pk-ms">Pokemon no encontrado.<br> Intenta con otro nombre o numero</p>

    `
}

//mostrar pokemon inicial

window.onload = function(){
    document.getElementById("pokemonInput1").calue = "25";
    buscarPokemon(1);
    document.getElementById("pokemonInput2").calue = "4";
    buscarPokemon(2);
}

