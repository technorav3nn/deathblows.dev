<script setup lang="ts">
const title = "games";
const description = "all of my favorite normal and roblox games!";
useSeoMeta({
	title,
	description,
	ogTitle: title,
	ogDescription: description,
});

interface FavoriteGame {
	title: string;
	opinion: string;
	image: string;
}

const favoriteGames: FavoriteGame[] = [
	{
		title: "Cyberpunk 2077",
		opinion:
			"bro this game is so good now after the updates that it became my favorite game of all time. the story, characters, and world are so beautiful and immersive. PLAY IT!!!!",
		image: "https://images.igdb.com/igdb/image/upload/t_1080p/co1rft.jpg",
	},
	{
		title: "Red Dead Redemption 2",
		opinion:
			"this game is a masterpiece. the story, characters, and world are so well done. if you can tell i like open world games",
		image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.webp",
	},
	{
		title: "Battlefield 1",
		opinion:
			"fps masterpiece, in my opinion the BEST arcade shooter ever. the sound design and graphics are insane for its time, and the multiplayer is so fun. best battlefield game BY FAR.",
		image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2n9d.webp",
	},
	{
		title: "Battlefield 4",
		opinion:
			"another masterpiece from the battlefield series. the multiplayer is so fun and chaotic, but theres some annoying OP guns i wont lie, and jet sweats are the worst. but still a great game tho!",
		image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1nmf.webp",
	},
	{
		title: "Battlefield 5",
		opinion:
			"graphics are amazing, gunplay is actually my favorite of all the games, but some maps are lacking. tanks and planes are super fun but annoying to grind. again, still a great game!",
		image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1xbv.webp",
	},
	{
		title: "Payday 2",
		opinion:
			"good with friends and solo, heists are hard in a good way (they're fun asf!) and the movement is super cool imo. i didnt play it much but i want to play it more, cuz the 3rd one isn't my favorite.",
		image: "https://images.igdb.com/igdb/image/upload/t_cover_big/coaaqu.webp",
	},
];
</script>

<template>
	<div>
		<div class="space-y-3.5">
			<UCard
				v-for="(game, index) in favoriteGames"
				:key="game.title"
				:ui="{ body: 'h-full! px-4! py-4! flex items-center' }"
				class="h-full group-hover:ring-accented group-hover:ring-[1.5px] rounded-xl relative bg-gradient-to-bl dark:from-neutral-900 dark:to-neutral-800/80 from-neutral-300/50 to-neutral-50"
			>
				<div class="relative shrink-0 w-[100px] h-[100px]">
					<img
						:src="game.image"
						:loading="index < 4 ? 'eager' : 'lazy'"
						decoding="async"
						:alt="`Cover art for ${game.title}`"
						width="100"
						height="100"
						class="rounded-md h-full w-full relative object-cover object-top"
					/>
				</div>
				<div class="ml-4 flex flex-col">
					<h3 class="text-lg font-semibold mb-1">{{ game.title }}</h3>
					<p class="text-sm text-dimmed">{{ game.opinion }}</p>
				</div>
			</UCard>
		</div>
	</div>
</template>
