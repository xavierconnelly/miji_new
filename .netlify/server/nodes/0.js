import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.Bd2PA7su.js","_app/immutable/chunks/D0P9d-rd.js","_app/immutable/chunks/CsaauQz1.js","_app/immutable/chunks/CdWLeytH.js","_app/immutable/chunks/C3ZDuYOR.js","_app/immutable/chunks/fA0jnMtZ.js","_app/immutable/chunks/DeGU7g33.js","_app/immutable/chunks/_AccMhnp.js"];
export const stylesheets = ["_app/immutable/assets/0.cKgPHRfB.css","_app/immutable/assets/app.BVMi5TUS.css"];
export const fonts = [];
