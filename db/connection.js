const mysql = require("mysql2");

// connect to database
const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "2218",
        database: "election"
    },
    console.log("connected to the election database")
)

module.exports = db;