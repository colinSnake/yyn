class Methods {
    getDateTimeStr (format){
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

    getRandomColor(){
        const colorStr = '0123456789abcdef';
        return '#' + (function colorFun(str){
            str += colorStr[Math.round(Math.random() * colorStr.length)]; 
            return str.length >5 ? str : colorFun(str);
        }(''));
    }

    getRandomLetter(){
        const letter = 'abcdefghijklmnopqrstuvwxyz';
        return letter.toUpperCase()[Math.round(Math.random() * letter.length)];
    }
}

module.exports = new Methods();
