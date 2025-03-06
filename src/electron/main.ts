import { app, BrowserWindow, ipcMain, Tray } from 'electron'
import path from "path"
import { isDev } from './util.js';
import { getData, pollResources } from './resourceManager.js';
import { getAssetPath, getPreloadPath } from './pathResolver.js';



app.on('ready', () => {
    const mainWindow = new BrowserWindow({
        webPreferences: {
            preload: getPreloadPath()
        }
    });
    if (isDev()) {
        mainWindow.loadURL("http://localhost:3000")

    } else {
        mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"))
    }
    pollResources(mainWindow);
    ipcMain.handle("getData", () => {
        return getData();
    })

    new Tray(path.join(getAssetPath(), "trayIcon.png"))

})