import { expect,describe, it  } from "bun:test";
import {User} from "user/user";
describe("Package test user",()=>{
  it("Test user",async()=>{
    const user = new User("firman");
    expect(user.name).toBe("firman");
  })
})