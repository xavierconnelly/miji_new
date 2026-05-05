
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/about" | "/projects" | "/projects/[slug]";
		RouteParams(): {
			"/projects/[slug]": { slug: string }
		};
		LayoutParams(): {
			"/": { slug?: string };
			"/about": Record<string, never>;
			"/projects": { slug?: string };
			"/projects/[slug]": { slug: string }
		};
		Pathname(): "/" | "/about" | "/projects" | `/projects/${string}` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/ANDALEMO.woff" | "/close/black.svg" | "/close/green.svg" | "/close/grey.svg" | "/close/pink.svg" | "/close/pistachio.svg" | "/close/red.svg" | "/close/yellow.svg" | "/favicon.ico" | "/images/.DS_Store" | "/images/ABHouse/01_400.webp" | "/images/ABHouse/01_400_blur.webp" | "/images/ABHouse/01_800.webp" | "/images/ABHouse/01_800_blur.webp" | "/images/ABHouse/02_400.webp" | "/images/ABHouse/02_800.webp" | "/images/ABHouse/03_400.webp" | "/images/ABHouse/03_800.webp" | "/images/ABHouse/04_400.webp" | "/images/ABHouse/04_800.webp" | "/images/ABHouse/05_400.webp" | "/images/ABHouse/05_800.webp" | "/images/ABHouse/06_400.webp" | "/images/ABHouse/06_800.webp" | "/images/ABHouse/07_400.webp" | "/images/ABHouse/07_800.webp" | "/images/ABHouse/08_400.webp" | "/images/ABHouse/08_800.webp" | "/images/ABHouse/09_400.webp" | "/images/ABHouse/09_800.webp" | "/images/ABHouse/10_400.webp" | "/images/ABHouse/10_800.webp" | "/images/ABHouse/11_400.webp" | "/images/ABHouse/11_800.webp" | "/images/ABHouse/12_400.webp" | "/images/ABHouse/12_800.webp" | "/images/ABHouse/13_400.webp" | "/images/ABHouse/13_800.webp" | "/images/ABHouse/14_400.webp" | "/images/ABHouse/14_800.webp" | "/images/ABHouse/15_400.webp" | "/images/ABHouse/15_800.webp" | "/images/ABHouse/Plan_01_800.svg" | "/images/ABHouse/Plan_02_800.svg" | "/images/ACertainKindofLife/01_400.webp" | "/images/ACertainKindofLife/01_400_blur.webp" | "/images/ACertainKindofLife/01_800.webp" | "/images/ACertainKindofLife/01_800_blur.webp" | "/images/ACertainKindofLife/02_400.webp" | "/images/ACertainKindofLife/02_800.webp" | "/images/ACertainKindofLife/03_400.webp" | "/images/ACertainKindofLife/03_800.webp" | "/images/ACertainKindofLife/04_400.webp" | "/images/ACertainKindofLife/04_800.webp" | "/images/ACertainKindofLife/05_400.webp" | "/images/ACertainKindofLife/05_800.webp" | "/images/ACertainKindofLife/06_400.webp" | "/images/ACertainKindofLife/06_800.webp" | "/images/ACertainKindofLife/Plan_01_800.svg" | "/images/ACertainKindofLife/Plan_02_800.svg" | "/images/ACourtyardHouse/.DS_Store" | "/images/ACourtyardHouse/01_400.webp" | "/images/ACourtyardHouse/01_400_blur.webp" | "/images/ACourtyardHouse/01_800.webp" | "/images/ACourtyardHouse/01_800_blur.webp" | "/images/ACourtyardHouse/02_400.webp" | "/images/ACourtyardHouse/02_800.webp" | "/images/ACourtyardHouse/03_400.webp" | "/images/ACourtyardHouse/03_800.webp" | "/images/ACourtyardHouse/04_400.webp" | "/images/ACourtyardHouse/04_800.webp" | "/images/ACourtyardHouse/05_400.webp" | "/images/ACourtyardHouse/05_800.webp" | "/images/ACourtyardHouse/06_400.webp" | "/images/ACourtyardHouse/06_800.webp" | "/images/ACourtyardHouse/07_400.webp" | "/images/ACourtyardHouse/07_800.webp" | "/images/ACourtyardHouse/Plan_01_800.svg" | "/images/ACourtyardHouse/Plan_02_800.svg" | "/images/AHouseForOne/01_400.webp" | "/images/AHouseForOne/01_400_blur.webp" | "/images/AHouseForOne/01_800.webp" | "/images/AHouseForOne/01_800_blur.webp" | "/images/AHouseForOne/02_400.webp" | "/images/AHouseForOne/02_800.webp" | "/images/AHouseForOne/03_400.webp" | "/images/AHouseForOne/03_800.webp" | "/images/AHouseForOne/04_400.webp" | "/images/AHouseForOne/04_800.webp" | "/images/AHouseForOne/05_400.webp" | "/images/AHouseForOne/05_800.webp" | "/images/AHouseForOne/06_400.webp" | "/images/AHouseForOne/06_800.webp" | "/images/AHouseForOne/Plan_01_800.svg" | "/images/AHouseForOne/Plan_02_800.svg" | "/images/ALightAddition/01_400.webp" | "/images/ALightAddition/01_400_blur.webp" | "/images/ALightAddition/01_800.webp" | "/images/ALightAddition/01_800_blur.jpg" | "/images/ALightAddition/01_800_blur.webp" | "/images/ALightAddition/02_400.webp" | "/images/ALightAddition/02_800.webp" | "/images/ALightAddition/03_400.webp" | "/images/ALightAddition/03_800.webp" | "/images/ALightAddition/04_400.webp" | "/images/ALightAddition/04_800.webp" | "/images/ALightAddition/05_400.jpg" | "/images/ALightAddition/05_400.webp" | "/images/ALightAddition/05_800.jpg" | "/images/ALightAddition/05_800.webp" | "/images/ALightAddition/06_400.jpg" | "/images/ALightAddition/06_400.webp" | "/images/ALightAddition/06_800.jpg" | "/images/ALightAddition/06_800.webp" | "/images/ALightAddition/07_400.jpg" | "/images/ALightAddition/07_400.webp" | "/images/ALightAddition/07_800.jpg" | "/images/ALightAddition/07_800.webp" | "/images/ALightAddition/08_400.jpg" | "/images/ALightAddition/08_400.webp" | "/images/ALightAddition/08_800.jpg" | "/images/ALightAddition/08_800.webp" | "/images/ALightAddition/Plan_01_800.svg" | "/images/ALightAddition/Plan_02_800.svg" | "/images/ALightAddition/Plan_03_800.svg" | "/images/APavilion/01_400.webp" | "/images/APavilion/01_400_blur.webp" | "/images/APavilion/01_800.webp" | "/images/APavilion/01_800_blur.webp" | "/images/APavilion/02_400.webp" | "/images/APavilion/02_800.webp" | "/images/APavilion/03_400.webp" | "/images/APavilion/03_800.webp" | "/images/APavilion/04_400.webp" | "/images/APavilion/04_800.webp" | "/images/APavilion/Plan_01_800.svg" | "/images/ARenovationForThree/01_400.webp" | "/images/ARenovationForThree/01_400_blur.webp" | "/images/ARenovationForThree/01_800.webp" | "/images/ARenovationForThree/01_800_blur.webp" | "/images/ARenovationForThree/02_400.webp" | "/images/ARenovationForThree/02_800.webp" | "/images/ARenovationForThree/03_400.webp" | "/images/ARenovationForThree/03_800.webp" | "/images/ARenovationForThree/04_400.webp" | "/images/ARenovationForThree/04_800.webp" | "/images/ARenovationForThree/05_400.webp" | "/images/ARenovationForThree/05_800.webp" | "/images/ARenovationForThree/06_400.webp" | "/images/ARenovationForThree/06_800.webp" | "/images/ARenovationForThree/07_400.webp" | "/images/ARenovationForThree/07_800.webp" | "/images/ARenovationForThree/08_400.webp" | "/images/ARenovationForThree/08_800.webp" | "/images/ARenovationForThree/09_400.webp" | "/images/ARenovationForThree/09_800.webp" | "/images/ARenovationForThree/Plan_01_800.svg" | "/images/ARenovationForThree/Plan_02_800.svg" | "/images/FourVisitsTo52Posts/01_400.webp" | "/images/FourVisitsTo52Posts/01_400_blur.webp" | "/images/FourVisitsTo52Posts/01_800.webp" | "/images/FourVisitsTo52Posts/01_800_blur.webp" | "/images/FourVisitsTo52Posts/02_400.webp" | "/images/FourVisitsTo52Posts/02_800.webp" | "/images/FourVisitsTo52Posts/03_400.webp" | "/images/FourVisitsTo52Posts/03_800.webp" | "/images/FourVisitsTo52Posts/04_400.webp" | "/images/FourVisitsTo52Posts/04_800.webp" | "/images/FourVisitsTo52Posts/05_400.webp" | "/images/FourVisitsTo52Posts/05_800.webp" | "/images/FourVisitsTo52Posts/06_400.webp" | "/images/FourVisitsTo52Posts/06_800.webp" | "/images/FourVisitsTo52Posts/Plan_01_800.svg" | "/images/TokyoTina/01_400.webp" | "/images/TokyoTina/01_400_blur.webp" | "/images/TokyoTina/01_800.webp" | "/images/TokyoTina/01_800_blur.webp" | "/images/TokyoTina/02_400.webp" | "/images/TokyoTina/02_800.webp" | "/images/TokyoTina/Plan_01_800.svg" | "/miji.svg" | "/next/green.svg" | "/next/grey.svg" | "/next/pink.svg" | "/next/pistachio.svg" | "/next/red.svg" | "/next/yellow.svg" | "/prev/green.svg" | "/prev/grey.svg" | "/prev/pink.svg" | "/prev/pistachio.svg" | "/prev/red.svg" | "/prev/yellow.svg" | "/view/black.svg" | "/view/green.svg" | "/view/grey.svg" | "/view/pink.svg" | "/view/pistachio.svg" | "/view/red.svg" | "/view/yellow.svg" | string & {};
	}
}