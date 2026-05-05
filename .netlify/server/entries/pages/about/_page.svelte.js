import "../../../chunks/dev.js";
import { n as Awards, r as About, t as Publications } from "../../../chunks/publications.js";
//#region src/routes/about/+page.svelte
function _page($$renderer) {
	$$renderer.push(`<div id="about" class="flex svelte-cwls5q"><span id="info" class="svelte-cwls5q">`);
	About($$renderer, {});
	$$renderer.push(`<!----></span> <span id="accolades" class="svelte-cwls5q">`);
	Awards($$renderer, {});
	$$renderer.push(`<!----> `);
	Publications($$renderer, {});
	$$renderer.push(`<!----></span></div>`);
}
//#endregion
export { _page as default };
