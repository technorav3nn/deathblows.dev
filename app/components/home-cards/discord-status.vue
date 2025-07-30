<script setup lang="ts">
import { get as getPresence } from "@prequist/lanyard";

const {
	public: { discordId },
} = useRuntimeConfig();

const { data: presence, status } = useLazyAsyncData(() => getPresence(discordId as `${bigint}`), { server: false });
const discordStatus = computed(() => presence.value?.discord_status ?? "offline");
const fixedStatus = computed(() =>
	discordStatus.value === "dnd" ? "do not disturb" : discordStatus.value!.charAt(0).toUpperCase() + discordStatus.value!.slice(1)
);

const gradientForStatus = computed(
	() =>
		({
			online: "dark:from-green-900 from-green-800 to-green-400/65",
			idle: "dark:from-yellow-900 from-yellow-800 to-yellow-400/65",
			dnd: "dark:from-red-900 from-red-800 to-red-400/65",
			offline: "dark:from-zinc-700 from-zinc-800 to-zinc-400/65",
		})[discordStatus.value] || "dark:from-zinc-700 from-zinc-800 to-zinc-400/65"
);
const gradientForStatusIndicator = computed(
	() =>
		({
			online: "dark:from-green-400 dark:to-green-700 from-green-200 to-green-500",
			idle: "dark:from-yellow-400 dark:to-yellow-700 from-yellow-200 to-yellow-500",
			dnd: "dark:from-red-400 dark:to-red-700 from-red-200 to-red-500",
			offline: "dark:from-zinc-400 dark:to-zinc-700 from-zinc-200 to-zinc-500",
		})[discordStatus.value] || "dark:from-zinc-400 dark:to-zinc-700 from-zinc-200 to-zinc-500"
);
const ringForStatus = computed(
	() =>
		({
			online: "dark:hover:ring-green-800 hover:ring-green-500",
			idle: "dark:hover:ring-yellow-800 hover:ring-yellow-500",
			dnd: "dark:hover:ring-red-800 hover:ring-red-500",
			offline: "dark:hover:ring-zinc-800 hover:ring-zinc-500",
		})[discordStatus.value] || "dark:hover:ring-zinc-800 hover:ring-zinc-500"
);
</script>

<template>
	<NuxtLink
		external
		:to="`https://discord.com/users/${discordId}`"
		target="_blank"
		rel="noopener noreferrer"
		class="hover:ring-[1.5px] transition-all ease-in-out"
		:class="`rounded-xl px-4 py-2 ring ring-default flex justify-between flex-col gap-1 bg-linear-to-br to-[100%] ${gradientForStatus} dark:to-transparent ${ringForStatus}`"
	>
		<div class="flex flex-row items-center gap-2 xs:gap-4 w-full">
			<UIcon name="i-simple-icons-discord" class="size-7 light:text-neutral-100 shrink-0" />
			<div class="flex flex-col xs:w-[94px]">
				<p class="wrap-break-word dark:text-text-highlighted text-neutral-100 font-medium text-sm">
					<span class="relative inline-flex size-2.5">
						<span
							:class="`animate-pulse relative inline-flex size-2.5 rounded-full bg-linear-to-br ${gradientForStatusIndicator}`"
						></span>
					</span>
					@{{ status === "success" ? presence?.discord_user?.username : "Loading..." }}
				</p>

				<p class="dark:text-text-toned/85 text-neutral-100 text-sm xs:text-nowrap wrap-break-word">{{ fixedStatus }}</p>
			</div>
		</div>
		<div v-if="presence && presence.activities.length > 0 && presence.activities?.[0]?.name">
			<p class="text-xs dark:text-text-toned/85 text-neutral-100 max-xs:truncate">
				<UIcon name="i-lucide-gamepad-2" class="dark:text-text-toned/85 text-neutral-100 size-4 align-middle" />
				playing <span class="font-semibold">{{ presence.activities[0].name }}</span>
			</p>
		</div>
		<div v-else>
			<p class="text-xs dark:text-text-toned/85 text-neutral-100 max-xs:truncate">
				<UIcon name="i-lucide-loader-2" class="dark:text-text-toned/85 text-neutral-100 size-4 align-middle animate-spin" />
				loading
			</p>
		</div>
	</NuxtLink>
</template>
