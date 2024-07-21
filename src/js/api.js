const cardContainer = document.querySelector('.card-container');
const searchForm = document.querySelector('.search-form');

const API_KEY = 'ecb6ee3a36f64a078a0cc43b5e30df9f';
const url = 'https://newsapi.org/v2/everything';

async function fetchNews(keyword) {
  try {
    const response = await fetch(
      `${url}?q=keyword&apiKey=${API_KEY}&pageSize=10`
    );
    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Помилка запиту:', error);
  }
}
fetchNews();
async function fetchPokemon(pokemonId) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    //перевірка на 404 помилку
    if (!response.ok) {
      throw new Error(response.status);
    }
    return await response.json();
    console.log(data);
  } catch (err) {
    console.log('Помилка запита', err);
  }
}

// searchForm.addEventListener('submit', handleSearch);

// async function handleSearch(e) {
//   e.preventDefault();

//   const form = e.currentTarget;
//   const queryValue = form.elements.query.value.toLowerCase();

//   try {
//     const pokemonData = await fetchPokemon(queryValue); // Отримуємо дані покемона
//     renderPokemonCard(pokemonData); // Рендеримо картку покемона
//   } catch (error) {
//     console.error('Помилка запиту:', error); // Логуємо помилку для налагодження
//     onFetchError(); // Викликаємо обробник помилок
//   }
// }

// function renderPokemonCard({ name, sprites, weight, height, abilities }) {
//   const abilityListItems = abilities
//     .map(({ ability }) => `<li class="list-group-item">${ability.name}</li>`)
//     .join('');

//   const markup = `<div class="card">
//      <div class="card-img-top">
//        <img src="${sprites.front_default}" alt="${name}">
//      </div>
//      <div class="card-body">
//        <h2 class="card-title">Ім'я: ${name}</h2>
//        <p class="card-text">Вага: ${weight}</p>
//        <p class="card-text">Зростання: ${height}</p>

//        <p class="card-text"><b>Уміння</b></p>
//        <ul class="list-group">${abilityListItems}</ul>
//      </div>
//   </div>`;
//   cardContainer.innerHTML = markup;
// }

function renderMareupNews({ author, title, url }) {}

function onFetchError(err) {
  alert('Упс, щось пішло не так');
}

function checkStorage(available, ordered) {
  let message = '';
  if (ordered === 0) {
    message = 'There are no products in the order!';
  } else if (ordered > available) {
    message = 'There are no products in the order!';
  } else {
    message = 'The order is accepted, our manager will contact you';
  }
  return message;
}

console.log(checkStorage(4, 6));

function checkPassword(password) {
  const correctPassword = 'jqueryismyjam';
  const result =
    password === correctPassword
      ? 'Access granted'
      : 'Access denied, wrong password!';
  return result;
}

function getSubscriptionPrice(type) {
  switch (type) {
    case 'starter':
      return 0;
    case 'professional':
      return 20;
    case 'organization':
      return 50;
    default:
      return 'Invalid subscription type!';
  }
}
getSubscriptionPrice('organization');
getSubscriptionPrice('starter');

let count = 0;

while (count < 110) {
  console.log(`Count: ${count}`);
  count += 1;
}
