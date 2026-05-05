import { init } from '../serverless.js';

export default init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","ANDALEMO.woff","close/black.svg","close/green.svg","close/grey.svg","close/pink.svg","close/pistachio.svg","close/red.svg","close/yellow.svg","favicon.ico","images/.DS_Store","images/ABHouse/01_400.webp","images/ABHouse/01_400_blur.webp","images/ABHouse/01_800.webp","images/ABHouse/01_800_blur.webp","images/ABHouse/02_400.webp","images/ABHouse/02_800.webp","images/ABHouse/03_400.webp","images/ABHouse/03_800.webp","images/ABHouse/04_400.webp","images/ABHouse/04_800.webp","images/ABHouse/05_400.webp","images/ABHouse/05_800.webp","images/ABHouse/06_400.webp","images/ABHouse/06_800.webp","images/ABHouse/07_400.webp","images/ABHouse/07_800.webp","images/ABHouse/08_400.webp","images/ABHouse/08_800.webp","images/ABHouse/09_400.webp","images/ABHouse/09_800.webp","images/ABHouse/10_400.webp","images/ABHouse/10_800.webp","images/ABHouse/11_400.webp","images/ABHouse/11_800.webp","images/ABHouse/12_400.webp","images/ABHouse/12_800.webp","images/ABHouse/13_400.webp","images/ABHouse/13_800.webp","images/ABHouse/14_400.webp","images/ABHouse/14_800.webp","images/ABHouse/15_400.webp","images/ABHouse/15_800.webp","images/ABHouse/Plan_01_800.svg","images/ABHouse/Plan_02_800.svg","images/ACertainKindofLife/01_400.webp","images/ACertainKindofLife/01_400_blur.webp","images/ACertainKindofLife/01_800.webp","images/ACertainKindofLife/01_800_blur.webp","images/ACertainKindofLife/02_400.webp","images/ACertainKindofLife/02_800.webp","images/ACertainKindofLife/03_400.webp","images/ACertainKindofLife/03_800.webp","images/ACertainKindofLife/04_400.webp","images/ACertainKindofLife/04_800.webp","images/ACertainKindofLife/05_400.webp","images/ACertainKindofLife/05_800.webp","images/ACertainKindofLife/06_400.webp","images/ACertainKindofLife/06_800.webp","images/ACertainKindofLife/Plan_01_800.svg","images/ACertainKindofLife/Plan_02_800.svg","images/ACourtyardHouse/.DS_Store","images/ACourtyardHouse/01_400.webp","images/ACourtyardHouse/01_400_blur.webp","images/ACourtyardHouse/01_800.webp","images/ACourtyardHouse/01_800_blur.webp","images/ACourtyardHouse/02_400.webp","images/ACourtyardHouse/02_800.webp","images/ACourtyardHouse/03_400.webp","images/ACourtyardHouse/03_800.webp","images/ACourtyardHouse/04_400.webp","images/ACourtyardHouse/04_800.webp","images/ACourtyardHouse/05_400.webp","images/ACourtyardHouse/05_800.webp","images/ACourtyardHouse/06_400.webp","images/ACourtyardHouse/06_800.webp","images/ACourtyardHouse/07_400.webp","images/ACourtyardHouse/07_800.webp","images/ACourtyardHouse/Plan_01_800.svg","images/ACourtyardHouse/Plan_02_800.svg","images/AHouseForOne/01_400.webp","images/AHouseForOne/01_400_blur.webp","images/AHouseForOne/01_800.webp","images/AHouseForOne/01_800_blur.webp","images/AHouseForOne/02_400.webp","images/AHouseForOne/02_800.webp","images/AHouseForOne/03_400.webp","images/AHouseForOne/03_800.webp","images/AHouseForOne/04_400.webp","images/AHouseForOne/04_800.webp","images/AHouseForOne/05_400.webp","images/AHouseForOne/05_800.webp","images/AHouseForOne/06_400.webp","images/AHouseForOne/06_800.webp","images/AHouseForOne/Plan_01_800.svg","images/AHouseForOne/Plan_02_800.svg","images/ALightAddition/01_400.webp","images/ALightAddition/01_400_blur.webp","images/ALightAddition/01_800.webp","images/ALightAddition/01_800_blur.jpg","images/ALightAddition/01_800_blur.webp","images/ALightAddition/02_400.webp","images/ALightAddition/02_800.webp","images/ALightAddition/03_400.webp","images/ALightAddition/03_800.webp","images/ALightAddition/04_400.webp","images/ALightAddition/04_800.webp","images/ALightAddition/05_400.jpg","images/ALightAddition/05_400.webp","images/ALightAddition/05_800.jpg","images/ALightAddition/05_800.webp","images/ALightAddition/06_400.jpg","images/ALightAddition/06_400.webp","images/ALightAddition/06_800.jpg","images/ALightAddition/06_800.webp","images/ALightAddition/07_400.jpg","images/ALightAddition/07_400.webp","images/ALightAddition/07_800.jpg","images/ALightAddition/07_800.webp","images/ALightAddition/08_400.jpg","images/ALightAddition/08_400.webp","images/ALightAddition/08_800.jpg","images/ALightAddition/08_800.webp","images/ALightAddition/Plan_01_800.svg","images/ALightAddition/Plan_02_800.svg","images/ALightAddition/Plan_03_800.svg","images/APavilion/01_400.webp","images/APavilion/01_400_blur.webp","images/APavilion/01_800.webp","images/APavilion/01_800_blur.webp","images/APavilion/02_400.webp","images/APavilion/02_800.webp","images/APavilion/03_400.webp","images/APavilion/03_800.webp","images/APavilion/04_400.webp","images/APavilion/04_800.webp","images/APavilion/Plan_01_800.svg","images/ARenovationForThree/01_400.webp","images/ARenovationForThree/01_400_blur.webp","images/ARenovationForThree/01_800.webp","images/ARenovationForThree/01_800_blur.webp","images/ARenovationForThree/02_400.webp","images/ARenovationForThree/02_800.webp","images/ARenovationForThree/03_400.webp","images/ARenovationForThree/03_800.webp","images/ARenovationForThree/04_400.webp","images/ARenovationForThree/04_800.webp","images/ARenovationForThree/05_400.webp","images/ARenovationForThree/05_800.webp","images/ARenovationForThree/06_400.webp","images/ARenovationForThree/06_800.webp","images/ARenovationForThree/07_400.webp","images/ARenovationForThree/07_800.webp","images/ARenovationForThree/08_400.webp","images/ARenovationForThree/08_800.webp","images/ARenovationForThree/09_400.webp","images/ARenovationForThree/09_800.webp","images/ARenovationForThree/Plan_01_800.svg","images/ARenovationForThree/Plan_02_800.svg","images/FourVisitsTo52Posts/01_400.webp","images/FourVisitsTo52Posts/01_400_blur.webp","images/FourVisitsTo52Posts/01_800.webp","images/FourVisitsTo52Posts/01_800_blur.webp","images/FourVisitsTo52Posts/02_400.webp","images/FourVisitsTo52Posts/02_800.webp","images/FourVisitsTo52Posts/03_400.webp","images/FourVisitsTo52Posts/03_800.webp","images/FourVisitsTo52Posts/04_400.webp","images/FourVisitsTo52Posts/04_800.webp","images/FourVisitsTo52Posts/05_400.webp","images/FourVisitsTo52Posts/05_800.webp","images/FourVisitsTo52Posts/06_400.webp","images/FourVisitsTo52Posts/06_800.webp","images/FourVisitsTo52Posts/Plan_01_800.svg","images/TokyoTina/01_400.webp","images/TokyoTina/01_400_blur.webp","images/TokyoTina/01_800.webp","images/TokyoTina/01_800_blur.webp","images/TokyoTina/02_400.webp","images/TokyoTina/02_800.webp","images/TokyoTina/Plan_01_800.svg","miji.svg","next/green.svg","next/grey.svg","next/pink.svg","next/pistachio.svg","next/red.svg","next/yellow.svg","prev/green.svg","prev/grey.svg","prev/pink.svg","prev/pistachio.svg","prev/red.svg","prev/yellow.svg","view/black.svg","view/green.svg","view/grey.svg","view/pink.svg","view/pistachio.svg","view/red.svg","view/yellow.svg"]),
	mimeTypes: {".woff":"font/woff",".svg":"image/svg+xml",".webp":"image/webp",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.DsFxkgkP.js",app:"_app/immutable/entry/app.Bnp8wyUE.js",imports:["_app/immutable/entry/start.DsFxkgkP.js","_app/immutable/chunks/mY8wNH-n.js","_app/immutable/chunks/D0P9d-rd.js","_app/immutable/chunks/C3ZDuYOR.js","_app/immutable/entry/app.Bnp8wyUE.js","_app/immutable/chunks/D0P9d-rd.js","_app/immutable/chunks/Di6zslmw.js","_app/immutable/chunks/CsaauQz1.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js')),
			__memo(() => import('../server/nodes/6.js')),
			__memo(() => import('../server/nodes/7.js')),
			__memo(() => import('../server/nodes/8.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/projects/[slug]",
				pattern: /^\/projects\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,4,], errors: [1,,,], leaf: 8 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());

export const config = {
	path: ["/*"],
	excludedPath: ["/.netlify/*"],
	preferStatic: true
};
