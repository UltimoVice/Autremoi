import pgPromise from "pg-promise";

const db = pgPromise()("postgres://postgres:postgres@localhost:3000"); // serve per creare l'effettiva connessione al server, nelle seconde parentesi inseriamo "postgres:// + nome utente + password + @localhost: + la porta collegata"

console.log(db);

const setupDb = async () => {
  db.none(`
    DROP TABLE IF EXISTS users;
    
    CREATE TABLE users (
       id SERIAL NOT NULL PRIMARY KEY,
       img TEXT,
       username TEXT NOT NULL,
       email TEXT NOT NULL,
       amount TEXT,
       password TEXT NOT NULL,
       token TEXT
    );
  `);
};

setupDb();

export { db };