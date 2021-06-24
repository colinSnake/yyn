const db = require('./mysql');
class Tools {
    sendResponse (sql){
        return new Promise((resolve, reject) => {
            db.query(sql, (err, data) => {
                if(err) throw err;
                return data;
            })
        })
    }
}

module.exports = new Tools();