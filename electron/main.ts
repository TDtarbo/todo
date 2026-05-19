import { app, BrowserWindow, Menu } from 'electron';
import 'dotenv/config';
import path from 'path';

const isDev = !app.isPackaged;
const rendererHtmlPath = path.resolve(app.getAppPath(), 'dist', 'index.html');
const rendererDevUrl = process.env.VITE_DEV_SERVER_URL ?? 'http://localhost:5173';

Menu.setApplicationMenu(null);

const createWindow = (): void => {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false,
        },
    });

    if (isDev) {
        win.loadURL(rendererDevUrl);
    } else {
        win.loadFile(rendererHtmlPath);
    }
};

app.whenReady().then(() => {
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
