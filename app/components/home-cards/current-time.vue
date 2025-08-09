<script setup lang="ts">
import { format } from "date-fns/format";

const getDate = () => new Date(new Date().toLocaleString("en-US", { timeZone: "America/New_York" }));
const estDate = ref<Date>(getDate());

useIntervalFn(() => {
	estDate.value = getDate();
}, 900);

const formattedDate = computed(() => {
	if (import.meta.prerender) return "...";
	return format(estDate.value, "h:mm aaa");
});
</script>

<template>
	<UCard
		:ui="{ body: 'h-full p-0 py-0.5' }"
		class="rounded-xl bg-[linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)),url(/massachusetts.webp)] dark:bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(/massachusetts.webp)] bg-cover bg-center"
	>
		<div class="text-center flex flex-col items-center justify-center mx-auto h-full">
			<p class="font-bold light:text-neutral-100 text-lg">{{ formattedDate }}</p>
			<p class="text-muted light:text-neutral-300 text-sm">in massachusetts</p>
		</div>
	</UCard>
</template>
