const axios = require("axios");

for (let id = 1; id <= 20; id++) {
  console.log(id);

  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => {
      const pokemon = response.data;
      console.log("Nombre:", pokemon.name);
    })
    .catch((error) => {
      console.error("Error al obtener el Pokémon:", error.message);
    });
}
