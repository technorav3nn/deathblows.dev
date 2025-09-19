<script setup lang="ts">
const route = useRoute();

const { data: post } = await useAsyncData(route.path, () => queryCollection("blog").path(route.path).first());
if (!post.value) {
	throw createError({
		statusCode: 404,
		statusMessage: "Blog post not found",
		fatal: true,
	});
}

const formatter = new Intl.DateTimeFormat("en-US", {
	month: "short",
	day: "numeric",
	year: "numeric",
});

useSeoMeta({
	title: post.value.title,
	description: post.value.description,
	titleTemplate: "%s - blog - deathblows.dev",
});
</script>

<template>
	<div v-if="post">
		<div class="flex items-center gap-4">
			<span class="text-sm text-muted">
				{{ formatter.format(new Date(post!.date)) }}
			</span>
		</div>
		<h1 class="text-2xl font-bold mb-1">{{ post!.title }}</h1>
		<p class="text-sm text-muted mb-4">
			{{ post!.description }}
		</p>

		<div class="mb-4 mt-4 text-muted/30 border-[0.5px]"></div>
		<article class="-mt-1">
			<ContentRenderer v-if="post!.body" :value="post!" />
		</article>
	</div>
</template>
