// codigo feito pelo ClaudeAI 

interface Bar {
  x: number
  width: number
  height: number
  opacity: number
}

function gaussian(x: number, mean: number, sigma: number) {
  const t = (x - mean) / sigma
  return Math.exp(-0.5 * t * t)
}

function MonitoramentoBars() {
  const svgWidth = 1800
  const svgHeight = 500

  const numBars = 15 // quantas barras gerar
  const gap = svgWidth / numBars
  const barWidth = Math.max( Math.round(gap * 0.90), 20 ) // um pouco mais grossas
  const mean = (numBars - 1) / 2
  const sigma = numBars / 6 // controla a "largura" da curva normal
  const minHeight = svgHeight * 0.18
  const maxExtra = svgHeight * 0.78

  const bars: Bar[] = new Array(numBars).fill(0).map((_, i) => {
    const x = i * gap + (gap - barWidth) / 2
    const g = gaussian(i, mean, sigma) // 0..1 (aprox)
    const height = Math.round(minHeight + g * maxExtra)
    const opacity = Math.max(0.18, 0.25 + g * 0.5) // mais alta no centro
    return {
      x,
      width: barWidth,
      height,
      opacity,
    }
  })

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    >
      {bars.map((bar, index) => (
        <rect
          key={index}
          x={bar.x}
          y={svgHeight - bar.height}
          width={bar.width}
          height={bar.height}
          fill="white"
          fillOpacity={bar.opacity}
          rx={6}
        />
      ))}
    </svg>
  )
}

export default MonitoramentoBars