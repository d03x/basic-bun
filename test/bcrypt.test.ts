import { describe, expect, it } from "bun:test";
import password from "../bcrypt";

describe("Test passsword hash",()=>{
  it("Test bcrypt test",async ()=>{
    expect(await Bun.password.verify("Wellcome",password)).toBeTrue()
  })
})