import { ipcMain } from 'electron';
import { getMessage } from '../services/test.js';

ipcMain.handle('test:getMessage', (): string => {
    return getMessage();
});
