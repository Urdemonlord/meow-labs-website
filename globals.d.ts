declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// ascii-magic-art tidak menyertakan tipe TypeScript.
declare module 'ascii-magic-art/pieces/*.js' {
  export const meta: { slug: string; cols: number; rows: number; fps: number; [key: string]: unknown }
  const create: (...args: unknown[]) => (t: number) => unknown
  export default create
}

declare module 'ascii-magic-art/runtime/player.js' {
  export function play(
    pre: HTMLPreElement,
    mod: unknown,
    opts?: { speed?: number; still?: boolean; look?: Record<string, unknown> },
  ): () => void
}
