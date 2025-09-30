import type { NavigationMenuItem } from "@nuxt/ui";

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
		lastfm: "https://www.last.fm/user/Death_Blows",
		roblox: "https://www.roblox.com/users/883091636/profile",
		headerLinks: [
			{ label: "projects", href: "/projects" },
			{ label: "blog", href: "/blog" },
			{ label: "music", href: "/music" },
		] satisfies NavigationMenuItem[],
		projects: [
			{
				name: "brawl base",
				description: "a simple but useful brawl stars website to look at anything about the game",
				github: "https://github.com/technorav3nn/brawl-tracker",
				link: "https://brawlbase.deathblows.dev",
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
			{
				name: "rust-ware",
				description:
					"this was a rewrite of script-ware mac's electron UI into tauri using rust and react. it's defunct because script-ware was shut down.",
				github: "https://github.com/technorav3nn/rustware",
				image: {
					width: 200,
					height: 200,
					src: "https://scriptware-prerelease.vercel.app/assets/blue.bc5c6bae.png",
				},
				tech: ["tauri", "rust", "react", "vite", "tailwind css", "mantine"],
			},
			{
				name: "apple music rich presence (amrp)",
				description: "simple terminal app that shows your currently playing apple music song in discord, needs to be fixed tho",
				image: {
					width: 200,
					height: 200,
					src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Apple_Music_icon.svg/2048px-Apple_Music_icon.svg.png",
				},
				github: "https://github.com/technorav3nn/apple-music-rich-presence",
				tech: ["rust", "discord rpc"],
			},
			{
				name: "sw-auth",
				description: "simple wrapper for script-ware's authentication api",
				github: "https://github.com/technorav3nn/sw-auth",
				image: {
					width: 200,
					height: 200,
					src: "https://scriptware-prerelease.vercel.app/assets/blue.bc5c6bae.png",
				},
				tech: ["rust"],
			},
			{
				name: "project floppa",
				description:
					"old project from 2022, a roblox script hub with a lot of cool games. i dont script anymore so i made it public recently.",
				github: "https://github.com/technorav3nn/Project-Floppa",
				tech: ["luau"],
			},
			{
				name: "swm vscode extension",
				description:
					"jfc i forgot how much i liked swm, this vscode extension added a button to execute the file in view in script-ware inside vscode",
				github: "https://github.com/technorav3nn/scriptware-m-vscode",
				image: {
					width: 200,
					height: 200,
					src: "https://scriptware-prerelease.vercel.app/assets/blue.bc5c6bae.png",
				},
				tech: ["typescript", "vscode"],
			},
			{
				name: "floppa tunes",
				description: "my first big project, an extensive music bot for discord. i was really proud of it at the time.",
				image: {
					width: 200,
					height: 200,
					src: "https://cdn.discordapp.com/app-icons/861271636907917322/739c93f2528d0e5ed2270cc25aa12817.png?size=512",
				},
				github: "https://github.com/Floppa-Softworks/floppa-tunes",
				tech: ["typescript", "discord.js", "erela.js", "lavalink", "sapphire framework"],
			},
		] satisfies Project[],
	},
});

export interface Project {
	name: string;
	description: string;
	link?: string;
	github?: string;
	image?: {
		width: number;
		height: number;
		src: string;
	};
	tech: string[];
}
