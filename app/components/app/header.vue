<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const open = ref(false);
const route = useRoute();

const {
	global: { headerLinks },
} = useAppConfig();

const items = computed<NavigationMenuItem[]>(() =>
	headerLinks.map((s) => ({
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
		:ui="{ root: 'border-0 relative', toggle: 'sm:hidden!' }"
	>
		<template #title>
			<div class="flex gap-x-2.5 items-center">
				<img src="/profile-pic-circle.webp" alt="Profile picture" class="rounded-full w-10 h-10" />
				<p class="text-lg font-bold" to="/">death_blows</p>
			</div>
		</template>

		<template #right>
			<UNavigationMenu
				class="hidden sm:block"
				:ui="{
					link: 'text-base px-[5px] font-normal text-(--ui-text) data-[active]:text-(--ui-primary) gap-1',
					item: 'py-0!',
					list: 'gap-x-0',
					linkTrailingIcon: 'size-4 mt-0.5',
					content: 'w-60!',
					viewportWrapper: 'w-[unset]!',
				}"
				variant="link"
				:items="items"
				content-orientation="vertical"
			/>
			<UiBetterColorModeButton />
		</template>

		<template #body>
			<UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
		</template>
	</UHeader>
</template>
