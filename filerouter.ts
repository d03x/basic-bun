import { serve } from "bun";
import React from "react";
import { renderToString } from "react-dom/server";
const router = new Bun.FileSystemRouter({
  style: "nextjs",
  dir: "./pages",
});

serve({
  port: 8080,
  async fetch(request, server) {
    const url = new URL(request.url);
    const route = router.match(url.pathname);
    const controller = await import(route?.filePath as any);
    if (controller.default) {
      const eleent = React.createElement(controller.default, { route });
      return new Response(
        `
       <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
        </head>
        <body>
          ${renderToString(eleent)}
        </body>
        </html>
      `,
        {
          headers: { "Content-Type": "text/html" },
        }
      );
    }
    return new Response(controller);
  },
});
