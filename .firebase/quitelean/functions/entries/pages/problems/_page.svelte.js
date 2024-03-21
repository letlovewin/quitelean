import { c as create_ssr_component, e as escape, f as add_attribute, v as validate_component, i as is_promise, n as noop } from "../../../chunks/ssr.js";
/* empty css                     */
import { A as Auth } from "../../../chunks/Auth.js";
import { N as Navigation } from "../../../chunks/Navigation.js";
import { getApps, initializeApp, getApp } from "firebase/app";
import { getDatabase, get, child, ref } from "firebase/database";
import "../../../chunks/stores.js";
const ProblemRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { rating, title, link } = $$props;
  if ($$props.rating === void 0 && $$bindings.rating && rating !== void 0)
    $$bindings.rating(rating);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  return `<div class="row mt-3"><div class="col-1"><p class="bg-success rounded-pill">${escape(rating)}</p></div> <div class="col-4 text-start"><p><a${add_attribute("href", link, 0)}>${escape(title)}</a></p></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let webAppAuthComponent, webAppTitleState = "QuiteLean", currentUserInformation, competitiveUserInformation, userAuthState, signUp, signIn, authErrorState, problemSpace;
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
  let problemset;
  get(child(ref(database), `/problems/`)).then((snapshot) => {
    if (snapshot.exists()) {
      for (const [key, value] of Object.entries(snapshot.val())) {
        new ProblemRow({
          target: problemSpace,
          props: {
            rating: value.rating,
            title: value.title,
            link: `/problems/${key}`
          }
        });
      }
    }
  });
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
    )} ${userAuthState != void 0 ? `${!userAuthState ? `<p data-svelte-h="svelte-1pjhrpq">Hey, you&#39;re not supposed to be here!</p>` : `${validate_component(Navigation, "Navigation").$$render(
      $$result,
      {
        displayname: currentUserInformation.displayName
      },
      {},
      {}
    )} <div class="container text-center p-5 w-75"><h1 data-svelte-h="svelte-1lbot90">Problems</h1> <p>New problems are added ad hoc. If you want a problem to
                        be on here, email me at <a href="mailto:quitelean@gmail.com" data-svelte-h="svelte-14krwf4">quitelean@gmail.com</a>.</p> ${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ``;
      }
      return function() {
        return ` <div class="container border"${add_attribute("this", problemSpace, 0)}></div> `;
      }();
    }(problemset)}</div>`}` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
