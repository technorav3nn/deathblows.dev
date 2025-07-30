<script setup lang="ts">
const {
	global: { twitter, github },
} = useAppConfig();
</script>

<template>
	<div>
		<p class="text-muted">17 &#8226; he/him</p>
		<h2 class="mt-2 text-md">software engineer and highschooler from the united states</h2>
		<section class="mt-5 text-text-toned">
			<p>things i like making:</p>
			<ul class="list-disc ml-4">
				<li>websites, frontend and backend</li>
				<li>discord bots</li>
				<li>desktop apps</li>
			</ul>
		</section>
		<section class="mt-6">
			<div class="grid md:grid-cols-6 grid-cols-3 grid-rows-[repeat(4,100px)] md:grid-rows-[repeat(3,100px)] mt-8 gap-3">
				<div class="col-span-2">
					<HomeCardsDiscordStatus class="h-full" />
				</div>
				<div class="col-span-3">
					<HomeCardsCurrentTime class="h-full" />
				</div>
				<div class="col-span-1 row-span-3 hidden md:block">
					<HomeCardsStackCarousel class="h-full" />
				</div>
				<div class="col-span-5 row-span-1 h-full md:hidden">
					<HomeCardsStackCarousel class="h-full" />
				</div>
				<div class="col-span-5 row-span-1 h-full">
					<HomeCardsNowPlaying class="h-full" />
				</div>
				<div class="col-span-2 md:col-span-3 row-span-1 h-full">
					<HomeCardsCurrentWeather class="h-full" />
				</div>
				<div class="col-span-3 md:col-span-2 row-span-1 h-full">
					<div class="grid gap-2 grid-rows-2 h-full *:rounded-xl">
						<UButton
							:to="twitter"
							external
							target="_blank"
							rel="noopener noreferrer"
							block
							icon="i-simple-icons-twitter"
							class=""
							color="info"
							variant="subtle"
						>
							twitter
						</UButton>
						<UButton
							:to="github"
							external
							target="_blank"
							rel="noopener noreferrer"
							block
							icon="i-simple-icons-github"
							class="dark:bg-[#1c1d1f] dark:hover:bg-[#222325] dark:ring-[#2e3134]"
							color="neutral"
							variant="subtle"
						>
							github
						</UButton>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
