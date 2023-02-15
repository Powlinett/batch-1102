const authorization = "Bearer sk_10d313de3da1601b25f192435ba6b05f";
const url = "https://person.clearbit.com/v2/people/find?email="
// TODO
// selectionner le formulaire OK
// ecouter le 'submit' du formulaire OK
// sélectioner et récuperer l'input OK
// fetch sur l'API OK
// assigner les valeurs a mon DOM

const myForm = document.querySelector("#clearbitForm");

myForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const myInput = event.currentTarget.querySelector('#clearbitEmail');
  const myInputValue = myInput.value;
  console.log(myInputValue);
  fetch(`${url}${myInputValue}`, {
    method: 'GET',
    headers: {
      'Authorization': authorization
    }
  })
  .then(response => response.json())
  .then((data) => {
    console.log(data);
    if (data.error) {
      window.alert("404 - Not found");
      return;
    }
    const email = data.email;
    const bio = data.bio;
    const location = data.location;
    const name = data.name.fullName;
    document.querySelector('#userName').innerText = name;
    document.querySelector('#userEmail').innerText = email;
    document.querySelector('#userBio').innerText = bio;
    document.querySelector('#userLocation').innerText = location;
  })
});
