import { U as attr, W as escape_html, d as stringify, i as bind_props, o as ensure_array_like } from "../../../chunks/dev.js";
//#region src/routes/projects/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let data = $$props["data"];
		$$renderer.push(`<div id="projects" class="svelte-rqn88j"><h6 class="svelte-rqn88j">Projects</h6> <div><!--[-->`);
		const each_array = ensure_array_like(data.banana);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let { slug, title } = each_array[$$index];
			$$renderer.push(`<a${attr("href", `/projects/${stringify(slug)}`)} data-sveltekit-noscroll="" class="svelte-rqn88j">${escape_html(title)}</a><br/>`);
		}
		$$renderer.push(`<!--]--></div></div>`);
		bind_props($$props, { data });
	});
}
//#endregion
export { _page as default };
