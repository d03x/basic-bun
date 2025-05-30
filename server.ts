import { fetch, serve } from "bun";
import { URL } from "url";
import { Ts } from "./tsx/hello";
import * as os from 'os'
import app from "./html/app.html";
const server = serve({
  port:8080,
  routes : {
    '/' : app,
    
  },
   async fetch(req) {
    // ...api requests
    return new Response("hello world");
  },
})
console.log("Run at: "+server.url);
