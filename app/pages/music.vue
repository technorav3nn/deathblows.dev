<script setup lang="ts">
const title = "music";
const description = "my recent music i've listened to, taken from last.fm";
useSeoMeta({
	title,
	description,
	ogTitle: title,
	ogDescription: description,
});

const links = [
	{ label: "recents", to: "/music", icon: "i-lucide-clock", exact: true },
	{ label: "top albums", to: "/music/top-albums", icon: "i-lucide-images" },
	// { label: "top tracks", to: "/music/top", icon: "i-lucide-music" },
	// { label: "top albums", to: "/music/albums", icon: "i-lucide-album" },
];

const {
	global: { lastfm },
} = useAppConfig();
</script>

<template>
	<div>
		<h2 class="text-xl font-semibold">{{ title }}</h2>
		<p class="text-muted text-sm mb-4">
			{{ description }}. i use apple music as my music player, so sometimes not all my music might be scrobbled
		</p>
		<UButton size="sm" :to="lastfm" target="_blank" rel="noopener noreferrer" class="mb-4" trailing-icon="i-lucide-external-link">
			my last.fm
		</UButton>
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
