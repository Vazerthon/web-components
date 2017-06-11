import { App } from './mrv-app';
import { First } from './first-component';

export const components = [
  { selector: 'mrv-app', class: App },
  { selector: 'mrv-first', class: First },
];

// TODO: get webpack to understand ES7 and replace Object.assign with object spread
export const componentDictionary = components.reduce((prev, curr) => Object.assign({}, prev, { [curr.selector]: curr }), {});

components.forEach(c => customElements.define(c.selector, c.class));

export * from './mrv-app';
export * from './first-component';