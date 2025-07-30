<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const open = ref(false);

const items = computed<NavigationMenuItem[]>(() =>
	[
		{
			label: "projects",
			href: "/projects",
		},
		{
			label: "blog",
			href: "/blog",
		},
	].map((s) => ({
		...s,
		onSelect: () => {
			open.value = false;
		},
	}))
);
</script>

<template>
	<UHeader v-model:open="open" mode="drawer" :menu="{}" :ui="{ root: 'border-0 relative', toggle: 'xs:hidden!' }">
		<template #title>
			<div class="flex gap-x-2.5 items-center">
				<img src="/profile-pic-circle.png" alt="Profile picture" class="rounded-full w-10 h-10" />
				<p class="text-lg font-bold" to="/">death_blows</p>
			</div>
		</template>

		<template #right>
			<UNavigationMenu
				class="hidden xs:block"
				:ui="{ link: 'text-base px-[5px] font-normal', item: 'py-0!' }"
				variant="link"
				:items="items"
			/>
			<UColorModeButton />
		</template>

		<template #body>
			<UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
		</template>
	</UHeader>
</template>
