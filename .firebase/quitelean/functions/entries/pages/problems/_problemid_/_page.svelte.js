import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../chunks/ssr.js";
import { getApps, initializeApp, getApp } from "firebase/app";
import { getDatabase, get, child, ref } from "firebase/database";
import "../../../../chunks/stores.js";
import { A as Auth } from "../../../../chunks/Auth.js";
import { N as Navigation } from "../../../../chunks/Navigation.js";
const css = {
  code: "textarea.s-d-Q7x67n5C7P{font-family:monospace}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let webAppAuthComponent, webAppTitleState = "QuiteLean", currentUserInformation, competitiveUserInformation, userAuthState, signUp, signIn, authErrorState;
  const firebaseConfig = {
    apiKey: "AIzaSyCpZKwjZq81wfNVPC2K6PqbGEL1hnP65HY",
    authDomain: "quitelean.firebaseapp.com",
    projectId: "quitelean",
    storageBucket: "quitelean.appspot.com",
    messagingSenderId: "434611625957",
    appId: "1:434611625957:web:fbea8cbf3b58525ac6190c",
    measurementId: "G-FPX0STF405"
  };
  let firebaseApp;
  if (getApps().length === 0) {
    firebaseApp = initializeApp(firebaseConfig);
  } else {
    firebaseApp = getApp();
  }
  const database = getDatabase(firebaseApp);
  let { data } = $$props;
  let pid = data.information.title;
  let statement = "";
  let title = "";
  let rating = 0;
  get(child(ref(database), `/problems/`)).then((snapshot) => {
    if (snapshot.exists()) {
      if (snapshot.val()[pid] !== "undefined") {
        let meat = snapshot.val()[pid];
        if (meat != void 0) {
          statement = meat.statement;
          title = meat.title;
          rating = meat.rating;
        }
      }
    }
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-f8f31j_START -->${$$result.title = `<title>${escape(webAppTitleState)}</title>`, ""}<!-- HEAD_svelte-f8f31j_END -->`, ""} ${validate_component(Auth, "Auth").$$render(
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
    )} ${userAuthState != void 0 ? `${userAuthState == true ? `<div class="container"><div class="row p-5"><div class="col-md"><h3 class="text-center"><strong><!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END --></strong></h3> <p class="bg-success text-center rounded-pill">Rating: ${escape(rating)}</p> <hr> <p><!-- HTML_TAG_START -->${statement}<!-- HTML_TAG_END --></p></div> <div class="col-md text-center"><div class="mb-3"><textarea class="form-control s-d-Q7x67n5C7P" spellcheck="false" autocapitalize="false" autocorrect="false" rows="15"></textarea></div> <button class="btn btn-primary rounded-pill" data-svelte-h="svelte-2ig6ph">Submit</button></div></div></div> ${validate_component(Navigation, "Navigation").$$render(
      $$result,
      {
        displayname: currentUserInformation.displayName
      },
      {},
      {}
    )}` : ``}` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
