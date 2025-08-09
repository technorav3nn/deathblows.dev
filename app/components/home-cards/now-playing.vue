<script setup lang="ts">
const nowPlaying = useLastFm();
</script>

<template>
	<NuxtLink class="group" :to="nowPlaying.song?.url" target="_blank" rel="noopener noreferrer">
		<UCard
			:ui="{ body: 'h-full! px-4! py-4! flex items-center' }"
			class="h-full group-hover:ring-accented group-hover:ring-[1.5px] transition rounded-xl relative bg-gradient-to-bl dark:from-neutral-900 dark:to-neutral-800/80 from-neutral-300/50 to-neutral-50"
		>
			<p
				class="dark:text-dimmed text-muted text-2xl absolute text-nowrap text-center inset-0 top-16.5 left-[98%] -translate-x-[98%] w-max -z-50 font-bold"
			>
				now playing
			</p>
			<div class="absolute flex items-center gap-1 inset-0 -top-17.5 font-medium left-[98%] -translate-x-[98%] w-max">
				<UIcon name="i-fa-brands-lastfm" class="size-6 relative dark:text-dimmed text-muted" />
			</div>
			<div v-if="nowPlaying.status === 'playing'" class="relative w-max shrink-0">
				<img
					:src="nowPlaying.song?.art"
					:alt="`Album cover of ${nowPlaying.song.album} by ${nowPlaying.song.artist}`"
					width="70"
					height="70"
					class="rounded h-[70px] w-[70px] z-[2] relative"
				/>
				<img
					:src="nowPlaying.song?.art"
					aria-hidden
					width="70"
					height="70"
					class="rounded h-[70px] w-[70px] z-[1] blur-xl top-0 absolute group-hover:blur-2xl transition duration-300"
				/>
			</div>
			<div v-else class="h-[70px] w-[70px] rounded-xl flex items-center justify-center bg-accented/55">
				<UIcon name="i-fa-solid-music" class="size-7" />
			</div>
			<div class="truncate ml-4 flex justify-between h-full flex-col">
				<p v-if="nowPlaying.status === 'playing'" class="text-base font-semibold leading-4.5 truncate overflow-y-clip w-">
					{{ nowPlaying.song?.name }}
				</p>
				<p v-else class="text-base font-semibold text-dimmed">
					{{ nowPlaying.status === "connecting" ? "loading..." : "not playing anything" }}
				</p>

				<div v-if="nowPlaying.status === 'playing'">
					<p class="text-sm text-muted font-medium">{{ nowPlaying.song?.artist || "Unknown Artist" }}</p>
					<p class="text-xs text-muted truncate">{{ nowPlaying.song?.album || "Unknown Album" }}</p>
				</div>
			</div>
		</UCard>
	</NuxtLink>
</template>
