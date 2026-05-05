import "./index-server.js";
import { c as slot, i as bind_props } from "./dev.js";
//#region src/lib/MediaQuery.svelte
function MediaQuery($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let query = $$props["query"];
		let matches = false;
		$$renderer.push(`<!--[-->`);
		slot($$renderer, $$props, "default", { matches }, null);
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { query });
	});
}
//#endregion
export { MediaQuery as t };
