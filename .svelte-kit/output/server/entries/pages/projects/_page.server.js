import { t as projects } from "../../../chunks/projects.js";
//#region src/routes/projects/+page.server.js
function load() {
	return { banana: projects.map((project) => ({
		slug: project.slug,
		title: project.title,
		colour: project.colour,
		hex: project.hex,
		prev: project.prev,
		next: project.next,
		images: project.images
	})) };
}
//#endregion
export { load };
