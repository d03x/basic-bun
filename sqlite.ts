import { Database } from "bun:sqlite";
import { faker } from '@faker-js/faker';
const db = new Database("db/main.db");
// db.exec(`
//   CREATE TABLE IF NOT EXISTS users (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     username TEXT NOT NULL UNIQUE,
//     email TEXT NOT NULL UNIQUE,
//     password TEXT NOT NULL,
//     created_at DATETIME DEFAULT CURRENT_TIMESTAMP
//   );
// `);

// // Insert 4 fake users using faker

// const insert = db.prepare(
//   "INSERT INTO users (username, email, password) VALUES (?, ?, ?)"
// );

// for (let i = 0; i < 40; i++) {
//   const username = faker.internet.username();
//   const email = faker.internet.email();
//   const password = faker.internet.password();
//   insert.run(username, email, password);
// }

const serv = Bun.serve({
  port: 8080,
  routes: {
    '/': {
      async POST(){
        return new Response("OK");
      },
      async GET(param) {
        const id = new URL(param.url)
        console.log(id.searchParams.get('id'));
        if( id.hash ){
          console.log(id.hash);

        }
        const data = (await db.query("SELECT id,username,email,created_at FROM users")).all();
        return Response.json(data)
      }
    }
  }
})

console.log(`Server Run: ${serv.url}`);
