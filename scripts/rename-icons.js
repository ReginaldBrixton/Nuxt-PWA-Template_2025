import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconsDir = path.join(__dirname, '../public/icons');

const renameMap = {
  '32x32.png': 'icon-72x72.png', // We'll use this as base for 72x72
  '64x64.png': 'icon-96x96.png', // We'll use this as base for 96x96
  '64x64.png': 'icon-128x128.png', // We'll use this as base for 128x128
  '144x144.png': 'icon-144x144.png',
  '144x144.png': 'icon-152x152.png', // We'll use 144 as base for 152
  '192x192.png': 'icon-192x192.png',
  '512x512.png': 'icon-384x384.png', // We'll use 512 as base for 384
  '512x512.png': 'icon-512x512.png',
};

// Copy and rename files
for (const [oldName, newName] of Object.entries(renameMap)) {
  const oldPath = path.join(iconsDir, oldName);
  const newPath = path.join(iconsDir, newName);
  
  try {
    await fs.access(oldPath);
    await fs.copyFile(oldPath, newPath);
    console.log(`Copied ${oldName} to ${newName}`);
  } catch {
    console.log(`Warning: ${oldName} not found`);
  }
}

// Create apple-touch-icon.png
await fs.copyFile(
  path.join(iconsDir, '192x192.png'),
  path.join(iconsDir, 'apple-touch-icon.png')
);



// To run the script
// node scripts/rename-icons.js