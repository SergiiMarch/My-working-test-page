import axios from 'axios';

const cardContainer = document.querySelector('.card-container');
const searchForm = document.querySelector('.search-form');

async function fetchPokemon(pokemonId) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    //перевірка на 404 помилку
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log('Помилка запита', err);
  }
}

fetchPokemon(1);

searchForm.addEventListener('submit', handleSearch);

function handleSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const queryValue = form.elements.query.value;
  console.log(queryValue);
}

function renderPokemonCard({ name, sprites, weight, height, abilities }) {
  const abilityListItems = abilities
    .map(({ ability }) => `<li class="list-group-item">${ability.name}</li>`)
    .join('');

  const markup = `<div class="card">
     <div class="card-img-top">
       <img src="${sprites.front_default}" alt="${name}">
     </div>
     <div class="card-body">
       <h2 class="card-title">Ім'я: ${name}</h2>
       <p class="card-text">Вага: ${weight}</p>
       <p class="card-text">Зростання: ${height}</p>
  
       <p class="card-text"><b>Уміння</b></p>
       <ul class="list-group">${abilityListItems}</ul>
     </div>
  </div>`;
  cardContainer.innerHTML = markup;
}
