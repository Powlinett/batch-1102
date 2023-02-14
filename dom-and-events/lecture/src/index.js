// Get ONE element

const playersList = document.querySelector('#players');

playersList.insertAdjacentHTML("beforeend", "<li>Luke</li>");
playersList.insertAdjacentHTML("beforeend", "<li>Anakin</li>");

const listItem = playersList.querySelector('.red');
listItem.classList.remove('red');


// Get ALL elements

const fifaList = document.querySelector('#fifa-wins');
const listItems = fifaList.querySelectorAll('li');

listItems.forEach((item) => {
  if (item.innerText === "Argentina (2 wins)") {
    item.style.display = 'none';
  }
});

fifaList.insertAdjacentHTML("beforeend", "<li>France (2 wins)</li>");


// Advanced DOM manipulation

const input = document.querySelector('#email');
console.log(input.value);
input.value = 'pauline@lewagon.com';

const link = document.querySelector('#home');
console.log(link.innerText);
console.log(link.innerHTML);

const user = document.querySelector('#user');
console.log(user.dataset.uid);
console.log(user.dataset.githubNickname);


// Event listeners

// For one image
// const img = document.querySelector('#romain');

// img.addEventListener('click', (event) => {
//   event.currentTarget.classList.toggle('circle');
// });

// For all images
const images = document.querySelectorAll('img');

images.forEach((image) => {
  image.addEventListener('click', (event) => {
    console.log('clicked');
    event.currentTarget.classList.toggle('circle');
  });
});
