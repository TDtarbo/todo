const message: string = 'This is the message to pass to the front';

export const getMessage = async () => {
    try {
        const [{ default: dataBase }, { default: todosTable }] =
            await Promise.all([
                import('../db/database.js'),
                import('../db/schema.js'),
            ]);

        const [insertedTodo] = await dataBase
            .insert(todosTable)
            .values({
                title: 'Yoo',
            })
            .returning({ insertedId: todosTable.id });

        return insertedTodo?.insertedId?.toString() ?? message;
    } catch (error) {
        const details =
            error instanceof Error ? error.message : 'Unknown database error';

        console.log(`${message}\n\nDatabase is not ready yet:\n${details}`);
        return `${message}\n\nDatabase is not ready yet:\n${details}`;
    }
};
