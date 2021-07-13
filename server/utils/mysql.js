const mysql = require('mysql');
const { mysqlConfig } = require('../config');
console.log(mysqlConfig,8)
// 创建连接池
const pool = mysql.createPool(mysqlConfig);

function query(sql, callback){
    pool.getConnection((error, connection) => {
        if(error) throw error;
        connection.query(sql, (err, data) => {
            // console.log('----db---', data)
            callback(err, data);
            connection.release(); // 中断连接
        })
    })
}

module.exports = {
    query
};
