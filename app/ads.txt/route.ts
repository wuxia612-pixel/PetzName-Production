export function GET() {
  return new Response("google.com, pub-9252347925290370, DIRECT, f08c47fec0942fa0\n", {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
