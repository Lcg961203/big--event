function db(sql,params = null, callback) {
    const mysql = require('mysql')
    const conn = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 12345678,
        database: 'bigevent'
    })

    conn.connect()
    conn.query(sql, params, callback)
    conn.end()
}

module.exports = db