// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: ["@nuxt/ui-pro", "@nuxt/eslint", "@nuxt/content", "@vueuse/nuxt"],
	css: ["~/assets/css/main.css"],
	eslint: {
		config: {
			formatters: {},
		},
	},
	imports: {
		presets: [
			{
				from: "@leonardssh/use-lanyard",
				imports: ["useLanyard"],
			},
		],
	},
	nitro: {
		// preset: "netlify-edge",
		preset: "cloudflare-module",
		cloudflare: {
			deployConfig: true,
			wrangler: {
				name: "deathblows-dev",
				d1_databases: [{ binding: "DB", database_name: "deathblows-dev", database_id: "335aa661-8a83-4c2e-bdb5-a2c5c4f2732d" }],
			},
		},
		prerender: {
			routes: ["/"],
			crawlLinks: true,
		},
	},
	content: {
		build: {
			markdown: {
				highlight: {
					theme: {
						dark: "catppuccin-mocha",
						default: "catppuccin-latte",
						light: "catppuccin-latte",
					},
				},
			},
		},
	},
	// routeRules: {
	// 	"/_nuxt/**": {
	// 		headers: { "Cache-Control": "public, max-age=31536000, immutable" },
	// 	},
	// 	"/**/*.webp": {
	// 		headers: { "Cache-Control": "public, max-age=14400" },
	// 	},
	// },
	experimental: {
		asyncContext: true,
		typedPages: true,
		inlineRouteRules: true,
	},
	runtimeConfig: {
		openWeatherApiKey: "",
		public: {
			// this is safe to expose, last.fm API key is basically useless without the secret for more private data
			lastFmApiKey: "e5db5ab2552042441f5983be7144bb05",
			lastFmUsername: "death_blows",
			discordId: "304043360963002370",
		},
	},
});
