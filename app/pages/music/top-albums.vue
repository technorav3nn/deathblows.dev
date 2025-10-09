<script setup lang="ts">
const { data: albums, status } = await useTopAlbums("1month");
</script>

<template>
	<div>
		<p class="text-muted text-sm mb-2">my top albums this month</p>
		<div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3.5">
			<template v-if="status === 'pending'">
				<USkeleton v-for="n in 10" :key="n" class="w-full h-[220.5px] rounded-lg" />
			</template>
			<MusicTrack
				v-for="(album, index) in albums"
				v-else
				:key="album.mbid"
				:index
				class="w-full h-full"
				:track="album"
				type="album"
			/>
		</div>
	</div>
</template>
