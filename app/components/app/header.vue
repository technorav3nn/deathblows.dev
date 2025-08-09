<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const open = ref(false);
const route = useRoute();

const items = computed<NavigationMenuItem[]>(() =>
	(
		[
			{
				label: "projects",
				href: "/projects",
			},
			{
				label: "blog",
				href: "/blog",
			},
		] as NavigationMenuItem[]
	).map((s) => ({
		...s,
		onSelect: () => {
			open.value = false;
		},
		active: route.path.startsWith((s.href ?? "") as string) || (s.href === "/blog" && route.path.startsWith("/blog/")),
	}))
);
</script>

<template>
	<UHeader
		v-model:open="open"
		mode="drawer"
		:menu="{ class: 'h-[40vh]', shouldScaleBackground: true, setBackgroundColorOnScale: true }"
		:ui="{ root: 'border-0 relative', toggle: 'xs:hidden!' }"
	>
		<template #title>
			<div class="flex gap-x-2.5 items-center">
				<img src="/profile-pic-circle.webp" alt="Profile picture" class="rounded-full w-10 h-10" />
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
			<UiBetterColorModeButton />
		</template>

		<template #body>
			<UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
		</template>
	</UHeader>
</template>
