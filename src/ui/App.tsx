import { useEffect, useMemo, useState } from 'react'
import { useStatistics } from "./useStats.ts"
import './App.css'
import { Chart } from './Chart.tsx'

//https://youtu.be/fP-371MN0Ck?t=7477

function App() {
  const [count, setCount] = useState(0)
  //@ts-ignore
  //window.electron.getData();
  const stats = useStatistics(10);
  const cpuUsages = useMemo(
    () => stats.map((stat) => stat.cpu),
    [stats]
  )

  return (
    <>
      <div style={{ height: 120 }}>
        <Chart data={cpuUsages} maxDataPoints={10} selectedView="CPU" ></Chart>


      </div >
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
