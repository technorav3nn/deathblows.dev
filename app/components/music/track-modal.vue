<script setup lang="ts">
const props = defineProps<{
	track: Track | TopAlbum;
	type: "album" | "track";
}>();

const artist = computed(() => {
	return props.type === "track" ? (props.track as Track).artist["#text"] : (props.track as TopAlbum).artist?.name;
});

const { data: info, status } =
	props.type === "album"
		? await useAlbumInfo((props.track as TopAlbum).artist.name, props.track.name)
		: await useTrackInfo((props.track as Track).artist["#text"], props.track.name);
watchEffect(() => {
	console.log("INFO: ", props.track);
});

const overlay = useOverlay();

const { format } = new Intl.NumberFormat();
const convertedDuration = computed(() => {
	if (props.type !== "track") return null;
	// its in milliseconds, convert it to `mm:ss` format
	const durationMs = Number(info?.value?.duration) || 0;
	const minutes = Math.floor(durationMs / 60000);
	const seconds = Math.floor((durationMs % 60000) / 1000);
	return `${minutes}:${seconds.toString().padStart(2, "0")}`;
});
</script>

<template>
	<UiResponsiveModal
		:drawer-props="{ title: track.name, ui: { content: 'h-[605px]!' } }"
		:modal-props="{ title: track.name, ui: { content: 'max-w-sm md:min-h-[457px]!' } }"
	>
		<template #header>
			<div class="w-full flex justify-between flex-row">
				<div class="flex flex-col">
					<p class="font-semibold">
						{{ track.name }}
					</p>
					<p class="text-sm text-muted">by {{ artist }}</p>
				</div>
				<div class="hidden md:flex items-center justify-center -mr-2">
					<UButton square color="neutral" variant="ghost" icon="i-lucide-x" @click="overlay.close(overlay.overlays?.[0]!.id)" />
				</div>
			</div>
		</template>
		<template #body>
			<div v-if="status === 'pending'" class="h-full">
				<UiLoadingIndicator class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-10 mt-5" />
			</div>
			<template v-else>
				<div class="flex flex-col justify-center items-center md:items-start my-auto">
					<img :src="track?.image?.[3]?.['#text']" alt="Album Art" width="350" height="350" class="rounded-lg" />
					<div v-if="info?.toptags?.tag?.length" class="flex flex-row flex-wrap gap-2 mt-4">
						<UBadge v-for="tag in info?.toptags?.tag" :key="tag.name" :label="tag.name" color="primary" variant="subtle" />
					</div>
					<div class="mt-4 flex flex-row gap-8">
						<div v-if="type === 'track'" class="flex flex-col justify-center">
							<p class="text-xs text-muted">duration</p>
							<p class="font-semibold text-lg">
								{{ convertedDuration }}
							</p>
						</div>
						<div class="flex flex-col justify-center">
							<p class="text-xs text-muted">listeners</p>
							<p class="font-semibold text-lg">
								{{ format(Number(info?.listeners)) }}
							</p>
						</div>
						<div class="flex flex-col justify-center">
							<p class="text-xs text-muted">playcount</p>
							<p class="font-semibold text-lg">
								{{ format(Number(info?.playcount)) }}
							</p>
						</div>
					</div>
					<UButton
						class="mt-2.5"
						:href="`https://www.last.fm/music/${artist}/${track.name.replaceAll(' ', '+')}`"
						target="_blank"
						rel="noopener"
						color="primary"
						variant="subtle"
						icon="i-lucide-external-link"
						size="sm"
					>
						view on last.fm
					</UButton>
				</div>
			</template>
		</template>
	</UiResponsiveModal>
</template>
