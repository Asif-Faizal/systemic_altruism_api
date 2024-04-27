// models/photoModel.js
const sqlite3 = require('sqlite3').verbose();

// Open SQLite database connection
const db = new sqlite3.Database(':memory:'); // You can also specify a file name for a persistent database

// Create photos table
db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS photos (id INTEGER PRIMARY KEY AUTOINCREMENT, imageUrl TEXT)");
});

module.exports = db;
