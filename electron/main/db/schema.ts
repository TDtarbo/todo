import { sql } from 'drizzle-orm';
import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

const todosTable = sqliteTable('todos', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    title: text('title').notNull(),
    isCompleted: integer('is_completed').notNull().default(0),
    dueDate: integer('due_date'),
    timestamp: integer('timestamp')
        .notNull()
        .default(sql`(unixepoch())`),
    priority: text('priority'),
    tag: text('tag'),
});

export default todosTable;
