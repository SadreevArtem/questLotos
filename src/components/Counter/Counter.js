// import moment from 'moment/moment'

import { useEffect, useState } from 'react'

export function Counter() {
  const [finishTime, setFinishTime] = useState(Date.now() + 120000)
  const [[diffH, diffM, diffS], setDiff] = useState([0, 0, 0])
  const [tick, setTick] = useState(false)
  const [isTimeout, setIsTimeout] = useState(false)
  const [timerId, setTimerID] = useState(0)

  useEffect(() => {
    const diff = (finishTime - new Date()) / 1000
    if (diff < 0) {
      setIsTimeout(true)
      setFinishTime(Date.now() + 120000)
      setIsTimeout(false)
      return
    }
    setDiff([
      Math.floor((diff / 3600) % 24),
      Math.floor((diff / 60) % 60),
      Math.floor(diff % 60),
    ])
  }, [tick, finishTime])

  useEffect(() => {
    if (isTimeout) clearInterval(timerId)
  }, [isTimeout, timerId])

  useEffect(() => {
    const timerID = setInterval(() => {
      setTick(!tick)
    }, 1000)
    setTimerID(timerID)
    return () => clearInterval(timerID)
  }, [tick])

  return (
    <h3>
      {`${diffH
        .toString()
        .padStart(2, '0')}:${diffM
        .toString()
        .padStart(2, '0')}:${diffS.toString().padStart(2, '0')}`}
    </h3>
  )
}
