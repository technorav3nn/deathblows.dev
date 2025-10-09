<script setup lang="ts">
const { data: tracks, status } = await useRecentTracks();
</script>

<template>
	<div>
		<p class="text-muted text-sm mb-2">now playing</p>
		<div class="mb-6 mt-2">
			<HomeCardsNowPlaying />
		</div>
		<p class="text-muted text-sm mb-2">recent tracks</p>
		<div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3.5">
			<template v-if="status === 'pending'">
				<USkeleton v-for="n in 10" :key="n" class="w-full h-[220.5px] rounded-lg" />
			</template>
			<MusicTrack v-for="(track, index) in tracks" v-else :key="track.mbid" :index class="w-full h-full" :track="track" />
		</div>
		<div class="flex justify-center items-center mt-6">
			<UButton size="sm" :to="'https://www.last.fm/user/Death_Blows'" trailing-icon="i-lucide-arrow-right">see more!</UButton>
		</div>
	</div>
</template>
