import { MrvCustomElementBase } from './mrv-custom-element-base';

export class App extends MrvCustomElementBase { 
  render() {
    this.shadow.innerHTML = '<mrv-first></mrv-first>';
  }
};
