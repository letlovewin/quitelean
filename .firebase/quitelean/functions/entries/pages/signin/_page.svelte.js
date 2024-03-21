import { c as create_ssr_component, e as escape, v as validate_component, f as add_attribute } from "../../../chunks/ssr.js";
import "../../../chunks/stores.js";
import { A as Auth } from "../../../chunks/Auth.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let webAppAuthComponent, webAppTitleState = "QuiteLean", currentUserInformation, competitiveUserInformation, userAuthState, signUp, signIn, authErrorState;
  let emailInputField, passwordInputField;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `  ${$$result.head += `<!-- HEAD_svelte-f8f31j_START -->${$$result.title = `<title>${escape(webAppTitleState)}</title>`, ""}<!-- HEAD_svelte-f8f31j_END -->`, ""} ${validate_component(Auth, "Auth").$$render(
      $$result,
      {
        this: webAppAuthComponent,
        currentUserInformation,
        userAuthState,
        signUp,
        signIn,
        authErrorState,
        competitiveUserInformation
      },
      {
        this: ($$value) => {
          webAppAuthComponent = $$value;
          $$settled = false;
        },
        currentUserInformation: ($$value) => {
          currentUserInformation = $$value;
          $$settled = false;
        },
        userAuthState: ($$value) => {
          userAuthState = $$value;
          $$settled = false;
        },
        signUp: ($$value) => {
          signUp = $$value;
          $$settled = false;
        },
        signIn: ($$value) => {
          signIn = $$value;
          $$settled = false;
        },
        authErrorState: ($$value) => {
          authErrorState = $$value;
          $$settled = false;
        },
        competitiveUserInformation: ($$value) => {
          competitiveUserInformation = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${userAuthState == false ? `<div class="container position-absolute top-50 start-50 translate-middle d-flex justify-content-center text-center"><div><img${add_attribute("src", "/icon.png", 0)} alt="..." style="width:150px;height:150px;"> <h3 data-svelte-h="svelte-f32bla">Sign in</h3> <div class="container vstack"><div class="input-group mb-3"><input type="text" class="form-control" placeholder="Email" aria-label="Email"${add_attribute("this", emailInputField, 0)}></div> <div class="input-group mb-3"><input type="password" class="form-control" placeholder="Password" aria-label="Password"${add_attribute("this", passwordInputField, 0)}></div> </div> <button class="btn btn-primary rounded-pill" data-svelte-h="svelte-iygi6y">Sign in</button> <p class="error my-2">${escape(authErrorState)}</p></div></div> <button class="btn btn-outline-secondary rounded-circle position-absolute top-0 start-0 m-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="32" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"></path></svg></button>` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
