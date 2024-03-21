

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/problems/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.2stZhVJr.js","_app/immutable/chunks/scheduler.DF9ji6Nx.js","_app/immutable/chunks/index.BRiiciFl.js","_app/immutable/chunks/Auth.CWM5Zy4n.js","_app/immutable/chunks/stores.CgtYdNni.js","_app/immutable/chunks/entry.C2CCjbPb.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/Navigation.CEflH4hG.js"];
export const stylesheets = ["_app/immutable/assets/global.BIG2jM-d.css","_app/immutable/assets/Navigation.CI_Y18Wf.css"];
export const fonts = [];
