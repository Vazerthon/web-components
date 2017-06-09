export class First extends HTMLElement { 
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'});
    this.render();
  }

  render() {
    this.shadow.innerHTML = '<p>shadow p</p>';
  }

  attributeChangedCallback(attributeName, oldValue, newValue, namespace) {
    console.log('attributeChangedCallback hit');
  }
};
