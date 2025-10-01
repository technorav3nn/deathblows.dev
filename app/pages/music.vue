<script setup lang="ts">
const title = "music";
const description = "my recent music i've listened to, taken from last.fm";
useSeoMeta({
	title,
	description,
	ogTitle: title,
	ogDescription: description,
});
const {
	global: { lastfm },
} = useAppConfig();

const tracks = await useLastFmRecentTracks();
</script>

<template>
	<div>
		<h2 class="text-xl font-semibold">{{ title }}</h2>
		<p class="text-muted text-sm mb-4">
			{{ description }}. i use apple music as my music player, so sometimes not all my music might be scrobbled
		</p>
		<UButton size="sm" :to="lastfm" target="_blank" rel="noopener noreferrer" class="mb-4" trailing-icon="i-lucide-external-link">
			my last.fm
		</UButton>
		<USeparator class="mb-4" />
		<p class="text-muted text-sm mb-2">now playing</p>
		<div class="mb-6 mt-2">
			<HomeCardsNowPlaying />
		</div>
		<p class="text-muted text-sm mb-2">recent tracks</p>
		<div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3.5">
			<MusicTrack v-for="track in tracks" :key="track.mbid" class="w-full h-full" :track="track" />
		</div>
	</div>
</template>
