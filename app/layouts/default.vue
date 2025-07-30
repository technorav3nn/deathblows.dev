<template>
	<div>
		<UContainer class="flex flex-col border-default pt-6 pb-4 max-w-[38rem] px-1! min-h-screen">
			<AppHeader />
			<div class="w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 h-full">
				<slot />
			</div>
			<AppFooter class="self-center mt-auto" />
		</UContainer>
	</div>
</template>
