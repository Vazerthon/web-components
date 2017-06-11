import { MrvCustomElementBase } from './mrv-custom-element-base';

export class First extends MrvCustomElementBase { 
  render() {
    this.shadow.innerHTML = '<p>Hello first</p>';
  }
};
