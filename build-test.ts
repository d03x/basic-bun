import app from "./public/app.txt" with { type:"file"}

const content = await Bun.file(app)

console.log(await content.text());

