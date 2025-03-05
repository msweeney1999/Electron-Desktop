import osUtils from 'os-utils'
import os from 'os'
import { BrowserWindow } from 'electron'

const log = (msg: string) => {
    console.log(msg)
}
export function pollResources(main: BrowserWindow) {

    setInterval(async () => {
        const cpu = await getCPU();
        const ram = getMem()

        //log(`${cpu} ${ram}`)
        console.log({ cpu, ram })
        main.webContents.send("statistics", { cpu, ram });

    }, 5000)

}
function getCPU() {
    return new Promise((res) => {
        //osUtils.cpuUsage((p) => console.log(p))
        osUtils.cpuUsage(res)

    })
}

const getMem = () => {
    return 1 - osUtils.freememPercentage()
}

export function getData() {
    const cpuModel = os.cpus()[0].model;
    const mem = Math.floor(osUtils.totalmem()) / 1024;
    return { cpuModel, mem }
}