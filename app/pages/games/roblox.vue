<script setup lang="ts">
const cursor = ref<string | null>(null);
const oldData = ref<any[]>([]);
const disableButton = ref(false);

const {
	data: games,
	status,
	refresh,
} = await useFetch(() => `/api/roblox/favorites${cursor.value != null ? `?cursor=${cursor.value}` : ""}`, {
	transform: (d) => {
		if (cursor.value) {
			return {
				nextPageCursor: d.nextPageCursor,
				data: [...oldData.value, ...d.data],
			};
		}
		return d;
	},
	watch: false,
});

watchEffect(() => {
	if (games.value?.nextPageCursor === null) {
		disableButton.value = true;
	}
	cursor.value = games.value?.nextPageCursor ?? null;
	oldData.value = games.value?.data as any[];
});
</script>

<template>
	<div v-if="games">
		<div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3.5">
			<GamesRobloxCard v-for="(game, index) in games.data" :key="game.id" :game="game" :index class="w-full h-full" />
		</div>
		<div class="flex justify-center items-center w-full mt-4">
			<UButton
				v-if="!disableButton"
				:loading="status === 'pending'"
				variant="subtle"
				color="neutral"
				icon="i-lucide-arrow-down"
				@click="refresh()"
			>
				load more
			</UButton>
			<p v-else class="text-sm text">you've reached the end, friend!</p>
		</div>
	</div>
</template>
