import { MrvCustomElementBase } from './mrv-custom-element-base';
import { App } from './mrv-app';
import { First } from './first-component';

export const components = [
  { selector: 'mrv-app', class: App },
  { selector: 'first-elem', class: First },
];

export const componentDictionary = components.reduce((prev, curr) => ({...prev, [curr.selector]: curr}), {});

components.forEach(c => customElements.define(c.selector, c.class));

export * from './mrv-app';
export * from './first-component';