const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para obtener los movimientos de un Pokémon
async function getMovesOfPokemon(pokemonName) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const pokemon = response.data;
    const moves = pokemon.moves.map(move => move.move.name);
    return moves;
  } catch (error) {
    console.error('Ocurrió un error al obtener los movimientos del Pokémon:', error);
    return [];
  }
}

// Solicitar al usuario que ingrese el nombre de un Pokémon
rl.question('Ingrese el nombre de un Pokémon: ', (pokemonName) => {
  // Obtener y mostrar los movimientos del Pokémon ingresado
  getMovesOfPokemon(pokemonName)
    .then(moves => {
      console.log(`Movimientos del Pokémon ${pokemonName}:`);
      console.log(moves);
      rl.close();
    });
});
