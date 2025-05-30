import {describe, expect, it } from "bun:test";
import {Contact} from "contacts/contact"
describe("Contact test package",()=>{
  it("Test Number",async()=>{
    const ct = new Contact("0882238373623")
    expect(ct.number).toBe("0882238373623");
  })
})