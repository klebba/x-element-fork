import XElement from '../x-element.js';

class DemoPropertiesElement extends XElement {
  static get properties() {
    return {
      reflected: {
        type: String,
        reflect: true,
      },
      booleanValue: {
        type: Boolean,
        reflect: true,
        initial: true,
      },
    };
  }

  static template(html) {
    return ({ reflected }) => {
      return html`
        <style>
          :host {
            display: block;
            width: 200px;
          }
          
          :host([reflected]) {
            background-color: cyan;
          }
          
          :host([boolean-value]) {
            font-weight: bold;
          }
        </style>
        <div id="demo">${reflected}</div>
      `;
    };
  }
}

customElements.define('demo-element-properties', DemoPropertiesElement);
