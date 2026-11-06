"use client";

import { useEffect, useRef, useState } from "react";
import { heroAscii } from "./hero-ascii-data";

const CELL_W = 0.602;

// Pratinjau opsi 1: artwork candi digambar ulang sebagai ASCII berwarna.
export function HeroAsciiArt() {
  const boxRef = useRef<HTMLDivElement>(null);
  const preRef = useRef<HTMLPreElement>(null);
  const [size, setSize] = useState(0);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    const fit = () => setSize(box.clientWidth / (heroAscii.cols * CELL_W));
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(box);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!size || !preRef.current) return;
    const pre = preRef.current;
    let stop: (() => void) | undefined;
    let cancelled = false;
    Promise.all([
      import("ascii-magic-art/lib/image.js"),
      import("ascii-magic-art/runtime/player.js"),
    ]).then(([img, player]) => {
      if (cancelled) return;
      const meta = {
        slug: "hero-temple",
        cols: heroAscii.cols,
        rows: heroAscii.rows,
        fps: 20,
        palette: heroAscii.palette,
      };
      const create = img.imagePiece(meta, heroAscii, {
        glint: { every: 6, width: 10 },
        twinkle: 0.5,
      });
      stop = player.play(
        pre,
        { meta, default: create },
        { look: { look: "dense", all: true } },
      );
    });
    return () => {
      cancelled = true;
      stop?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size > 0]);

  return (
    <div
      ref={boxRef}
      className="absolute inset-0 flex items-center justify-center bg-[#0e0f0d] [&_canvas]:!h-auto [&_canvas]:!w-full"
    >
      <pre
        ref={preRef}
        aria-hidden="true"
        className="m-0 font-mono leading-none text-[#e4e4e7]"
        style={{ fontSize: size || 8 }}
      />
    </div>
  );
}
