import { c as create_ssr_component, e as escape, v as validate_component, f as add_attribute } from "../../chunks/ssr.js";
/* empty css                  */
import { A as Auth } from "../../chunks/Auth.js";
import { N as Navigation } from "../../chunks/Navigation.js";
import "../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let webAppAuthComponent, webAppTitleState = "QuiteLean", currentUserInformation, competitiveUserInformation, userAuthState, signUp, signIn, authErrorState;
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
    )} ${userAuthState != void 0 ? `${!userAuthState ? `<div class="container position-absolute top-50 start-50 translate-middle d-flex justify-content-center text-center"><div><img${add_attribute("src", "/icon.png", 0)} alt="QuiteLean Icon" style="width:200px;height:200px;"> <h1 data-svelte-h="svelte-1xjaoys">QuiteLean</h1> <p class="subtext">Learning proofs asynchronously using <a href="https://en.wikipedia.org/wiki/Lean_(proof_assistant)" data-svelte-h="svelte-1lsasbs">Lean</a></p> <div class="container vstack gap-3"><button class="btn btn-primary btn-md rounded-pill" data-svelte-h="svelte-1myu7ln">Create an account</button> <button class="btn btn-secondary btn-md rounded-pill" data-svelte-h="svelte-4etc01">Sign in</button></div></div></div> <div class="container position-absolute bottom-0 start-50 translate-middle text-center"><button class="btn" style="background-color:transparent;" data-bs-toggle="modal" data-bs-target="#aboutModal" data-svelte-h="svelte-f50ha4">About</button> <button class="btn" style="background-color:transparent;" data-bs-toggle="modal" data-bs-target="#contactModal" data-svelte-h="svelte-1yiki3k">Contact</button></div> <div class="modal fade" id="contactModal" tabindex="-1" aria-labelledby="contactModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h1 class="modal-title fs-5" id="contactModalLabel" data-svelte-h="svelte-hm0ml1">Contact</h1> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div> <div class="modal-body"><p>My discord is letluvwin, and my email is <a href="mailto:quitelean@gmail.com" data-svelte-h="svelte-1j6y40w">quitelean@gmail.com</a>.</p></div> <div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal" data-svelte-h="svelte-js4i60">Close</button></div></div></div></div> <div class="modal fade" id="aboutModal" tabindex="-1" aria-labelledby="aboutModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h1 class="modal-title fs-5" id="aboutModalLabel" data-svelte-h="svelte-49s00x">About</h1> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div> <div class="modal-body"><p>Learning math proofs is <i data-svelte-h="svelte-12zqjqn">hard</i>— especially
                                when you have no one to check them. The way I
                                learned was through crunching dozens of problem
                                sets until I was confident that I understood the
                                proof technique fairly well, but that also
                                required hunting for answers, asking my
                                professors (often to the point that I would
                                annoy them!) for clarification, so I thought of
                                creating a website like Kattis or LeetCode, but
                                for verifying proofs using the
                                <a href="https://en.wikipedia.org/wiki/Lean_(proof_assistant" data-svelte-h="svelte-1wokken">Lean proof assistant</a> instead.</p> <p data-svelte-h="svelte-p9pw52">As a consequence, this website exists! Right now
                                it&#39;s pretty bare-bones, but I think it can be
                                helpful to some even now.</p></div> <div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal" data-svelte-h="svelte-js4i60">Close</button></div></div></div></div>` : `${validate_component(Navigation, "Navigation").$$render(
      $$result,
      {
        displayname: currentUserInformation.displayName
      },
      {},
      {}
    )} <div class="container text-center p-5"><h1>Welcome, ${escape(currentUserInformation.displayName)}!</h1> <p>At the moment, your elo is ${escape(competitiveUserInformation.elo)}.</p></div>`}` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
