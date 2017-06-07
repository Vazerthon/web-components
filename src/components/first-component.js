export class First extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({mode: 'open'});
    
    const p1 = document.createElement('p');
    p1.textContent = 'hello world!';

    shadow.appendChild(p1);
  }
};
