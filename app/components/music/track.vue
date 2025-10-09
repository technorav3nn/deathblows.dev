<script setup lang="ts">
withDefaults(
	defineProps<{
		track: Track | TopAlbum;
		index: number;
		type?: "album" | "track";
	}>(),
	{ type: "track" }
);
</script>

<template>
	<NuxtLink :to="track.url" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3">
		<UCard
			:ui="{ body: 'h-full! p-0! flex flex-col w-full' }"
			class="h-full w-full group rounded-xl relative bg-gradient-to-br dark:from-neutral-900 dark:to-neutral-800/80 from-neutral-200/50 to-neutral-50 hover:ring-accented/70 hover:ring-2"
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
			<div class="px-2.5 py-2">
				<p
					class="text-xs font-semibold leading-4.5 truncate"
					:class="[
						type === 'album'
							? index === 0
								? ' text-yellow-600 dark:text-amber-400'
								: index === 1
									? 'text-slate-500 dark:text-blue-200'
									: index === 2
										? 'text-yellow-800 dark:text-yellow-600/90'
										: ''
							: '',
					]"
				>
					{{ track.name }}
				</p>
				<p class="text-xs text-muted leading-4.5 truncate hover:underline">
					{{ type === "track" ? (track as Track).artist?.["#text"] : (track as TopAlbum).artist.name }}
				</p>
				<p class="text-xs text-muted leading-4.5 truncate hover:underline">
					{{ type === "track" ? (track as Track)?.album?.["#text"] : "" }}
					{{ type === "album" ? (track as TopAlbum)?.playcount + " plays" : "" }}
				</p>
			</div>
		</UCard>
	</NuxtLink>
</template>
