const mysql = require("mysql2");

//creo la connessione con il db
const connection = mysql.createConnection({
    host:`localhost`,
    user:`root`,
    password:`root`,
    database:`blog_db`
});

connection.connect((err)=>{
    if(err) throw err;
    console.log("connect to mySQL");
});

module.exports = connection;
