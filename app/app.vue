<script setup lang="ts">
const colorMode = useColorMode();
const color = computed(() => (colorMode.value === "dark" ? "#020618" : "white"));

useSeoMeta({
	titleTemplate: "%s - deathblows.dev",
});

useHead({
	meta: [
		{ charset: "utf-8" },
		{ name: "viewport", content: "width=device-width, initial-scale=1" },
		{ key: "theme-color", name: "theme-color", content: color },
	],
	link: [{ rel: "icon", href: "/favicon.ico" }],
	htmlAttrs: {
		lang: "en",
	},
});
</script>

<template>
	<UApp>
		<div class="bg-default" data-vaul-drawer-wrapper>
			<NuxtLayout>
				<UMain class="relative mt-3 min-h-auto! w-full">
					<NuxtPage />
				</UMain>
			</NuxtLayout>
		</div>
	</UApp>
</template>
