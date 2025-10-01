export async function useLastFmRecentTracks() {
	const {
		public: { lastFmApiKey, lastFmUsername },
	} = useRuntimeConfig();
	const { data: recentTracks } = await useFetch<Track[]>(
		`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${lastFmUsername}&api_key=${lastFmApiKey}&format=json`,
		{
			transform: (d) => (d as unknown as LastFMResponseBody).recenttracks.track!.splice(1),
		}
	);
	return recentTracks;
}

/**
 * Copyright 2020 Alistair Smith
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://github.com/alii/use-last-fm/blob/master/LICENSE.
 *
 * Some code in this file is adapted from the original
 * `use-last-fm` package, which is licensed under the MIT license.
 * Source: {@link https://github.com/alii/use-last-fm/blob/master/src/index.ts}
 */
export function useLastFmNowPlaying(refetchInterval?: number, imageSize: TrackImage["size"] = "extralarge"): ComputedRef<State> {
	const {
		public: { lastFmApiKey, lastFmUsername },
	} = useRuntimeConfig();
	const endpoint = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${lastFmUsername}&api_key=${lastFmApiKey}&format=json&limit=1`;

	const { data: track, refresh } = useLazyFetch<LastFMResponseBody>(endpoint, { server: false });
	if (refetchInterval) {
		onMounted(() => setInterval(() => refresh(), refetchInterval));
	}

	const song = computed(() => parseSong(track.value!, imageSize));
	return song;
}

/**
 * Source: {@link https://github.com/alii/use-last-fm/blob/master/src/lib.ts}
 */
function parseSong(body: LastFMResponseBody | null, imageSize: TrackImage["size"]): State {
	if (!body) {
		return {
			status: "connecting",
			song: null,
		};
	}

	const lastSong = body.recenttracks.track?.[0];

	if (!lastSong || !lastSong["@attr"]?.nowplaying) {
		return {
			status: "idle",
			song: null,
		};
	}

	const image = lastSong.image.find((i) => {
		return i.size === imageSize;
	});

	return {
		status: "playing",
		song: {
			name: lastSong.name,
			artist: lastSong.artist["#text"],
			art: image?.["#text"] ?? lastSong?.image?.[0]?.["#text"] ?? "",
			url: lastSong.url,
			album: lastSong.album["#text"],
			albumMbid: lastSong.album.mbid === "" ? null : lastSong.album.mbid,
			trackMbid: lastSong.mbid === "" ? null : lastSong.mbid,
		},
	};
}

/**
 * Source for all the types: {@link https://github.com/alii/use-last-fm/blob/master/src/types.ts}
 */
export interface RecentTracks {
	/**
	 * Attributes
	 */
	"@attr": RecentTracksAttr;
	/**
	 * Array of recently played tracks
	 */
	track?: Track[];
}

export interface RecentTracksAttr {
	/**
	 * Page
	 */
	page: string;
	/**
	 * Total tracks ever listened to
	 */
	total: string;
	/**
	 * The username
	 */
	user: string;
	/**
	 * How many songs are listed per page
	 */
	perPage: string;
	/**
	 * Total amount of pages (total / perPage)
	 */
	totalPages: string;
}

export interface Track {
	/**
	 * The artist of the track
	 */
	artist: TrackArtist;
	/**
	 * Attributes
	 */
	"@attr"?: TrackAttr;
	/**
	 * MusicBrainz Identifier
	 */
	mbid: string;
	/**
	 * The Album
	 */
	album: TrackAlbum;
	/**
	 * Unsure!
	 */
	streamable: string;
	/**
	 * URL Of the song
	 */
	url: string;
	/**
	 * The name of the song
	 */
	name: string;
	/**
	 * Array of images
	 */
	image: TrackImage[];
	/**
	 * The date the track was made
	 */
	date?: TrackDate;
}

export interface TrackArtist {
	/**
	 * MusicBrainz Identifier
	 */
	mbid: string;
	/**
	 * Name of the artist
	 */
	"#text": string;
}

export interface TrackAttr {
	/**
	 * If the track is currently playing
	 */
	nowplaying: string;
}

export interface TrackAlbum {
	/**
	 * MusicBrainz identifier
	 */
	mbid: string;
	/**
	 * Album name
	 */
	"#text": string;
}

export interface TrackImage {
	/**
	 * Size of the image
	 */
	size: "small" | "medium" | "large" | "extralarge";
	/**
	 * URL to the image
	 */
	"#text": string;
}

/**
 * When the song was listened to
 */
export interface TrackDate {
	/**
	 * Timestamp
	 */
	uts: string;
	/**
	 * Human readable text
	 */
	"#text": string;
}

export type Song = {
	/**
	 * The name of the track
	 */
	name: Track["name"];
	/**
	 * The name of the artist
	 */
	artist: TrackArtist["#text"];
	/**
	 * The URL of the album art
	 */
	art: TrackImage["#text"];
	/**
	 * The album name
	 */
	album: TrackAlbum["#text"];
	/**
	 * The URL of the track
	 */
	url: Track["url"];
	/**
	 * MusicBrainz Identifier for the given track
	 */
	trackMbid: Track["mbid"] | null;
	/**
	 * MusicBrainz Identifier for the given album
	 */
	albumMbid: TrackAlbum["mbid"] | null;
};

export interface LastFMResponseBody {
	/**
	 * All tracks
	 */
	recenttracks: RecentTracks;
}

export type State =
	| {
			status: "connecting" | "idle" | "error";
			song: null;
	  }
	| {
			status: "playing";
			song: Song;
	  };
