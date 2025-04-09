import mysql from "mysql";

const db = mysql.createPool({
    host: "192.185.131.60",
    user: "spudli30_root",
    password: "945010Lu@191098",
    database: "spudli30_dbspudlingo"
});

export default db;
