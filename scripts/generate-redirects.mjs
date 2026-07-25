import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { legacyRedirects } from "../redirects.mjs";

const outDir = join(import.meta.dirname, "..", "out");

function redirectHtml(destination) {
  const url = destination.endsWith("/") ? destination : `${destination}/`;

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="refresh" content="0; url=${url}" />
    <link rel="canonical" href="${url}" />
    <script>location.replace("${url}")</script>
    <title>Redirecting…</title>
  </head>
  <body>
    <p>Redirecting to <a href="${url}">${url}</a>…</p>
  </body>
</html>
`;
}

for (const { source, destination } of legacyRedirects) {
  const filePath = join(outDir, source, "index.html");
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, redirectHtml(destination));
}
