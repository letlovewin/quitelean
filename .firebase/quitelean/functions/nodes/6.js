import * as universal from '../entries/pages/problems/_problemid_/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/problems/_problemid_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/problems/[problemid]/+page.js";
export const imports = ["_app/immutable/nodes/6.DsR1KcgO.js","_app/immutable/chunks/Auth.CWM5Zy4n.js","_app/immutable/chunks/scheduler.DF9ji6Nx.js","_app/immutable/chunks/index.BRiiciFl.js","_app/immutable/chunks/stores.CgtYdNni.js","_app/immutable/chunks/entry.C2CCjbPb.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/Navigation.CEflH4hG.js"];
export const stylesheets = ["_app/immutable/assets/6.CHNe7w4E.css","_app/immutable/assets/Navigation.CI_Y18Wf.css"];
export const fonts = [];
