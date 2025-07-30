export interface WeatherApiResponse {
	clouds: {
		all: number;
	};
	id: number;
	main: {
		humidity: number;
		pressure: number;
		temp: number;
		temp_max: number;
		temp_min: number;
		grnd_level?: number | undefined;
		sea_level?: number | undefined;
	};
	base: string;
	cod: number;
	coord: {
		lon: number;
		lat: number;
	};
	dt: number;
	name: string;
	sys: {
		country: string;
		sunrise: number;
		sunset: number;
		message?: number | undefined;
		type?: number | undefined;
		id?: number | undefined;
	};
	timezone: number;
	visibility: number;
	weather: {
		id: number;
		description: string;
		icon:
			| "01d"
			| "02d"
			| "03d"
			| "04d"
			| "09d"
			| "10d"
			| "11d"
			| "13d"
			| "50d"
			| "01n"
			| "02n"
			| "03n"
			| "04n"
			| "09n"
			| "10n"
			| "11n"
			| "13n"
			| "50n";
		main: string;
	}[];
	wind: {
		speed: number;
		deg: number;
	};
	rain?:
		| {
				"1h"?: number | undefined;
				"3h"?: number | undefined;
		  }
		| undefined;
	snow?:
		| {
				"1h"?: number | undefined;
				"3h"?: number | undefined;
		  }
		| undefined;
}
