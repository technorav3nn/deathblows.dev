<script setup lang="ts">
const title = "games";
const description = "all of my favorite normal and roblox games!";
useSeoMeta({
	title,
	description,
	ogTitle: title,
	ogDescription: description,
});

const links = [
	{ label: "normal games", to: "/games", icon: "i-lucide-gamepad-2", exact: true },
	{ label: "roblox games", to: "/games/roblox", icon: "i-proicons-roblox" },
];
</script>

<template>
	<div>
		<h2 class="text-xl font-semibold">{{ title }}</h2>
		<p class="text-muted text-sm mb-2">
			{{ description }}
		</p>

		<section class="border-b border-neutral-200 dark:border-neutral-800 w-full mb-4">
			<UNavigationMenu
				variant="pill"
				highlight
				:ui="{
					link: 'after:h-[2px] after:absolute after:-bottom-2 after:inset-x-0 ',
					linkLabel: 'overflow-clip text-wrap',
					linkLeadingIcon: 'size-[15px] sm:size-5 last-of-type:hidden',
				}"
				class="data-[orientation=vertical]:w-48"
				:items="links"
			/>
		</section>

		<NuxtPage />
	</div>
</template>
