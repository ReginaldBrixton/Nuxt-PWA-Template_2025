import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const sizes = [64, 192, 512]
const iconDirectory = path.join(process.cwd(), 'public', 'icons')

// Create the icons directory if it doesn't exist
if (!fs.existsSync(iconDirectory)) {
  fs.mkdirSync(iconDirectory, { recursive: true })
}

// Create a default icon (a simple colored square)
const defaultIcon = Buffer.from(`
<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#4f46e5"/>
  <text x="50%" y="50%" font-family="Arial" font-size="160" fill="white" text-anchor="middle" dy=".3em">PWA</text>
</svg>`)

async function generateIcons() {
  try {
    for (const size of sizes) {
      await sharp(defaultIcon)
        .resize(size, size)
        .toFile(path.join(iconDirectory, `${size}x${size}.png`))
      console.log(`Generated ${size}x${size} icon`)
    }
    console.log('All icons generated successfully!')
  } catch (error) {
    console.error('Error generating icons:', error)
  }
}

generateIcons() 