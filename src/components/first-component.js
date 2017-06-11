import { MrvCustomElementBase } from './mrv-custom-element-base';

export class First extends MrvCustomElementBase {
  static get observedAttributes() {return ['text']; }

  render(text) {
    this.shadow.innerHTML = `<p>${text}</p>`;
  }

  attributeChangedCallback(attributeName, oldValue, newValue, namespace) {
    switch (attributeName) {
      case 'text':
        this.render(newValue);
        break;
    }
  };
};
