import { c as create_ssr_component, e as escape, v as validate_component, f as add_attribute } from "../../../chunks/ssr.js";
/* empty css                     */
import { A as Auth } from "../../../chunks/Auth.js";
import { N as Navigation } from "../../../chunks/Navigation.js";
import "../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let webAppAuthComponent, webAppTitleState = "QuiteLean", currentUserInformation, competitiveUserInformation, userAuthState, signUp, signIn, authErrorState, sendVerificationEmail, saveChangesOnSettings, instField;
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
        sendVerificationEmail,
        saveChangesOnSettings,
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
        sendVerificationEmail: ($$value) => {
          sendVerificationEmail = $$value;
          $$settled = false;
        },
        saveChangesOnSettings: ($$value) => {
          saveChangesOnSettings = $$value;
          $$settled = false;
        },
        competitiveUserInformation: ($$value) => {
          competitiveUserInformation = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${userAuthState != void 0 ? `${!userAuthState ? `<p data-svelte-h="svelte-1pjhrpq">Hey, you&#39;re not supposed to be here!</p>` : `${validate_component(Navigation, "Navigation").$$render(
      $$result,
      {
        displayname: currentUserInformation.displayName
      },
      {},
      {}
    )} <div class="container text-center text-wrap p-5 w-75">${!currentUserInformation.emailVerified ? `<h1 data-svelte-h="svelte-171lafx">Settings</h1> <img${add_attribute("src", "/exclamation-lg.svg", 0)} alt="Exclamation point" style="height:200px;width:200px"> <h3 data-svelte-h="svelte-1uyq26x">Your email isn&#39;t verified!</h3> <p data-svelte-h="svelte-m0mxr7">You won&#39;t be able to make any changes to your
                            account until you verify your email.</p> <p>If you don&#39;t see an email from us, look in your junk
                            folder, or click the button below. If you mistakenly
                            signed up with a wrong email, <a href="mailto:quitelean@gmail.com" data-svelte-h="svelte-xcokfz">contact us</a>.</p> <button class="btn btn-sm text-primary" style="background-transparency:100%" data-svelte-h="svelte-1hncpxi">Send me a verification email</button>` : `<h1 data-svelte-h="svelte-171lafx">Settings</h1> <p class="text-wrap">UID: ${escape(currentUserInformation.uid)}</p> <div class="input-group mb-3"><span class="input-group-text" id="username-addon" data-svelte-h="svelte-yboc7i">@</span> <input type="text" class="form-control"${add_attribute("placeholder", currentUserInformation.displayName, 0)}${add_attribute("aria-label", currentUserInformation.displayName, 0)} aria-describedby="username-addon" disabled></div> <div class="input-group mb-3"><input type="text" class="form-control" placeholder="Institution" aria-label="Institution"${add_attribute("value", instField, 0)}></div> <button class="btn btn-primary" data-svelte-h="svelte-8r1gub">Save changes</button>`}</div>`}` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
