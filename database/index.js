const localDB = require("./local_database");
const mongodb = require("./mongo_db");

let db = undefined;

if (process.env.DATABASE_URL == "local://memory") {
  db = localDB;
} else {
  db = mongodb;
}

module.exports = db;
