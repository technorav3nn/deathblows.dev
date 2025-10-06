<script setup lang="ts">
const cursor = ref<string | null>(null);
const oldData = ref<any[]>([]);
const disableButton = ref(false);

const {
	data: games,
	status,
	refresh,
} = await useLazyFetch(() => `/api/roblox/favorites${cursor.value != null ? `?cursor=${cursor.value}` : ""}`, {
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

const firstFetch = ref(true);

watchEffect(() => {
	if (games.value?.nextPageCursor === null) {
		disableButton.value = true;
	}
	cursor.value = games.value?.nextPageCursor ?? null;
	oldData.value = games.value?.data as any[];
});

watchEffect(() => {
	if (status.value === "success") firstFetch.value = false;
});
</script>

<template>
	<div>
		<p class="text-muted mb-4 text-sm">
			this list is taken directly from my favorites on the website. some games i havent played because i havent tried them yet,
			but they look cool. but most i've played and liked!
		</p>
		<div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3.5">
			<template v-if="status === 'pending' && firstFetch">
				<USkeleton v-for="n in 10" :key="n" class="w-full h-[202.5px] rounded-lg" />
			</template>
			<GamesRobloxCard v-for="(game, index) in games!.data" v-else :key="game.id" :game="game" :index class="w-full h-full" />
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
