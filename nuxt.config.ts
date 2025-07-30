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
