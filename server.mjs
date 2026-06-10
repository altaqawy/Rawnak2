import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const root = process.cwd();
const port = Number(process.env.PORT || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url || "/", `http://${request.headers.host}`);
    const requested = url.pathname === "/" ? "/index.html" : decodeURIComponent(url.pathname);
    const file = normalize(join(root, requested));
    if (!file.startsWith(root)) throw new Error("Invalid path");
    const data = await readFile(file);
    response.writeHead(200, { "content-type": types[extname(file)] || "application/octet-stream" });
    response.end(request.method === "HEAD" ? undefined : data);
  } catch (error) {
    console.error(error.message);
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end(request.method === "HEAD" ? undefined : "Not found");
  }
});

server.on("error", (error) => {
  console.error(error);
  process.exitCode = 1;
});

process.on("uncaughtException", (error) => {
  console.error(error);
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Rawnak site running at http://127.0.0.1:${port}`);
});
