// const axios = require("axios");
// const pokemonId = 25 & 20; // ID del Pokémon a buscar
// axios
//   .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
//   .then((response) => {
//     const pokemon = response.data;
//     console.log("Nombre:", pokemon.name);
//     console.log("Altura:", pokemon.height);
//     console.log("Peso:", pokemon.weight);
//     console.log(
//       "Habilidades:",
//       pokemon.abilities.map((ability) => ability.ability.name)
//     );
//     console.log(
//       "Movimientos:",
//       pokemon.moves.map((move) => move.move.name)
//     );
//   })
//   .catch((error) => {
//     console.error("Error al obtener el Pokémon:", error.message);
//   });

  const axios = require('axios');

const userIds = [1, 2, 3]; // IDs de los usuarios a buscar

const fetchUserNames = async (userIds) => {
  try {
    const results = [];

    for (const userId of userIds) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);

      const user = response.data;
      if (user) {
        results.push(user.name);
      }
    }

    return results;
  } catch (error) {
    console.error('Error al obtener los nombres de los usuarios:', error.message);
    return [];
  }
};

// Ejemplo: Obtener nombres para los IDs [1, 2, 3]
fetchUserNames(userIds)
  .then((names) => {
    console.log('Nombres de usuarios:');
    names.forEach((name) => {
      console.log(name);
    });
  });
