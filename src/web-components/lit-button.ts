import { LitElement, html } from '@polymer/lit-element';

class LitButton extends LitElement {

  constructor() {
    super();
  }

  render() {
    return html`<button>Lit Button</button>`;
  }

}

customElements.define('lit-button', LitButton);