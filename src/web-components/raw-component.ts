const template = document.createElement('template');
template.innerHTML = `
  <div>
    <p>RawComponent rendered as HTML</p>
  </div>
`;

class RawComponent extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('raw-component', RawComponent);