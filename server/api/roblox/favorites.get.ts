import { fetchApi, isAnyErrorResponse } from "rozod";
import { getUsersUseridFavoriteGames } from "rozod/lib/endpoints/gamesv2";
import { postBatch } from "rozod/lib/endpoints/thumbnailsv1";

export default defineEventHandler(
	async (event) => {
		const {
			public: { robloxId },
		} = useRuntimeConfig(event);

		const query = getQuery(event);
		const favorites = await fetchApi(
			getUsersUseridFavoriteGames,
			{
				userId: Number(robloxId),
				limit: 100,
				sortOrder: "Desc",
				...(query?.cursor ? { cursor: query.cursor as string } : {}),
			},
			{}
		);
		if (isAnyErrorResponse(favorites)) {
			throw createError({
				statusCode: 500,
				statusMessage: "Failed to fetch favorite games",
			});
		}

		const thumbnails = await fetchApi(postBatch, {
			body: [
				...favorites.data.map(
					(game) =>
						({
							format: "webp",
							requestId: `"${game.id}:undefined:GameIcon:150x150:webp:regular:0"`,
							size: "150x150",
							type: "GameIcon",
							targetId: game.id,
							version: "",
							token: "",
							isCircular: false,
							alias: "",
						}) as any
				),
			],
		});

		if (isAnyErrorResponse(thumbnails)) {
			throw createError({
				statusCode: 500,
				statusMessage: "Failed to fetch thumbnails",
			});
		}

		return {
			nextPageCursor: favorites.nextPageCursor,
			data: [
				...favorites.data.map((game) => {
					const thumbnail = thumbnails.data.find((t) => t.targetId === game.id);
					return {
						id: game.id,
						name: game.name,
						description: game.description,
						creator: game.creator.name,
						url: `https://www.roblox.com/games/${game.rootPlace.id}`,
						...(thumbnail ? { thumbnail: thumbnail.imageUrl } : {}),
					} satisfies FavoriteGame;
				}),
			],
		};
	}
	// {
	// 	maxAge: 60 * 60 * 6, // 6 hours
	// 	getKey: (event) => `roblox-favorites-${event.context?.query?.cursor ?? "first"}`,
	// }
);

export interface FavoriteGame {
	id: number;
	name: string;
	description: string;
	creator: string;
	url: string;
	thumbnail?: string;
}
