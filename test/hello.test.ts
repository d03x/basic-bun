import { describe,it,expect } from "bun:test";
import { sayhello } from "../src/hello";

describe("Hello test",()=>{
  it("should suport unit test",()=>{
    const response = sayhello("Syifa");
    expect(response).toBe('Hello Syifa');
  })
  it("should suport unit test novita",()=>{
    const response = sayhello("Novita");
    expect(response).toBe('Hello Novita');
  })
})

//bun init
//bun ts
//bun tsx/jsx
//bun environment variabel
//bun package manager
//test runner
//Package runner
//bun workspace