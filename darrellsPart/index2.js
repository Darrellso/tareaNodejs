const axios = require("axios");
const readline = require('readline');//redline segun entendi, es una forma de que los usuarios unteractuen con la pagina..

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el nombre de un Pokémon: ', (pokemonName) => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => {
      const pokemon = response.data;
      console.log("Nombre:", pokemon.name);
      console.log("Tipo:", pokemon.types.map((type) => type.type.name).join(', '));
      console.log("Altura:", pokemon.height);
      console.log("Peso:", pokemon.weight);
    })
    .catch((error) => {
      console.error("Error al obtener el Pokémon:", error.message);
    })
    .finally(() => {
      rl.close();
    });
});
