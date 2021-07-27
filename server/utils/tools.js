const fs = require('fs');
const path = require('path');
const mime = require('mime-types'); // 判断地址类型
const db = require('./mysql');
class Tools {
    sendResponse (sql){
        return new Promise((resolve, reject) => {
            db.query(sql, (err, data) => {
                if(err) throw err;
                resolve(data);
            })
        })
    }
    resCallback(result, param){
        if(result){
            return {
                code: '0',
                ext: param ? param : null,
                msg: 'success'
            }
        }else{
            return {
                code: '1',
                ext: null,
                msg: 'failed'
            }
        }
    }
    readFile(ctx){
        let filePath = path.join(__dirname, ctx.url);//图片地址
        let file =null;
        try {
            file = fs.readFileSync(filePath);//读取文件
        }catch (error) {
            //如果服务器不存在请求的图片，返回默认图片
            filePath = path.join(__dirname.replace('/utils', '/static'),'/images/default.png');//默认图片地址
            file = fs.readFileSync(filePath);//读取文件       
        }
    
        let mimeType = mime.lookup(filePath);//读取图片文件类型
        ctx.set('content-type', mimeType);//设置返回类型
        ctx.body = file;//返回图片
    }
}

module.exports = new Tools();
