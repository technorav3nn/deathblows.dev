<script setup lang="ts">
const items = [
	{ name: "css3", icon: "i-devicon-css3", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
	{ name: "html5", icon: "i-devicon-html5", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
	{ name: "vue", icon: "i-logos-vue", link: "https://vuejs.org/" },
	{ name: "tailwind css", icon: "i-logos-tailwindcss-icon", link: "https://tailwindcss.com/" },
	{ name: "vite", icon: "i-logos-vitejs", link: "https://vitejs.dev/" },
	{ name: "react", icon: "i-logos-react", link: "https://reactjs.org/" },
	{ name: "next.js", icon: "i-logos-nextjs-icon", link: "https://nextjs.org/" },
	{ name: "svelte", icon: "i-logos-svelte-icon", link: "https://svelte.dev/" },
	{ name: "nuxt", icon: "i-logos-nuxt-icon", link: "https://nuxt.com/" },
	{ name: "typescript", icon: "i-logos-typescript-icon", link: "https://www.typescriptlang.org/" },
	{ name: "javascript", icon: "i-logos-javascript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
	{ name: "node.js", icon: "i-logos-nodejs-icon", link: "https://nodejs.org/" },
	{ name: "rust", icon: "i-logos-rust", link: "https://www.rust-lang.org/" },
	{ name: "docker", icon: "i-logos-docker-icon", link: "https://www.docker.com/" },
	{ name: "postgresql", icon: "i-logos-postgresql", link: "https://www.postgresql.org/" },
	{ name: "drizzle", icon: "i-simple-icons-drizzle", link: "https://orm.drizzle.team/" },
	{ name: "prisma", icon: "i-skill-icons-prisma", link: "https://www.prisma.io/" },
];

const [DefineCarouselItems, ReuseCarouselItems] = createReusableTemplate();
</script>

<template>
	<DefineCarouselItems>
		<UTooltip v-for="item in items" :key="item.name" :text="item.name" :delay-duration="0" :content="{ side: 'top' }">
			<NuxtLink
				external
				:to="item.link"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center justify-center size-10 shrink-0"
			>
				<UIcon :name="item.icon" class="size-10 shrink-0 w-full hover:scale-115 transition-transform" />
			</NuxtLink>
		</UTooltip>
	</DefineCarouselItems>

	<UCard variant="subtle" class="rounded-xl overflow-hidden relative hidden md:block" :ui="{ body: 'p-0!' }">
		<p class="text-center text-sm font-semibold absolute z-30 inset-0 top-2 h-min">my skills</p>
		<UPageMarquee
			:ui="{ root: '[--duration:35s] [--gap:--spacing(10)]' }"
			pause-on-hover
			orientation="vertical"
			class="h-[325px] rounded-xl overflow-hidden"
		>
			<ReuseCarouselItems />
		</UPageMarquee>
	</UCard>
	<UCard variant="subtle" class="rounded-xl overflow-hidden relative md:hidden h-full" :ui="{ body: 'p-0! h-full!' }">
		<p class="text-center text-sm font-semibold absolute z-30 inset-0 top-1 h-min">my skills</p>
		<UPageMarquee
			:ui="{ root: '[--duration:35s] [--gap:--spacing(10)]' }"
			pause-on-hover
			orientation="horizontal"
			class="h-full rounded-xl overflow-hidden w-[101%]"
		>
			<ReuseCarouselItems />
		</UPageMarquee>
	</UCard>
</template>
