import { MrvCustomElementBase } from './mrv-custom-element-base';

export class App extends MrvCustomElementBase {
  constructor() {
    super();

    this.updateFoo();
  }

  render(foo) {
    this.shadow.innerHTML = `<mrv-first text='${foo}'></mrv-first>`;
  }
  
  updateFoo() {
    setInterval(() => {
      this.render(`hello ${Date.now()}`);
    }, 1000);
  }
};
