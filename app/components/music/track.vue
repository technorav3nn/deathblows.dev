<script setup lang="ts">
import { MusicTrackModal } from "#components";

const props = withDefaults(
	defineProps<{
		track: Track | TopAlbum;
		index: number;
		type?: "album" | "track";
	}>(),
	{ type: "track" }
);
const color = computed(() => {
	if (props.type !== "album") return "";
	if (props.index === 0) {
		return "text-amber-600/90 dark:text-amber-400";
	} else if (props.index === 1) {
		return "text-slate-500 dark:text-blue-200";
	} else if (props.index === 2) {
		return "text-[#a8723b] dark:text-yellow-600/90";
	}
	return "";
});
const numberColor = computed(() => {
	if (props.type !== "album") return "";
	if (props.index === 0) {
		return "text-amber-400/90 dark:text-amber-600/90";
	} else if (props.index === 1) {
		return "text-slate-300 dark:text-blue-400";
	} else if (props.index === 2) {
		return "text-[#cc8743] dark:text-yellow-700/90";
	}
	return "text-inverted";
});

const overlay = useOverlay();
const modal = overlay.create(MusicTrackModal, { props: { track: props.track, type: props.type } });
function openTrackModal() {
	modal.open();
}
</script>

<template>
	<UCard
		:ui="{ body: 'h-full! p-0! flex flex-col w-full' }"
		class="cursor-pointer h-full w-full group rounded-xl relative bg-gradient-to-br dark:from-neutral-900 dark:to-neutral-800/80 from-neutral-200/50 to-neutral-50 hover:ring-accented/70 hover:ring-2"
		role="button"
		@click="openTrackModal"
	>
		<img
			:src="track?.image?.[3]?.['#text'] || '/placeholder-64.png'"
			:loading="index < 6 ? 'eager' : 'lazy'"
			decoding="async"
			alt="Album Art"
			width="100"
			height="100"
			class="rounded-md rounded-b-none object-cover w-full h-full transition duration-100 group-hover:brightness-75"
		/>
		<p
			:class="[numberColor, type !== 'album' && 'text-inverted']"
			class="font-bold absolute top-2 right-2 text-[10px] bg-inverted/50 backdrop-blur-xs px-1.5 py-0.5 rounded-md"
		>
			#{{ index + 1 }}
		</p>
		<div class="px-2.5 py-2">
			<p class="text-xs font-semibold leading-4.5 truncate" :class="color">
				{{ track.name }}
			</p>
			<p class="text-xs text-muted leading-4.5 truncate hover:underline">
				{{ type === "track" ? (track as Track).artist?.["#text"] : (track as TopAlbum).artist.name }}
			</p>
			<p class="text-xs text-toned font-medium leading-4.5 truncate hover:underline">
				{{ type === "track" ? (track as Track)?.album?.["#text"] : "" }}
				{{ type === "album" ? (track as TopAlbum)?.playcount + " plays" : "" }}
			</p>
		</div>
	</UCard>
</template>
