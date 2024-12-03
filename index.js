// fetch -- (url, {options}) -- options {method: GET/ POST/ UPDATE/DELETE}
/*
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
     .then(response => {
        if (!response.ok) {
            throw new Error("Could not fetch")
        }
        return response.json();
     })
     .then(data => console.log(data.name))
     .catch(error => console.log(error))
     */

/*using Async await for fetch using response JSON */

fetchData();

async function fetchData(){
    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
            throw new Error("could not find");
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display ="block";
    }
    catch(error){
        console.log(error);
    }
}