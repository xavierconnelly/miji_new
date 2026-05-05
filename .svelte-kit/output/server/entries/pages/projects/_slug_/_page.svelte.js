import { U as attr, W as escape_html, d as stringify, ft as invalid_default_snippet, i as bind_props, n as attr_class, o as ensure_array_like, p as html } from "../../../../chunks/dev.js";
import { t as MediaQuery } from "../../../../chunks/MediaQuery.js";
import { t as HeaderMobile } from "../../../../chunks/headerMobile.js";
//#region src/routes/projects/[slug]/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let data = $$props["data"];
		MediaQuery($$renderer, {
			query: "(max-width: 800px)",
			children: invalid_default_snippet,
			$$slots: { default: ($$renderer, { matches }) => {
				if (matches) {
					$$renderer.push("<!--[0-->");
					HeaderMobile($$renderer, {});
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]-->`);
			} }
		});
		$$renderer.push(`<!----> <article${attr_class(data.project.colour, "svelte-gygcht")}>`);
		MediaQuery($$renderer, {
			query: "(min-width: 800px)",
			children: invalid_default_snippet,
			$$slots: { default: ($$renderer, { matches }) => {
				if (matches) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<a href="/"${attr_class(`${stringify(data.project.colour)} ${stringify(data.project.slug)}`, "svelte-gygcht")} data-sveltekit-noscroll="" id="display"><!--[-->`);
					const each_array = ensure_array_like(data.project.images);
					for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
						let i = each_array[$$index];
						$$renderer.push(`<img${attr("src", `../images/${stringify(data.project.slug)}/${stringify(i)}_800.webp`)}${attr("alt", `${stringify(data.project.title)} project`)} loading="lazy" class="svelte-gygcht"/>`);
					}
					$$renderer.push(`<!--]--> <!--[-->`);
					const each_array_1 = ensure_array_like(data.project.plans);
					for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
						let i = each_array_1[$$index_1];
						$$renderer.push(`<img class="plan svelte-gygcht"${attr("src", `../images/${stringify(data.project.slug)}/Plan_${stringify(i)}_800.svg`)} loading="lazy"${attr("alt", data.project.title)}/>`);
					}
					$$renderer.push(`<!--]--></a>`);
				} else {
					$$renderer.push("<!--[-1-->");
					$$renderer.push(`<span${attr_class(`${stringify(data.project.colour)} ${stringify(data.project.slug)}`, "svelte-gygcht")} id="display"><!--[-->`);
					const each_array_2 = ensure_array_like(data.project.images);
					for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
						let i = each_array_2[$$index_2];
						$$renderer.push(`<img${attr("src", `../images/${stringify(data.project.slug)}/${stringify(i)}_400.webp`)} loading="lazy"${attr("alt", `${stringify(data.project.title)} project`)} width="800" height="1200" class="svelte-gygcht"/>`);
					}
					$$renderer.push(`<!--]--> <!--[-->`);
					const each_array_3 = ensure_array_like(data.project.plans);
					for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
						let i = each_array_3[$$index_3];
						$$renderer.push(`<img class="plan svelte-gygcht"${attr("src", `../images/${stringify(data.project.slug)}/Plan_${stringify(i)}_800.svg`)} loading="lazy"${attr("alt", data.project.title)}/>`);
					}
					$$renderer.push(`<!--]--></span>`);
				}
				$$renderer.push(`<!--]-->`);
			} }
		});
		$$renderer.push(`<!----> <div class="buttons svelte-gygcht"><a${attr("href", `/projects/${stringify(data.project.prev)}`)} data-sveltekit-scroll="" class="svelte-gygcht"><img id="prev" class="arrow svelte-gygcht"${attr("src", `/prev/${stringify(data.project.colour)}.svg`)} alt="prev button"/></a> <a${attr("href", `/projects/${stringify(data.project.next)}`)} data-sveltekit-scroll="" class="svelte-gygcht"><img id="next" class="arrow svelte-gygcht"${attr("src", `/next/${stringify(data.project.colour)}.svg`)} alt="next button"/></a></div> <span${attr_class(`${stringify(data.project.colour)} sun`, "svelte-gygcht")}><h2 class="svelte-gygcht">${escape_html(data.project.title)}</h2>  -  <p class="svelte-gygcht">${html(data.project.content)}</p></span></article> <a data-sveltekit-noscroll="" class="white svelte-gygcht" href="/" style="background: white; height: calc(100% - 110px); width: 60%; z-index: -5; opacity: 0.8; transition: all 2s ease 0s; position: fixed; top: 30px; left: 0;"></a>`);
		bind_props($$props, { data });
	});
}
//#endregion
export { _page as default };
