import { Controller } from "@hotwired/stimulus"
const garageName = 'mygarage'

export default class extends Controller {
  static targets = ["carsList", "modelInput", "plateInput", "ownerInput", "brandInput"];

  connect() {
    this.getCars();
  }

  getCars() {
    fetch(`https://wagon-garage-api.herokuapp.com/${garageName}/cars`)
    .then(response => response.json())
    .then((data) => {
      this.carsListTarget.innerHTML = "";

      data.forEach(car => {
       this.insertCarCard(car);
      });
    });
  }

  createCar(event) {
    event.preventDefault();
    
    const car = {
      model: this.modelInputTarget.value,
      brand: this.brandInputTarget.value,
      owner: this.ownerInputTarget.value,
      plate: this.plateInputTarget.value,
    };
    
    fetch(`https://wagon-garage-api.herokuapp.com/${garageName}/cars`, {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car)
    })
    .then(response => response.json())
    .then((data) => {
      this.insertCarCard(data);
    });
  }

  deleteCar(event) {
    event.preventDefault();

    const carId = event.currentTarget.dataset.id;
    
    fetch(`https://wagon-garage-api.herokuapp.com/cars/${carId}`, {
      method: 'DELETE',
    })
    .then((response) => response.json())
    .then((data) => {
      this.getCars();
    });
  }

  insertCarCard(car) {
    const template = `<div class="car">
      <a href="#" data-id=${car.id} data-action="click->garage#deleteCar">Delete</a>
      <div class="car-image">
        <img src="http://loremflickr.com/280/280/Ferrari" />
      </div>
      <div class="car-info">
        <h4>${car.brand} ${car.model}</h4>
        <p><strong>Owner:</strong>${car.owner}</p>
        <p><strong>Plate:</strong>${car.plate}</p>
      </div>
    </div>`;
    this.carsListTarget.insertAdjacentHTML('beforeend', template);
  }
}
