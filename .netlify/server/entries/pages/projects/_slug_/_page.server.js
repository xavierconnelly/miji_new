import { t as projects } from "../../../../chunks/projects.js";
import { error } from "@sveltejs/kit";
//#region src/routes/projects/[slug]/+page.server.js
function load({ params }) {
	const project = projects.find((project) => project.slug === params.slug);
	if (!project) throw error(404);
	return { project };
}
//#endregion
export { load };
