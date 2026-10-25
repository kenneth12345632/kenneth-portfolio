import { Topolines } from 'topolines/react'

export default function TopographicBackground() {
  return (
    <div
      aria-hidden="true"
      className="topographic-background"
    >
      <Topolines
        seed="portfolio-terrain"
        color="#e04242"
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  )
}