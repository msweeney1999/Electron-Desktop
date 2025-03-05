import osUtils from 'os-utils'
import os from 'os'
import { BrowserWindow } from 'electron'
//import { ipcWebContentsSend } from './util.js';

const log = (msg: string) => {
    console.log(msg)
}
export function pollResources(main: BrowserWindow) {

    setInterval(async () => {
        const cpu = await getCPU();
        const ram = getMem();

        //log(`${cpu} ${ram}`)
        //console.log({ cpu, ram })
        main.webContents.send("statistics", { cpu, ram });
        // ipcWebContentsSend('statistics', main.webContents, {
        //     cpu,
        //     ram
        // });

    }, 500)

}
function getCPU() {
    return new Promise((res) => {
        //osUtils.cpuUsage((p) => console.log(p))
        osUtils.cpuUsage(res)

    })
}

const getMem3 = () => {
    return 1 - osUtils.freememPercentage()
}
function getMem() {
    return 1 - osUtils.freememPercentage()

}
export function getData() {
    const cpuModel = os.cpus()[0].model;
    const mem = Math.floor(osUtils.totalmem()) / 1024;
    return { cpuModel, mem }
}

