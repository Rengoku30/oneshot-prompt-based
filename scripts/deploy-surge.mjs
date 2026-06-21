import { copyFileSync, existsSync } from "fs";
import { execSync, spawnSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const deployOnly = process.argv.includes("--deploy-only");
const buildOnly = process.argv.includes("--build-only");

const AUTH_HELP = `
Surge authentication required — deploy aborted (no interactive prompts in Cursor shell).

Option A — login once in your own Windows terminal (PowerShell or CMD):
  npm install -g surge
  surge login
  surge whoami

Option B — use a token (non-interactive, good for CI):
  surge login          # run once in external terminal
  surge token          # copy the token
  $env:SURGE_LOGIN = "your@email.com"
  $env:SURGE_TOKEN = "your-token-here"

Then deploy from repo root:
  cd C:\\Users\\ninja\\OneDrive\\Documents\\projects\\preview_templates
  node scripts/deploy-surge.mjs --deploy-only

Full build + deploy:
  node scripts/deploy-surge.mjs
`.trim();

const sites = [
  {
    name: "mine_prompt",
    cwd: path.join(rootDir, "mine_prompt"),
    dist: path.join(rootDir, "mine_prompt", "dist"),
    domain: "oneshot-mine-prompt.surge.sh",
    spaFallback: true,
  },
  {
    name: "rolebase_prompt",
    cwd: path.join(rootDir, "rolebase_prompt", "monochrome-site"),
    dist: path.join(rootDir, "rolebase_prompt", "monochrome-site", "dist"),
    domain: "oneshot-rolebase-prompt.surge.sh",
    spaFallback: false,
  },
  {
    name: "qwen3.7max",
    cwd: path.join(rootDir, "qwen3.7max"),
    dist: path.join(rootDir, "qwen3.7max", "dist"),
    domain: "oneshot-qwen37max.surge.sh",
    spaFallback: false,
  },
  {
    name: "gemini3.1 pro",
    cwd: path.join(rootDir, "gemini3.1 pro"),
    dist: path.join(rootDir, "gemini3.1 pro", "dist"),
    domain: "oneshot-gemini31-pro.surge.sh",
    spaFallback: false,
  },
];

function run(command, cwd, env = process.env) {
  console.log(`\n> ${command}`);
  execSync(command, {
    cwd,
    stdio: ["ignore", "inherit", "inherit"],
    shell: true,
    env,
  });
}

function runNonInteractive(command, cwd, env = process.env) {
  console.log(`\n> ${command}`);
  const result = spawnSync(command, {
    cwd,
    stdio: ["ignore", "inherit", "inherit"],
    shell: true,
    env,
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    throw new Error(`Command failed with exit code ${result.status}: ${command}`);
  }
}

function ensureDependencies(cwd) {
  if (!existsSync(path.join(cwd, "node_modules"))) {
    run("npm install", cwd);
  }
}

function buildSite(site) {
  console.log(`\n=== Building ${site.name} ===`);
  ensureDependencies(site.cwd);
  run("npm run build", site.cwd);

  if (!existsSync(site.dist)) {
    throw new Error(`Build output not found: ${site.dist}`);
  }

  if (site.spaFallback) {
    const indexPath = path.join(site.dist, "index.html");
    const fallbackPath = path.join(site.dist, "200.html");
    copyFileSync(indexPath, fallbackPath);
    console.log(`Created SPA fallback: ${fallbackPath}`);
  }
}

function ensureAuthenticated() {
  const result = spawnSync("surge", ["whoami"], {
    encoding: "utf8",
    shell: true,
    stdio: ["ignore", "pipe", "pipe"],
  });
  const output = `${result.stdout || ""}${result.stderr || ""}`.trim();

  if (result.status === 0 && output && !/not authenticated/i.test(output)) {
    console.log(`Surge account: ${output}`);
    return;
  }

  if (process.env.SURGE_LOGIN && process.env.SURGE_TOKEN) {
    console.log(`Using SURGE_LOGIN for ${process.env.SURGE_LOGIN}`);
    return;
  }

  console.error(`\n${AUTH_HELP}\n`);
  process.exit(1);
}

function deploySite(site) {
  console.log(`\n=== Deploying ${site.name} to ${site.domain} ===`);
  runNonInteractive(`surge "${site.dist}" ${site.domain}`, rootDir);
}

function main() {
  if (!buildOnly) {
    ensureAuthenticated();
  }

  const deployed = [];

  for (const site of sites) {
    if (!deployOnly) {
      buildSite(site);
    } else if (!existsSync(site.dist)) {
      throw new Error(`Missing build output for ${site.name}: ${site.dist}`);
    }

    if (!buildOnly) {
      deploySite(site);
      deployed.push({ name: site.name, url: `https://${site.domain}` });
    }
  }

  if (buildOnly) {
    console.log("\n=== Build complete ===");
    return;
  }

  console.log("\n=== Deployment complete ===");
  for (const site of deployed) {
    console.log(`${site.name}: ${site.url}`);
  }
}

main();
