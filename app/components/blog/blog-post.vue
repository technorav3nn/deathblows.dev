<script setup lang="ts">
import type { BlogCollectionItem } from "@nuxt/content";

defineProps<{
	post: BlogCollectionItem;
}>();
const formatter = new Intl.DateTimeFormat("en-US", {
	month: "short",
	day: "numeric",
	year: "numeric",
});
</script>

<template>
	<NuxtLink :to="post.path" class="group flex items-center gap-4 hover:opacity-80">
		<div class="text-sm text-primary shrink-0">
			<span class="sm:line-clamp-none sm:whitespace-nowrap">{{ post.title }}</span>
		</div>
		<div
			class="border dark:border-neutral-600 border-dashed border-neutral-400 border-opacity-10 w-full h-0 flex-shrink self-end mb-2"
		></div>
		<span class="text-xs whitespace-nowrap text-neutral-500">
			{{ formatter.format(new Date(post.date)) }}
		</span>
	</NuxtLink>
</template>
