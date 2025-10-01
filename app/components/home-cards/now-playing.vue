<script setup lang="ts">
const nowPlaying = useLastFmNowPlaying();
const {
	global: { lastfm },
} = useAppConfig();
</script>

<template>
	<NuxtLink class="group relative overflow-hidden" :to="lastfm" target="_blank" rel="noopener noreferrer">
		<div class="now-playing-anim-top">
			<div class="now-playing-anim">
				<div class="now-playing-anim-inner light:opacity-35"></div>
			</div>
		</div>
		<UCard
			:ui="{ body: 'h-full! px-4! py-4! flex items-center' }"
			class="h-full group-hover:ring-accented group-hover:ring-[1.5px] rounded-xl relative bg-gradient-to-bl dark:from-neutral-900 dark:to-neutral-800/80 from-neutral-300/50 to-neutral-50"
		>
			<p
				class="dark:text-dimmed text-muted text-2xl absolute text-nowrap text-center inset-0 top-16.5 left-[98%] -translate-x-[98%] w-max -z-50 font-bold"
			>
				now playing
			</p>
			<div class="absolute flex items-center gap-1 inset-0 -top-17.5 font-medium left-[98%] -translate-x-[98%] w-max">
				<UIcon name="i-fa-brands-lastfm" class="size-6 relative dark:text-error text-error" />
			</div>
			<div v-if="nowPlaying.status === 'playing'" class="relative w-max shrink-0">
				<img
					decoding="async"
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
					class="rounded h-[70px] w-[70px] z-[1] blur-xl top-0 absolute group-hover:blur-2xl transition duration-400"
				/>
			</div>
			<div v-else class="h-[70px] w-[70px] rounded-xl flex items-center justify-center bg-accented/55 z-[999999]">
				<UIcon name="i-fa-solid-music" class="size-7" />
			</div>
			<div class="truncate ml-4 flex justify-between h-full flex-col">
				<NuxtLink
					v-if="nowPlaying.status === 'playing'"
					:to="nowPlaying.song.url"
					target="_blank"
					rel="noopener noreferrer"
					external
					class="text-base font-semibold leading-4.5 truncate overflow-y-clip hover:underline"
				>
					{{ nowPlaying.song?.name }}
				</NuxtLink>
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

<style scoped>
@keyframes move-bg {
	0% {
		transform: translate(0) translateY(0);
	}
	100% {
		transform: translate(56px) translateY(39px);
	}
}

.now-playing-anim-top {
	mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8));
	position: absolute;
	pointer-events: none;
	overflow: hidden;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 999;
	opacity: 8%;
}

.now-playing-anim {
	animation: move-bg 4s infinite linear;
}

.now-playing-anim-inner {
	transform: rotate(-10deg) scale(1.5) translateY(-70px);
	background-repeat: repeat;
	width: 800px;
	height: 400px;
	background-image: url("/icons/music-note.svg");
	mask-image: red;
}
</style>
