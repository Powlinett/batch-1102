// QUERY_SELECTOR & EVENT_LISTENERS

// const button = document.querySelector('#click-me');

// button.addEventListener('click', (event) => {
//   event.currentTarget.innerText = 'clicked';
//   event.currentTarget.setAttribute('disabled', '');
// });


// FETCH

// GET

const list = document.querySelector('#results');

const searchMovies = (title) => {
  fetch(`http://www.omdbapi.com/?s=${title}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      if (data.Search) {
        list.innerHTML = '';
        data.Search.forEach((movie) => {
          list.insertAdjacentHTML('beforeend', `<li class="list-inline-item">
            <p>${movie.Title}</p>
            <img src="${movie.Poster}">
          </li>`);
        });
      }
    });
};

searchMovies('harry potter');

const form = document.querySelector('#search-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const input = document.querySelector('#search-input');
  const value = input.value;

  searchMovies(value);
});


// POST

const loginForm = document.querySelector('#form');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailInput = event.currentTarget.querySelector('#email');
  const passwordInput = event.currentTarget.querySelector('#password');

  const values = {
    email: emailInput.value, // "eve.holt@reqres.in"
    password: passwordInput.value, // "cityslicka"
  };

  // const fetchOptions = {
  //   method: 'POST',
  //   body: JSON.stringify(values),
  // };
  // fetch("https://reqres.in/api/register", fetchOptions);
  //
  // OR see below
  fetch("https://reqres.in/api/register", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
    });
});
