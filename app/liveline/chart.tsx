"use client"

import { useEffect, useMemo, useState } from "react"
import { Liveline } from "liveline"

type LivelinePoint = {
  time: number
  value: number
}

type CandlePoint = {
  time: number
  open: number
  high: number
  low: number
  close: number
}

type ChartMode = "line" | "candle"

const windows = [
  { label: "1m", secs: 60 },
  { label: "5m", secs: 60 * 5 },
  { label: "10m", secs: 60 * 10 },
]

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value))
}

function createInitialData(): LivelinePoint[] {
  const now = Date.now() / 1000

  return Array.from({ length: 240 }, (_, index) => {
    const progress = index / 239

    return {
      time: now - 60 + progress * 60,
      value: 400 + Math.sin(progress * 10) * 6,
    }
  })
}

function createCandles(points: LivelinePoint[], bucketSecs = 5): CandlePoint[] {
  const buckets = new Map<number, LivelinePoint[]>()

  for (const point of points) {
    const bucketTime = Math.floor(point.time / bucketSecs) * bucketSecs
    const bucket = buckets.get(bucketTime)

    if (bucket) bucket.push(point)
    else buckets.set(bucketTime, [point])
  }

  return Array.from(buckets.entries()).map(([time, bucket]) => {
    const values = bucket.map((point) => point.value)

    return {
      time,
      open: values[0],
      high: Math.max(...values),
      low: Math.min(...values),
      close: values[values.length - 1],
    }
  })
}

export default function Chart() {
  const [windowSecs, setWindowSecs] = useState(60)
  const [mode, setMode] = useState<ChartMode>("line")
  const [value, setValue] = useState(400)
  const [data, setData] = useState<LivelinePoint[]>(createInitialData)

  const candles = useMemo(() => createCandles(data, 5), [data])

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((previousValue) => {
        const noise = (Math.random() - 0.5) * 1.2
        const trend = (Math.random() - 0.5) * 0.4
        const nextValue = clamp(previousValue + noise + trend, 360, 440)

        setData((previousData) => {
          const nextPoint = {
            time: Date.now() / 1000,
            value: nextValue,
          }

          return [...previousData, nextPoint].slice(-3000)
        })

        return nextValue
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 720,
        height: "clamp(220px, 55vw, 360px)",
        overflow: "hidden",
      }}
    >
      <Liveline
        data={data}
        value={value}
        window={windowSecs}
        windows={windows}
        onWindowChange={setWindowSecs}
        mode={mode}
        onModeChange={setMode}
        candles={candles}
        liveCandle={candles[candles.length - 1]}
        candleWidth={5}
        theme="light"
        color="#8b5cf6"
        fill
        scrub
        showValue
        lineWidth={1.5}
        lerpSpeed={0.12}
        padding={{
          top: 32,
          right: 72,
          bottom: 70,
          left: 16,
        }}
      />
    </div>
  )
}