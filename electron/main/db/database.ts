import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';

const sqlite3 = new Database('app.db');
const dataBase = drizzle(sqlite3);

export default dataBase;
