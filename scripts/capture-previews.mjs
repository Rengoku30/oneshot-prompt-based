import { chromium } from "playwright";
import sharp from "sharp";
import { mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const previewsDir = path.join(rootDir, "previews");

const sites = [
  { folder: "mine_prompt", url: "http://localhost:5173/" },
  { folder: "rolebase_prompt", url: "http://localhost:5174/" },
  { folder: "qwen3.7max", url: "http://localhost:5175/" },
  { folder: "gemini3.1 pro", url: "http://localhost:5176/" },
];

function escapeXml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function createBadgeSvg(text) {
  const width = Math.max(220, text.length * 11 + 40);
  return Buffer.from(`<svg width="${width}" height="44" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#000000"/>
  <text x="20" y="29" fill="#FFFFFF" font-family="Consolas, Monaco, monospace" font-size="15" font-weight="700">${escapeXml(text)}</text>
</svg>`);
}

async function addFolderBadge(inputPath, outputPath, folderName) {
  const badge = createBadgeSvg(folderName);
  const badgeMeta = await sharp(badge).png().toBuffer();
  const badgeInfo = await sharp(badgeMeta).metadata();

  await sharp(inputPath)
    .composite([
      {
        input: badgeMeta,
        top: 24,
        left: 24,
      },
    ])
    .png()
    .toFile(outputPath);
}

async function main() {
  await mkdir(previewsDir, { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

  for (const site of sites) {
    const rawPath = path.join(previewsDir, `${site.folder}.raw.png`);
    const outPath = path.join(previewsDir, `${site.folder}.png`);

    console.log(`Capturing ${site.folder} from ${site.url}`);
    await page.goto(site.url, { waitUntil: "networkidle", timeout: 60000 });
    await page.waitForTimeout(1500);
    await page.screenshot({ path: rawPath, fullPage: false });
    await addFolderBadge(rawPath, outPath, site.folder);
    console.log(`Saved ${outPath}`);
  }

  await browser.close();
  console.log("All previews captured.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
