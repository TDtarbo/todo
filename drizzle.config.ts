import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    dialect: 'sqlite',
    schema: './electron/main/db/schema.ts',
    out: './drizzle', 
    dbCredentials: {
        url: 'file:app.db',
    },
});
