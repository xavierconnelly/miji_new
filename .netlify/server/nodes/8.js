import * as server from '../entries/pages/projects/_slug_/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/projects/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/8.BhaSq1Uc.js","_app/immutable/chunks/D0P9d-rd.js","_app/immutable/chunks/CsaauQz1.js","_app/immutable/chunks/CdWLeytH.js","_app/immutable/chunks/DeGU7g33.js","_app/immutable/chunks/Dn-P_2Wz.js","_app/immutable/chunks/p2PRssaF.js","_app/immutable/chunks/_AccMhnp.js"];
export const stylesheets = ["_app/immutable/assets/publications.D6r7ugxV.css","_app/immutable/assets/headerMobile.CFOqrQGe.css","_app/immutable/assets/8.BkQqkB6O.css"];
export const fonts = [];
