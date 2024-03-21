import { c as create_ssr_component, f as add_attribute } from "./ssr.js";
import { getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "./stores.js";
const css = {
  code: "@media only screen and (max-width: 600px){#desktop-navbar.s-oJqktDhFOa2K{display:none}#mobile-navbar.s-oJqktDhFOa2K{display:block}}@media only screen and (min-width: 601px){#desktop-navbar.s-oJqktDhFOa2K{display:block}#mobile-navbar.s-oJqktDhFOa2K{display:none}}",
  map: null
};
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const app = getApp();
  getAuth(app);
  let { displayname } = $$props;
  if ($$props.displayname === void 0 && $$bindings.displayname && displayname !== void 0)
    $$bindings.displayname(displayname);
  $$result.css.add(css);
  return `<div class="position-fixed vstack gap-3 border-end top-0 h-100 z-3 navbar-color text-center s-oJqktDhFOa2K" style="width:100px;" id="desktop-navbar"><input type="image"${add_attribute("src", "/icon.png", 0)} alt="The QuiteLean Icon" style="width:50px;height:50px" class="mt-2"> <p class="subsubtext" data-svelte-h="svelte-vno2cc">QuiteLean</p> <br> <button class="btn" style="background-transparency:100%" data-svelte-h="svelte-19v1xno">Profile</button> <button class="btn" style="background-transparency:100%" data-svelte-h="svelte-1u3i7vh">Problems</button> <div class="btn-group dropend position-absolute bottom-0 start-50 translate-middle-x"><input type="image"${add_attribute("src", "/list.svg", 0)} style="width:35px;height:35px" alt="Menu icon" class="mb-3" data-bs-toggle="dropdown" aria-expanded="false"> <ul class="dropdown-menu"><li><button class="btn btn-sm" data-svelte-h="svelte-1hb18lp">Settings</button></li> <li><button class="btn btn-sm" data-svelte-h="svelte-r188sr">Sign out</button></li></ul></div></div> <div class="container position-fixed bottom-0 border-top w-100 z-3 navbar-color s-oJqktDhFOa2K" style="height:70px;" id="mobile-navbar"><div class="hstack gap-3"><input type="image"${add_attribute("src", "/icon.png", 0)} alt="QuiteLean Symbol" style="width:60px;height:60px;" class="ms-1 my-auto"></div> <div class="dropup-center dropup position-absolute mb-1 bottom-0 end-0"><input type="image"${add_attribute("src", "/list.svg", 0)} alt="Menu icon" class="me-2" style="margin-top:10px;height:45px;width:45px;" data-bs-toggle="dropdown" aria-expanded="false"> <ul class="dropdown-menu"><li><button class="btn btn-sm" data-svelte-h="svelte-11i35iu">Profile</button></li> <li><button class="btn btn-sm" data-svelte-h="svelte-12iambf">Problems</button></li> <li><button class="btn btn-sm" data-svelte-h="svelte-1hb18lp">Settings</button></li> <li><button class="btn btn-sm" data-svelte-h="svelte-r188sr">Sign out</button></li></ul></div> </div>`;
});
export {
  Navigation as N
};
