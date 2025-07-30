import type { WeatherApiResponse } from "~~/server/types/weather";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const getWeatherByCityUrl = (city: string, country: string, params: Record<string, string>) =>
	`${BASE_URL}?q=${city},${country}&appid=${params.appid}&lang=${params.lang}&units=${params.units}`;

export default defineCachedEventHandler(
	async (event) => {
		const { openWeatherApiKey } = useRuntimeConfig(event);
		const weather = await $fetch<WeatherApiResponse>(
			getWeatherByCityUrl("Boston", "us", {
				appid: openWeatherApiKey,
				lang: "en",
				units: "imperial",
			})
		);
		if (!weather) {
			throw createError({
				statusCode: 404,
				statusMessage: "Weather data not found",
			});
		}

		return weather;
	},
	{
		maxAge: 60 * 60,
	}
);
