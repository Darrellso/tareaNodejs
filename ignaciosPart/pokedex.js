const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para buscar un Pokémon por nombre
async function searchPokemonByName(pokemonName) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const pokemon = response.data;
    console.log(`Nombre: ${pokemon.name}`);
    console.log(`Número: ${pokemon.id}`);
    console.log('Tipos:');
    pokemon.types.forEach(type => {
      console.log(`- ${type.type.name}`);
    });
  } catch (error) {
    console.error('No se encontró el Pokémon:', error.response.data);
  }
}

// Función para listar los tipos de Pokémon
async function listPokemonTypes() {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/type');
    const types = response.data.results;
    console.log('Tipos de Pokémon:');
    types.forEach(type => {
      console.log(`- ${type.name}`);
    });
  } catch (error) {
    console.error('Ocurrió un error al obtener los tipos de Pokémon:', error);
  }
}

// Función para mostrar el menú y obtener la opción seleccionada por el usuario
function showMenu() {
  console.log('--- Pokédex ---');
  console.log('1. Buscar Pokémon por nombre');
  console.log('2. Listar tipos de Pokémon');
  console.log('3. Salir');

  rl.question('Seleccione una opción: ', (option) => {
    handleOption(option);
  });
}

// Función para manejar la opción seleccionada por el usuario
function handleOption(option) {
  switch (option) {
    case '1':
      rl.question('Ingrese el nombre del Pokémon: ', (pokemonName) => {
        searchPokemonByName(pokemonName)
          .then(() => {
            showMenu();
          });
      });
      break;
    case '2':
      listPokemonTypes()
        .then(() => {
          showMenu();
        });
      break;
    case '3':
      console.log('¡Hasta luego!');
      rl.close();
      break;
    default:
      console.log('Opción no válida. Por favor, seleccione una opción válida.');
      showMenu();
      break;
  }
}

// Iniciar la aplicación mostrando el menú
showMenu();
