let db = undefined;

if (process.env.DATABASE_URL == "local://memory") {
  const localDB = require("./local_database");
  db = localDB;
} else {
  const mongodb = require("./mongo_db");
  db = mongodb;
}

module.exports = db;
