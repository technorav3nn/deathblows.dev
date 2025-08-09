export interface Project {
	name: string;
	description: string;
	link?: string;
	github?: string;
	image: {
		width: number;
		height: number;
		src: string;
	};
	tech: string[];
}

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
				name: "brawl base",
				description: "a simple but useful brawl stars website to look at anything about the game",
				github: "https://github.com/technorav3nn/brawl-tracker",
				link: "https://brawlbase.deathblows.xyz",
				image: {
					width: 400,
					height: 200,
					src: "/projects/brawlbase.webp",
				},
				tech: ["better auth", "drizzle", "nuxt", "tailwind css"],
			},
			{
				name: "deathblows.dev",
				description: "the very website you are looking at right now!",
				github: "https://github.com/technorav3nn/deathblows.dev",
				link: "https://deathblows.dev",
				image: {
					width: 200,
					height: 200,
					src: "/projects/deathblows-dev.webp",
				},
				tech: ["nuxt", "tailwind css"],
			},
		] satisfies Project[],
	},
});
