import {describe, expect, it } from "bun:test";
import * as os from "node:os"
describe("Test Node Js Api",()=>{
  it("Test Os Version",async()=>{
    const ct = os.platform()
    expect(ct).toBe("win32")

    const type = os.type()
    expect(type).toBe("Windows_NT");
    
  })
})