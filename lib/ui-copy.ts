import copyData from "./ui-copy.json"

export const uiCopy = copyData

export type Locale = keyof typeof uiCopy
export type UiCopy = (typeof uiCopy)[Locale]
