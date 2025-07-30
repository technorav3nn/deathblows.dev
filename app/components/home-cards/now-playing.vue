<script setup lang="ts">
const nowPlaying = useLastFm();
</script>

<template>
	<UCard
		:ui="{ body: 'h-full! px-4! py-4! flex items-center' }"
		class="rounded-xl relative bg-gradient-to-bl dark:from-neutral-900 dark:to-neutral-800/80 from-neutral-300/50 to-neutral-50"
	>
		<p
			class="dark:text-dimmed text-muted text-2xl absolute text-nowrap text-center inset-0 top-16.5 left-[98%] -translate-x-[98%] w-max -z-50 font-bold"
		>
			now playing
		</p>
		<div class="absolute flex items-center gap-1 inset-0 -top-17.5 font-medium left-[98%] -translate-x-[98%] w-max">
			<UIcon name="i-fa-brands-lastfm" class="size-6 relative dark:text-dimmed text-muted" />
		</div>
		<img
			v-if="nowPlaying.status === 'playing'"
			:src="nowPlaying.song?.art"
			:alt="`Album cover of ${nowPlaying.song.album} by ${nowPlaying.song.artist}`"
			width="70"
			height="70"
			class="rounded h-[70px] w-[70px]"
		/>
		<div v-else class="h-[70px] w-[70px] rounded-xl flex items-center justify-center bg-accented/55">
			<UIcon name="i-fa-solid-music" class="size-7" />
		</div>
		<div class="truncate ml-4 flex justify-between h-full flex-col">
			<p v-if="nowPlaying.status === 'playing'" class="text-base font-semibold leading-4.5 truncate overflow-y-clip">
				{{ nowPlaying.song?.name }}
			</p>
			<p v-else class="text-base font-semibold text-dimmed">not playing anything</p>

			<div v-if="nowPlaying.status === 'playing'">
				<p class="text-sm text-muted mb-0.5">by {{ nowPlaying.song?.artist || "Unknown Artist" }}</p>
				<p class="text-xs text-muted truncate">{{ nowPlaying.song?.album || "Unknown Album" }}</p>
			</div>
		</div>
	</UCard>
</template>
