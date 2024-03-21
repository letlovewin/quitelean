import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: "@import './global.css';",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
