const axios = require('axios');

// Función para obtener un número aleatorio entre un rango dado
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para obtener un equipo aleatorio de 6 Pokémon
async function getRandomTeam() {
  try {
    const team = [];

    // Obtener información sobre un Pokémon aleatorio 6 veces
    for (let i = 0; i < 6; i++) {
      const pokemonId = getRandomNumber(1, 898); // El número máximo de Pokémon es 898 en la versión más reciente de la PokeAPI
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      const pokemon = response.data;

      // Agregar el nombre y número del Pokémon al equipo
      team.push({
        name: pokemon.name,
        number: pokemon.id
      });
    }

    return team;
  } catch (error) {
    console.error('Ocurrió un error al obtener el equipo de Pokémon:', error);
    return [];
  }
}

// Función para imprimir los nombres y números de los Pokémon del equipo
function printTeam(team) {
  team.forEach(pokemon => {
    console.log(`Número: ${pokemon.number} - Nombre: ${pokemon.name}`);
  });
}

// Obtener y mostrar el equipo aleatorio
getRandomTeam()
  .then(team => {
    console.log('Participantes del equipo Pokémon aleatorio:');
    printTeam(team);
  });
