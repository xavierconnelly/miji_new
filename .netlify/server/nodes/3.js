import * as universal from '../entries/pages/projects/_layout.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/projects/+layout.js";
export const imports = ["_app/immutable/nodes/3.bSMh1XSE.js","_app/immutable/chunks/D0P9d-rd.js","_app/immutable/chunks/CsaauQz1.js"];
export const stylesheets = [];
export const fonts = [];
