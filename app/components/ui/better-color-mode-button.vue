<script setup lang="ts">
const appConfig = useAppConfig();
</script>

<template>
	<UButton square color="neutral" variant="ghost" @click="$colorMode.value = $colorMode.value === 'dark' ? 'light' : 'dark'">
		<UIcon :name="appConfig.ui.icons.light" class="block dark:hidden size-5" />
		<UIcon :name="appConfig.ui.icons.dark" class="hidden dark:block size-5" />
	</UButton>
</template>
