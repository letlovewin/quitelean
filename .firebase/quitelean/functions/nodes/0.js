

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BOAywgV4.js","_app/immutable/chunks/scheduler.DF9ji6Nx.js","_app/immutable/chunks/index.BRiiciFl.js"];
export const stylesheets = ["_app/immutable/assets/global.BIG2jM-d.css"];
export const fonts = [];
