import { Controller } from "@hotwired/stimulus";
import Sortable from "sortablejs";


export default class extends Controller {
  static targets = ['list'];

  connect() {
    Sortable.create(this.listTarget, {
      ghostClass: "ghost",
      animation: 150,
      onEnd: (event) => {
        alert(`${event.oldIndex} moved to ${event.newIndex}`);
      }
    });
  }
}
