<script setup lang="ts">
defineProps<{
	track: Track;
	index: number;
}>();
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
				<p class="text-xs font-semibold leading-4.5 truncate">
					{{ track.name }}
				</p>
				<NuxtLink
					:to="`https://www.last.fm/music/${track.artist['#text'].replaceAll(' ', '+')}`"
					target="_blank"
					rel="noopener noreferrer"
				>
					<p class="text-xs text-muted leading-4.5 truncate hover:underline">
						{{ track.artist["#text"] }}
					</p>
				</NuxtLink>
				<NuxtLink
					v-if="track.album['#text']"
					:to="`https://www.last.fm/music/${track.artist['#text'].replaceAll(' ', '+')}/_/${track.album['#text'].replaceAll(' ', '+')}`"
					target="_blank"
					rel="noopener noreferrer"
				>
					<p v-if="track.album['#text']" class="text-[10.5px] text-muted leading-4.5 truncate hover:underline">
						{{ track.album["#text"] }}
					</p>
				</NuxtLink>
			</div>
		</UCard>
	</NuxtLink>
</template>
