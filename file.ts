import Bun from "bun"

// const file = await Bun.file("materii.txt")

// console.log(file.write);

await Bun.write(".env.test","Gello");