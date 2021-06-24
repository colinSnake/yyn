class Methods {
    getDateTimeStr (format){ // 获取当前时间
        let date = new Date(),
            year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate(),
            hour = date.getHours(),
            minute = date.getMinutes(),
            second = date.getSeconds(),
            dateFormat = format || '-';

        month = setNumberFormat(month);
        day = setNumberFormat(day);
        hour = setNumberFormat(hour);
        minute = setNumberFormat(minute);
        second = setNumberFormat(second);

        function setNumberFormat (num) {
            return num = num < 10 ? `0${num}` : num;
        }

        return `${year}${dateFormat}${month}${dateFormat}${day} ${hour}:${minute}:${second}`;
    }

    getRandomColor(){ // 获取随机16进制颜色
        const colorStr = '0123456789abcdef';
        return '#' + (function colorFunc(str){
            str += colorStr[Math.round(Math.random() * (colorStr.length - 1))]; 
            return str.length > 5 ? str : colorFunc(str);
        }(''));
    }

    getRandomLetter(){ // 获取随机大写字母
        const letter = 'abcdefghijklmnopqrstuvwxyz';
        return letter.toUpperCase()[Math.round(Math.random() * (letter.length - 1))];
    }

    saveSetting(param){ // 生成/更新系统配置存储到localstorage
        const setting = localStorage.getItem('setting') ? JSON.parse(localStorage.getItem('setting')) : null;
        localStorage.setItem('setting', JSON.stringify(Object.assign({}, setting, param)));
    }

    getInfoFromLocalStorage(storageName, parameter){ // 从localstorage获取相关数据
        const currentInfo = localStorage.getItem(storageName) ? JSON.parse(localStorage.getItem(storageName)) : null;
        if(currentInfo){
            if(currentInfo instanceof Object){
                return parameter ? currentInfo[parameter] : currentInfo;
            }else{
                return currentInfo;
            }
        }
        return currentInfo;
    }
}


module.exports = new Methods();
