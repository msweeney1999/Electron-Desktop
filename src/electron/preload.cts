const electron = require('electron')

electron.contextBridge.exposeInMainWorld("electron", {
    subscribeStatistics: (callback: (statistics: Statistics) => void) => {
        electron.ipcRenderer.on("statistics", (_: any, stats: any) => {

            callback(stats);
        })
    },

    getData: () => electron.ipcRender.invoke("getData")
})