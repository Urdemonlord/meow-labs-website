import "@/lib/iso/iso.css";
import { processFigureSvg } from "@/components/home/process-figure-art";
import { ProcessFigureLive } from "@/components/home/process-figure-live";
import { processStages } from "@/components/home/process-figure";

// Pratinjau opsi 2: figur isometrik versi kertas mengisi bingkai hero.
export function HeroAnatomyVisual() {
  return (
    <div className="absolute inset-0">
      <div
        className="iso hero-figure iso-plate flex h-full items-center px-4"
        data-theme="light"
      >
        <div className="iso-plate-corners" aria-hidden="true">
          <span className="iso-plate-corner" data-corner="fig">
            Fig 01
          </span>
          <span className="iso-plate-corner" data-corner="title">
            Cara kami bekerja
          </span>
          <span
            className="iso-plate-corner"
            data-corner="readout"
            data-process-readout
          >
            01 / 04 · Diskusi · 25%
          </span>
        </div>
        <div className="w-full">
          <ProcessFigureLive stages={processStages}>
            <div dangerouslySetInnerHTML={{ __html: processFigureSvg }} />
          </ProcessFigureLive>
        </div>
      </div>
    </div>
  );
}
