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
}
 
module.exports = new Methods();
