<script setup lang="ts">
defineRouteRules({
	prerender: true,
});

const { data: posts } = await useAsyncData(() => queryCollection("blog").order("date", "DESC").all());

if (!posts.value) {
	throw createError({
		statusCode: 404,
		statusMessage: "Blog posts not found",
		fatal: true,
	});
}

prerenderRoutes(posts.value.map((post) => post.path));

useSeoMeta({
	title: "blog",
	description: "my latest blog posts",
});
</script>

<template>
	<div>
		<h2 class="text-xl font-semibold">blog</h2>
		<p class="text-muted text-sm mb-4">view my latest blog posts here</p>
		<USeparator class="mb-4" />

		<UBlogPosts orientation="vertical">
			<BlogPost v-for="post in posts" :key="post.id" :post="post" />
		</UBlogPosts>
	</div>
</template>
