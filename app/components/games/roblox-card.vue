<script setup lang="ts">
import type { FavoriteGame } from "~~/server/api/roblox/favorites.get";

defineProps<{
	game: FavoriteGame;
	index: number;
}>();
</script>

<template>
	<NuxtLink :to="game.url" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3">
		<UCard
			:ui="{ body: 'h-full! p-0! flex flex-col w-full' }"
			class="h-full w-full group rounded-xl relative bg-gradient-to-br dark:from-neutral-900 dark:to-neutral-800/80 from-neutral-200/50 to-neutral-50 hover:ring-accented/70 hover:ring-2"
		>
			<img
				:loading="index < 6 ? 'eager' : 'lazy'"
				:src="game.thumbnail"
				alt="Album Art"
				width="100"
				height="100"
				decoding="async"
				class="rounded-md rounded-b-none object-cover w-full h-full transition duration-100 group-hover:brightness-75"
			/>
			<div class="px-2.5 py-2">
				<p class="text-xs font-semibold leading-4.5 truncate">
					{{ game.name }}
				</p>
				<p class="text-xs text-muted leading-4.5 truncate hover:underline">by {{ game.creator }}</p>
			</div>
		</UCard>
	</NuxtLink>
</template>
