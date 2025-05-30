import { fetch, serve } from "bun";
import { URL } from "url";

serve({
  port:8080,
  fetch(request, server) {
    const rr = new URL(request.url)
    if(rr.searchParams.get('name')){
      return new Response(`Hello ${rr.searchParams.get('name')}`)
    }
    return new Response("Hello world")
  },
})