<script setup lang="ts">
import type { Project } from "~/app.config";

defineProps<{
	project: Project;
}>();
</script>

<template>
	<UCard
		:ui="{ body: 'px-4! sm:py-2! py-4! w-full' }"
		variant="subtle"
		class="flex w-full group flex-col sm:flex-row items-stretch gap-6"
	>
		<div class="flex flex-col justify-between py-2 gap-0 w-full">
			<div class="flex flex-col sm:flex-row gap-4 w-full">
				<img
					:src="project.image.src"
					:alt="project.image.src"
					width="64"
					height="64"
					class="object-contain size-[64px] self-center shrink-0"
				/>

				<div class="space-y-2 w-full">
					<div class="flex items-center justify-between w-full">
						<h3 class="text-lg font-semibold">{{ project.name }}</h3>
						<div class="flex items-center gap-2">
							<UButton
								v-if="project.github"
								class="rounded-full"
								icon="i-simple-icons-github"
								:href="project.github"
								target="_blank"
								rel="noopener noreferrer"
								color="neutral"
								variant="subtle"
								size="sm"
							>
								GitHub
							</UButton>
							<UButton
								v-if="project.link"
								class="rounded-full"
								trailing-icon="i-lucide-external-link"
								:href="project.link"
								target="_blank"
								rel="noopener noreferrer"
								color="neutral"
								variant="solid"
								size="sm"
								square
							/>
						</div>
					</div>
					<p class="text-sm text-muted-foreground line-clamp-2">
						{{ project.description }}
					</p>
					<div>
						<div class="flex flex-wrap gap-1.5">
							<UBadge v-for="tech in project.tech" :key="tech" size="md" color="neutral" variant="subtle" class="rounded-full">{{
								tech
							}}</UBadge>
						</div>
					</div>
				</div>
			</div>
		</div>
	</UCard>
</template>
