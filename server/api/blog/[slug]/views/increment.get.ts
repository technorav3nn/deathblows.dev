export default defineEventHandler(async () => {
	const db = useDatabase();

	console.log(await db.sql`SELECT 1`);
	return "ok";
});
