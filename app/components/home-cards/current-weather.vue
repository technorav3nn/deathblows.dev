<script setup lang="ts">
const { data: weather, status } = useLazyFetch("/api/weather", { server: false });

const MAIN_WEATHER_TO_BG_GRADIENT_COLOR = {
	Clear: "from-blue-300 to-sky-500 dark:from-blue-700 dark:to-sky-900",
	Clouds: "from-slate-200 to-slate-400 dark:from-slate-600 dark:to-slate-800",
	Rain: "from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-900",
	Drizzle: "from-blue-300 to-blue-500 dark:from-blue-500 dark:to-blue-800",
	Thunderstorm: "from-purple-400 to-violet-700 dark:from-purple-600 dark:to-violet-900",
	Snow: "from-slate-100 to-blue-100 dark:from-slate-400 dark:to-blue-700",
	Mist: "from-gray-300 to-gray-500 dark:from-gray-600 dark:to-gray-800",
	Haze: "from-amber-200 to-amber-400 dark:from-amber-600 dark:to-amber-800",
	Fog: "from-gray-200 to-gray-400 dark:from-gray-500 dark:to-gray-700",
} as Record<string, string>;

const MAIN_WEATHER_TO_ICON = {
	Clear: { icon: "i-lucide-sun", color: "text-amber-500 dark:text-amber-400" },
	Clouds: { icon: "i-lucide-cloudy", color: "text-slate-600 dark:text-slate-300" },
	Rain: { icon: "i-lucide-cloud-rain", color: "text-blue-600 dark:text-blue-400" },
	Drizzle: { icon: "i-lucide-cloud-drizzle", color: "text-blue-500 dark:text-blue-300" },
	Thunderstorm: { icon: "i-lucide-cloud-lightning", color: "text-violet-600 dark:text-violet-400" },
	Snow: { icon: "i-lucide-snowflake", color: "text-blue-200 dark:text-blue-100" },
	Mist: { icon: "i-lucide-cloud-fog", color: "text-gray-500 dark:text-gray-300" },
	Haze: { icon: "i-lucide-haze", color: "text-amber-600 dark:text-amber-300" },
	Fog: { icon: "i-lucide-cloud-fog", color: "text-gray-500 dark:text-gray-300" },
} as Record<string, { icon: string; color: string }>;
const CONDITION_TO_FIXED_CONDITION: Record<string, string> = {
	"clear sky": "Clear Skies",
	"few clouds": "Partly Cloudly",
	"scattered clouds": "Scattered Clouds",
	"broken clouds": "Broken Clouds",
	"shower rain": "Rain Showers",
	rain: "Rain",
	thunderstorm: "Thunderstorm",
	snow: "Snow",
	mist: "Mist",
};
</script>

<template>
	<UCard
		:class="MAIN_WEATHER_TO_BG_GRADIENT_COLOR[weather?.weather[0]?.main ?? 'Clear']"
		class="bg-gradient-to-tl rounded-xl relative"
		:ui="{ body: 'px-4! py-4! flex items-center' }"
		variant="subtle"
	>
		<p
			class="dark:opacity-10 opacity-15 text-2xl absolute text-nowrap text-center inset-0 top-17 left-[97.5%] -translate-x-[97.5%] w-max z-60 font-bold"
		>
			weather
		</p>
		<div class="flex flex-row gap-4">
			<div>
				<div class="flex flex-row gap-2 items-center">
					<UIcon
						:class="[MAIN_WEATHER_TO_ICON[weather?.weather?.[0]?.main ?? 'Clear']!.color, 'text-3xl']"
						:name="MAIN_WEATHER_TO_ICON[weather?.weather?.[0]?.main ?? 'Clear']!.icon"
						class="size-5"
					/>
					<p class="text-lg font-semibold">{{ status === "success" ? `${weather?.main.temp.toFixed(0)}°` : "loading..." }}</p>
				</div>
				<p class="text-toned text-sm lowercase">
					{{ status === "success" ? CONDITION_TO_FIXED_CONDITION[weather?.weather?.[0]?.description!] : "loading..." }}
				</p>
				<p class="text-toned text-xs lowercase">Boston, MA</p>
			</div>
		</div>
	</UCard>
</template>
