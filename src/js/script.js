const form = document.querySelector('.search-js');
const divEl = document.querySelector('.random-js');

const API_URL = 'https://swapi.dev/api/';

fetch(API_URL)
  .then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  })
  .then(data => console.log(data))
  .catch(err => console.log(err));

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
}
