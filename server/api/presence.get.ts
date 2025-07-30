import { get as getPresence } from "@prequist/lanyard";

export default defineCachedEventHandler(
	() => {
		const {
			public: { discordId },
		} = useRuntimeConfig();
		return getPresence(discordId as `${bigint}`);
	},
	{ maxAge: 10 }
);
