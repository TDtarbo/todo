import { app, BrowserWindow, Menu } from 'electron';
import 'dotenv/config';
import path from 'path';
import './ipc/test.js';

const isDev = !app.isPackaged;
const rendererHtmlPath = path.resolve(app.getAppPath(), 'dist', 'index.html');
const rendererDevUrl =
    process.env.VITE_DEV_SERVER_URL ?? 'http://localhost:5173';
const preloadPath = path.resolve(
    app.getAppPath(),
    'dist-electron',
    'preload',
    'preload.cjs',
);
Menu.setApplicationMenu(null);

const createWindow = (): void => {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            preload: preloadPath,
            contextIsolation: true,
            nodeIntegration: false,
        },
    });

    if (isDev) {
        win.loadURL(rendererDevUrl);
    } else {
        win.loadFile(rendererHtmlPath);
    }

    win.webContents.openDevTools();
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
