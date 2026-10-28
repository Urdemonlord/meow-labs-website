import { BookOpen, FileText, GraduationCap, Rocket, School, Sparkles, Store } from "lucide-react"
import type { LucideIcon, LucideProps } from "lucide-react"
import type { ProductIconName } from "@/lib/products"

const icons: Record<ProductIconName, LucideIcon> = {
  Store,
  Rocket,
  Sparkles,
  School,
  GraduationCap,
  BookOpen,
  FileText,
}

export function ProductIcon({ name, ...props }: { name: ProductIconName } & LucideProps) {
  const Icon = icons[name]
  return <Icon {...props} />
}
