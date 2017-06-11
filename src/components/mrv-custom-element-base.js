export class MrvCustomElementBase extends HTMLElement {  
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'});
    this.render();
  }

  render() {
    this.shadow.innerHTML = '<p>Override render() to change this content</p>';
  }
};
