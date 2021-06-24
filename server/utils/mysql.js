const mysql = require('mysql');
const { mysqlConfig } = require('../config');
// 创建连接池
const pool = mysql.createPool(mysqlConfig);

function query(sql, callback){
    pool.getConnection((err, connection) => {
        if(err) throw err;
        connection.query(sql, (err, row) => {
            callback(err, rows);
            connection.release(); // 中断连接
        })
    })
}

module.exports = {
    query
};
