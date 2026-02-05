export const projects = [
	{
		slug: 'ALightAddition',
		title: 'A Light Addition',
		content: 'Bunurong Country | St Kilda East, Australia 2024',
		colour: 'red',
		hex: 'FF6600',
		images: ["01", "02", "03", "04", "05", "06", "07", "08"],
		// ratio: ["1150", "1200", "533", "1200", "1200"],
		plans: ["01", "02", "03"],
		prev: 'TokyoTina',
		next: 'ACourtyardHouse'
	},

	{
		slug: 'ACourtyardHouse',
		title: 'A Courtyard House',
		content: 'Bunurong Country | Bayside, Australia 2024',
		colour: 'pink',
		hex: 'FFAFC3',
		images: ["01", "02", "03", "04", "05", "06"],
		// ratio: ["1200", "533", "533", "1200", "1200", "533"],
		plans: ["01", "02"], 
		prev: 'ALightAddition',
		next: 'ABHouse'
	},

	{
		slug: 'ABHouse',
		title: 'A B House',
		content: 'Wadawurrung Country | Barwon Heads, Australia 2021',
		colour: 'pistachio',
		hex: 'F5F5C8',
		images: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15" ],
		// ratio: ["1100", "1200", "1200", "1200", "1200", "1200", "1200", "1200", "1200", "533", "533", "533", "1200", "1200", "1200"],
		plans: ["01", "02"],
		prev: 'ACourtyardHouse',
		next: 'ACertainKindofLife'
	},

	{
		slug: 'ACertainKindofLife',
		title: 'A Certain Kind of Life',
		content: 'Lisbon, Portugal 2019 (Jimmy Carter with Abigail Chang, Francesco Marullo and Agata Siemionow in conjunction with the University of Illinois at Chicago.)',
		colour: 'pink',
		hex: 'FFAFC3',
		images: ["01", "02", "03", "04", "05", "06"],
		// ratio: ["990", "970", "1072", "1080", "1200", "1200"],
		plans: ["01", "02"],
		prev: 'ABHouse',
		next: 'AHouseForOne'
	},

	{
		slug: 'AHouseForOne',
		title: 'A House For One',
		content: "Dja Dja Wurrung Country | Castlemaine, Australia 2016",
		colour: 'green',
		hex: '00CC66',
		images: ["01", "02", "03", "04", "05", "06"],
		// ratio: ["689", "1020", "616", "623", "1036", "656"],
		plans: ["01", "02"],
		prev: 'ACertainKindofLife',
		next: 'APavilion'
	},

	{
		slug: 'APavilion',
		title: 'A Pavilion',
		content: "Wurundjeri Country | Collingwood, Australia 2021 (in collaboration with client)",
		colour: 'yellow',
		hex: 'FAF000',
		images: ["01", "02", "03", "04"],
		// ratio: ["1066", "600", "1066", "600"],
		plans: ["01"],
		prev: 'AHouseForOne',
		next: 'ARenovationForThree'
	},

	{
		slug: 'ARenovationForThree',
		title: 'A Renovation For Three',
		content: "Dja Dja Wurrung Country | Castlemaine, Australia 2022",
		colour: 'green',
		hex: '00CC66',
		images: ["01", "02", "03", "04", "05", "06", "07", "08", "09"],
		// ratio: ["600", "1200", "1200", "1200", "1200", "1200", "1200", "1200", "1200"],
		plans: ["01", "02"],
		prev: 'APavilion',
		next: 'FourVisitsTo52Posts'
	},

	{
		slug: 'FourVisitsTo52Posts',
		title: 'Four Visits To 52 Posts',
		content: "Booklet (in collaboration with Ben Hosking) 2023",
		colour: 'grey',
		hex: 'E1E1E1',
		images: ["01", "02", "03", "04", "05", "06"],
		// ratio: ["533", "533", "1200", "1200", "533", "533"],
		plans: ["01"],
		prev: 'ARenovationForThree',
		next: 'TokyoTina'
	},

	{
		slug: 'TokyoTina',
		title: 'Tokyo Tina',
		content: "Wurundjeri Country | Prahran, Australia 2015",
		colour: 'red',
		hex: 'FF6600',
		images: ["01", "02"],
		// ratio: ["642", "1004"],
		plans: ["01"],
		prev: 'FourVisitsTo52Posts',
		next: 'ALightAddition'
	}
];