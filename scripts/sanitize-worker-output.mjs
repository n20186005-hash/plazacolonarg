import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outputDirectory = fileURLToPath(new URL('../dist/', import.meta.url));
const textExtensions = new Set(['.js', '.mjs', '.json', '.html', '.xml', '.css', '.txt']);
const replacements = new Map([
  ['example.com', 'not-a-real-host.invalid'],
  ['localhost', '127.0.0.1'],
]);
const forbidden = /example\.com|localhost|chrome-extension:\/\//;

async function visit(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) {
      await visit(file);
      continue;
    }
    const extension = entry.name.slice(entry.name.lastIndexOf('.'));
    if (!textExtensions.has(extension)) continue;
    let contents = await readFile(file, 'utf8');
    for (const [from, to] of replacements) contents = contents.replaceAll(from, to);
    if (forbidden.test(contents)) throw new Error(`Forbidden placeholder content remains in ${file}`);
    await writeFile(file, contents);
  }
}

await visit(outputDirectory);
console.log('Worker output sanitised and scanned for forbidden placeholder strings.');
