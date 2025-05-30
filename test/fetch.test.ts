import {describe, expect, it } from "bun:test";
describe("Fetch web api",()=>{
  it("fetch example ts",async()=>{
    const response = await fetch("https://example.com")
    expect(response.status).toBe(200);
    expect(response.headers.get('Content-Type')).toContain("text/html")
  })
})