import fs from "node:fs"
import path from "node:path"

const ROOT = process.cwd()
const TARGETS = ["README.md", "app", "components", "lib"]
const ALLOWED_EXTENSIONS = new Set([".md", ".tsx", ".ts", ".jsx", ".js", ".json", ".mjs", ".cjs"])
const SKIP_DIRS = new Set(["node_modules", ".next", ".git", "dist", "out", "coverage"])

const suspiciousPatterns = [
  { label: "replacement-character", regex: /\uFFFD/u },
  { label: "mojibake-sequence", regex: /(?:Ã.|Â.|â€™|â€œ|â€\x9d|â€“|â€”|â€¢|ðŸ|ï¸|Â©)/u },
]

function walk(targetPath, files) {
  if (!fs.existsSync(targetPath)) return

  const stat = fs.statSync(targetPath)
  if (stat.isFile()) {
    const extension = path.extname(targetPath)
    if (ALLOWED_EXTENSIONS.has(extension) || path.basename(targetPath) === "README.md") {
      files.push(targetPath)
    }
    return
  }

  const entries = fs.readdirSync(targetPath, { withFileTypes: true })
  for (const entry of entries) {
    if (entry.isDirectory() && SKIP_DIRS.has(entry.name)) continue
    walk(path.join(targetPath, entry.name), files)
  }
}

function collectFindings(filePath) {
  const findings = []
  const content = fs.readFileSync(filePath, "utf8")
  const lines = content.split(/\r?\n/)

  lines.forEach((line, index) => {
    suspiciousPatterns.forEach(({ label, regex }) => {
      if (regex.test(line)) {
        findings.push({
          line: index + 1,
          label,
          preview: line.trim().slice(0, 180),
        })
      }
      regex.lastIndex = 0
    })
  })

  return findings
}

const filesToCheck = []
for (const target of TARGETS) {
  walk(path.join(ROOT, target), filesToCheck)
}

const allFindings = []
for (const filePath of filesToCheck) {
  const findings = collectFindings(filePath)
  if (findings.length > 0) {
    allFindings.push({ filePath, findings })
  }
}

if (allFindings.length > 0) {
  console.error("Text integrity check failed. Suspicious encoding patterns found:\n")
  for (const fileFinding of allFindings) {
    const relativePath = path.relative(ROOT, fileFinding.filePath)
    for (const finding of fileFinding.findings) {
      console.error(`${relativePath}:${finding.line} [${finding.label}] ${finding.preview}`)
    }
  }

  process.exit(1)
}

console.log(`Text integrity check passed. Scanned ${filesToCheck.length} files.`)
