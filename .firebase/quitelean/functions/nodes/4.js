import * as universal from '../entries/pages/people/_uid_/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/people/_uid_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/people/[uid]/+page.js";
export const imports = ["_app/immutable/nodes/4.D9oc5QkY.js","_app/immutable/chunks/Auth.CWM5Zy4n.js","_app/immutable/chunks/scheduler.DF9ji6Nx.js","_app/immutable/chunks/index.BRiiciFl.js","_app/immutable/chunks/stores.CgtYdNni.js","_app/immutable/chunks/entry.C2CCjbPb.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/Navigation.CEflH4hG.js"];
export const stylesheets = ["_app/immutable/assets/Navigation.CI_Y18Wf.css"];
export const fonts = [];
