// import { queryCollection } from "@nuxt/content/server";

export default defineTask({
	meta: {
		name: "db:migrate",
		description: "Run database migrations",
	},
	async run() {
		// const db = useDatabase();

		// await db.sql`CREATE TABLE IF NOT EXISTS blog (
		//     id INTEGER PRIMARY KEY AUTOINCREMENT,
		//     slug TEXT UNIQUE,
		//     views INTEGER DEFAULT 0
		// )`;
		// const posts = await queryCollection(useEvent(), "blog").all();
		// for (const post of posts) {
		//     const slug = post.id;
		//     const views = post.views || 0;
		//     await db.sql`INSERT OR IGNORE INTO blog (slug, views) VALUES (${slug}, ${views})`;
		// }

		// return { result: content };
		return { result: "ok" };
	},
});
