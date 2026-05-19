import { ipcMain } from 'electron';
import { getMessage } from '../services/test.js';

ipcMain.handle('test:getMessage', async (): Promise<string> => {
    return getMessage();
});
