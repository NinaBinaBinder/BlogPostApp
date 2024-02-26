import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { DATABASE_URL as connectionString } from "./conn";

if (connectionString === undefined) {
  throw new Error("NO Connection string given");
}
const client = postgres(connectionString);
const db = drizzle(client);

export default db;
