<script setup lang="ts">
const {
	global: { projects },
} = useAppConfig();

const title = "projects";
const description = "all the projects i've spent time on";
useSeoMeta({
	title,
	description,
	ogTitle: title,
	ogDescription: description,
});
</script>

<template>
	<div>
		<h2 class="text-xl font-semibold">projects</h2>
		<p class="text-muted text-sm mb-4">all the projects i've spent time on</p>
		<USeparator class="mb-4" />

		<div class="space-y-3">
			<ProjectsProjectCard v-for="project in projects" :key="project.name" :project />
		</div>
	</div>
</template>
