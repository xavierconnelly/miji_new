import * as server from '../entries/pages/projects/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/projects/+page.server.js";
export const imports = ["_app/immutable/nodes/7.DaBQ48CI.js","_app/immutable/chunks/D0P9d-rd.js","_app/immutable/chunks/CsaauQz1.js","_app/immutable/chunks/CdWLeytH.js"];
export const stylesheets = ["_app/immutable/assets/7.DSyvYNaa.css"];
export const fonts = [];
