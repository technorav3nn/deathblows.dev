<template>
	<footer class="w-full mt-8 pt-8 px-4 sm:px-6 lg:px-8">
		<hr class="border-accented border-[0.8px] mb-1.5" />
		<div class="flex flex-row justify-between w-full">
			<div class="flex gap-x-1.5 items-center text-sm">
				<p>© {{ new Date().getFullYear() }} death_blows</p>
				<UBadge variant="subtle" color="info" size="sm" class="rounded-full">BETA</UBadge>
			</div>
			<div class="flex gap-x-1.5 items-center text-sm">
				<p>made with ❤️</p>
			</div>
		</div>
	</footer>
</template>
