import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const sizes = [64, 192, 512]
const iconDirectory = path.join(process.cwd(), 'public', 'icons')

fs.mkdirSync(iconDirectory, { recursive: true })

const iconSource = Buffer.from(`
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="background" x1="64" y1="48" x2="448" y2="464" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0f172a"/>
      <stop offset="1" stop-color="#020617"/>
    </linearGradient>
    <linearGradient id="accent" x1="130" y1="116" x2="396" y2="408" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6ee7b7"/>
      <stop offset="0.5" stop-color="#10b981"/>
      <stop offset="1" stop-color="#0ea5e9"/>
    </linearGradient>
    <filter id="shadow" x="72" y="72" width="368" height="368" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="18" stdDeviation="20" flood-color="#000000" flood-opacity="0.32"/>
    </filter>
  </defs>
  <rect width="512" height="512" rx="116" fill="url(#background)"/>
  <circle cx="256" cy="256" r="166" fill="#0f172a" stroke="#1e293b" stroke-width="8"/>
  <g filter="url(#shadow)">
    <path d="M154 338V174c0-16 13-29 29-29h20l106 151V145h49v193c0 16-13 29-29 29h-18L203 214v153h-20c-16 0-29-13-29-29Z" fill="url(#accent)"/>
    <path d="m306 151 66 0-42 65h50L292 332l25-82h-48l37-99Z" fill="#f8fafc" fill-opacity="0.94"/>
  </g>
</svg>`)

async function generateIcons() {
  for (const size of sizes) {
    await sharp(iconSource)
      .resize(size, size)
      .png({ compressionLevel: 9, adaptiveFiltering: true })
      .toFile(path.join(iconDirectory, `${size}x${size}.png`))

    console.log(`Generated ${size}x${size} icon`)
  }

  console.log('All icons generated successfully!')
}

generateIcons().catch((error) => {
  console.error('Error generating icons:', error)
  process.exitCode = 1
})
