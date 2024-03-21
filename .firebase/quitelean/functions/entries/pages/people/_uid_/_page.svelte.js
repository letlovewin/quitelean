import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../chunks/ssr.js";
import { getApps, initializeApp, getApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";
import "../../../../chunks/stores.js";
import { A as Auth } from "../../../../chunks/Auth.js";
import { N as Navigation } from "../../../../chunks/Navigation.js";
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
  let display = "";
  let institution = "";
  let rating = 0;
  onValue(ref(database, `/usernames/${pid}`), (uidSnapshot) => {
    if (uidSnapshot.exists()) {
      onValue(ref(database, `/users/${uidSnapshot.val().uid}`), (trueUserData) => {
        display = trueUserData.val().username;
        institution = trueUserData.val().institution;
        if (institution == void 0) {
          institution = "No institution";
        }
        rating = trueUserData.val().elo;
      });
    }
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
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
    )} ${userAuthState != void 0 ? `${userAuthState == true ? `<div class="container p-5 w-75"><div class="col-md"><h3 class="text-center"><strong><!-- HTML_TAG_START -->${display}<!-- HTML_TAG_END --></strong></h3> <p class="subtext text-center">${escape(institution)}</p> <p class="text-center text-success">Rating: ${escape(rating)}</p></div></div> ${validate_component(Navigation, "Navigation").$$render(
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
