export default defineAppConfig({
	ui: {
		colors: {
			primary: "violet",
			neutral: "neutral",
		},
		navigationMenu: {
			variants: {
				active: {
					false: {
						link: "text-toned",
					},
				},
			},
		},
	},
	uiPro: {
		main: {},
	},
	global: {
		twitter: "https://twitter.com/Death_Blowsz",
		github: "https://github.com/technorav3nn",
		headerLinks: [
			{ name: "projects", href: "/projects" },
			{ name: "blog", href: "/blog" },
		],
		projects: [
			{
				name: "brawl tracker",
				description: "a simple but useful brawl stars website to look at anything about the game",
				link: "https://github.com/technorav3nn/brawl-tracker",
			},
			{
				name: "deathblows.dev",
				description: "the very website you are looking at right now!",
				link: "https://github.com/technorav3nn/deathblows.dev",
			},
		],
	},
});
