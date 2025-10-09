<script setup lang="ts">
const route = useRoute();
const { data: about } = await useAsyncData(route.path, () => queryCollection("pages").path("/pages/about").first());

const title = "about";
const description = "a little bit about me";
useSeoMeta({
	title,
	description,
	ogTitle: title,
	ogDescription: description,
});
</script>

<template>
	<div>
		<h2 class="text-xl font-semibold">{{ title }}</h2>
		<p class="text-muted text-sm mb-4">
			{{ description }}
		</p>
		<USeparator class="mb-4" />
		<ContentRenderer :value="about!" />
	</div>
</template>
