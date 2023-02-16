import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['link', 'button'];

  disable() {
    this.buttonTarget.disabled = true;
    this.buttonTarget.innerText = 'clicked';
    this.linkTarget.classList.remove('d-none');
  }

  reset() {
    this.buttonTarget.innerText = 'Click me';
    this.buttonTarget.disabled = false;
    this.linkTarget.classList.add('d-none');
  }
}
