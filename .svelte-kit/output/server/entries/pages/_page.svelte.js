import { ft as invalid_default_snippet } from "../../chunks/dev.js";
import { t as MediaQuery } from "../../chunks/MediaQuery.js";
/* empty css               */
import { t as HeaderMobile } from "../../chunks/headerMobile.js";
//#region src/routes/+page.svelte
function _page($$renderer) {
	MediaQuery($$renderer, {
		query: "(max-width: 800px)",
		children: invalid_default_snippet,
		$$slots: { default: ($$renderer, { matches }) => {
			if (matches) {
				$$renderer.push("<!--[0-->");
				HeaderMobile($$renderer, {});
				$$renderer.push(`<!----> <article class="svelte-1uha8ag"><span class="red ALightAddition svelte-1uha8ag" id="display"><img src="../images/ALightAddition/01_400.webp" loading="lazy" alt="An image of an old house with a renovation, front view" width="800" height="1150" class="svelte-1uha8ag"/> <img src="../images/ALightAddition/02_400.webp" loading="lazy" alt="An image of an old house with a renovation, front view" width="800" height="1200" class="svelte-1uha8ag"/> <img src="../images/ALightAddition/03_400.webp" loading="lazy" alt="An image of an old house with a renovation, front view" width="800" height="533" class="svelte-1uha8ag"/> <img src="../images/ALightAddition/04_400.webp" loading="lazy" alt="An image of an old house with a renovation, front view" width="800" height="1200" class="svelte-1uha8ag"/> <img src="../images/ALightAddition/05_400.webp" loading="lazy" alt="An image of an old house with a renovation, front view" width="800" height="1200" class="svelte-1uha8ag"/> <img class="plan svelte-1uha8ag" src="../images/ALightAddition/Plan_01_800.svg" alt="ALightAddition" loading="lazy"/> <img class="plan svelte-1uha8ag" src="../images/ALightAddition/Plan_02_800.svg" alt="ALightAddition" loading="lazy"/> <img class="plan svelte-1uha8ag" src="../images/ALightAddition/Plan_03_800.svg" alt="ALightAddition" loading="lazy"/> <div class="buttons ALightAddition svelte-1uha8ag"><a href="/projects/TokyoTina" data-sveltekit-scroll=""><img id="prev" class="arrow svelte-1uha8ag" src="/prev/red.svg" alt="prev button"/></a> <a href="/projects/ACourtyardHouse" data-sveltekit-scroll=""><img id="next" class="arrow svelte-1uha8ag" src="/next/red.svg" alt="prev button"/></a></div></span> <div class="red sun svelte-1uha8ag">A Light Addition  -  Bunurong Country | St Kilda East, Australia 2024</div></article>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]-->`);
		} }
	});
}
//#endregion
export { _page as default };
