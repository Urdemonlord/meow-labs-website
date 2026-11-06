import "@/lib/iso/iso.css"
import { processFigureSvg } from "./process-figure-art"
import { ProcessFigureLive } from "./process-figure-live"

export const processStages = ["Diskusi", "Perancangan", "Pengembangan", "Peluncuran"] as const

// Figur isometrik dari skill anatomy. Gambar statis dirender di server,
// gerakannya ditangani ProcessFigureLive.
export function ProcessFigure() {
  return (
    <figure className="iso process-figure m-0">
      <div className="iso-plate">
        <div className="iso-plate-corners" aria-hidden="true">
          <span className="iso-plate-corner" data-corner="fig">
            Fig 06
          </span>
          <span className="iso-plate-corner" data-corner="title">
            Meja proses
          </span>
          <span className="iso-plate-corner" data-corner="hint">
            Arahkan kursor untuk menggeser
          </span>
          <span className="iso-plate-corner" data-corner="readout" data-process-readout>
            01 / 04 · {processStages[0]} · 25%
          </span>
        </div>
        <ProcessFigureLive stages={processStages}>
          <div dangerouslySetInnerHTML={{ __html: processFigureSvg }} />
        </ProcessFigureLive>
      </div>
      <figcaption className="iso-legend">
        <span className="iso-caption">
          Satu proyek, empat stasiun. Di tiap tahap proyek bertambah satu lapisan dan jarum dial naik 25%, sampai siap
          diluncurkan.
        </span>
      </figcaption>
    </figure>
  )
}
