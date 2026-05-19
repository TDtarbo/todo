import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';

const client = createClient({
    url: 'file:app.db',
});

const dataBase = drizzle(client);

export default dataBase;
