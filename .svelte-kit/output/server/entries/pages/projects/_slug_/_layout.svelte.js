import { c as slot, i as bind_props } from "../../../../chunks/dev.js";
//#region src/routes/projects/[slug]/+layout.svelte
function _layout($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let data = $$props["data"];
		$$renderer.push(`<!---->`);
		$$renderer.push(`<div id="noscroll" class="svelte-1124ylg"><!--[-->`);
		slot($$renderer, $$props, "default", {}, null);
		$$renderer.push(`<!--]--></div>`);
		$$renderer.push(`<!---->`);
		bind_props($$props, { data });
	});
}
//#endregion
export { _layout as default };
