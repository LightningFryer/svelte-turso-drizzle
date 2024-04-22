import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { DRIZZLE_DATABASE_URL, TURSO_AUTH_TOKEN } from "$env/static/private";

const turso = createClient({
  url: DRIZZLE_DATABASE_URL,
  authToken: TURSO_AUTH_TOKEN,
});

export const db = drizzle(turso);
