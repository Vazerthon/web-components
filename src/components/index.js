import { First } from './first-component';

export const components = [
  { selector: 'first-elem', class: First },
];

components.forEach(c => customElements.define(c.selector, c.class));

export * from './first-component';