import { U as attr, W as escape_html, d as stringify, n as attr_class, o as ensure_array_like } from "./dev.js";
import { t as description } from "./config.js";
import { n as Awards, r as About, t as Publications } from "./publications.js";
import { t as projects } from "./projects.js";
//#region src/lib/projects.svelte
function Projects($$renderer) {
	$$renderer.push(`<div id="projects" class="svelte-1db4i9t"><h6 class="svelte-1db4i9t">Projects</h6> <!--[-->`);
	const each_array = ensure_array_like(projects);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let { title, slug } = each_array[$$index];
		$$renderer.push(`<a${attr("href", `/projects/${stringify(slug)}`)} data-sveltekit-noscroll=""${attr_class(`${stringify(slug)} row`, "svelte-1db4i9t")}>${escape_html(title)}</a>`);
	}
	$$renderer.push(`<!--]--></div>`);
}
//#endregion
//#region src/lib/headerMobile.svelte
function HeaderMobile($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let images = { selected: false };
		$$renderer.push(`<header class="svelte-kogyws"><button class="svelte-kogyws"><h1 class="svelte-kogyws">${escape_html(description)}</h1> <img src="/miji.svg" alt="Mi-Ji logo" class="svelte-kogyws"/></button></header> `);
		if (images.selected) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="dropdown svelte-kogyws">`);
			About($$renderer, {});
			$$renderer.push(`<!----> <br/> <address>Office MI—JI<br/> Suite 01/156 George St <br/> Fitzroy 3065</address> <br/> <a href="mailto:office@mi-ji.com.au">office@mi-ji.com.au</a><br/> <a data-sveltekit-noscroll="" href="https://instagram.com/office_mi.ji" target="none">Instagram</a><br/> `);
			Projects($$renderer, {});
			$$renderer.push(`<!----> `);
			Awards($$renderer, {});
			$$renderer.push(`<!----> `);
			Publications($$renderer, {});
			$$renderer.push(`<!----></div> <button id="exit" class="svelte-kogyws">Back</button>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
export { HeaderMobile as t };
