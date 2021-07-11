(function () {
    function setFontSize() {
        var winWidth = document.documentElement.clientWidth; //获取浏览器宽
        //设置root的fontSize
        let minFontSize = 60;
        let maxFontSize = 100;
        let nowFontSize = (winWidth / 1920) * 100; //（浏览器宽/设计稿宽）*100px;
        if (nowFontSize < minFontSize) {
            document.documentElement.style.fontSize = minFontSize + 'px';
        } else if (nowFontSize > maxFontSize) {
            document.documentElement.style.fontSize = maxFontSize + 'px';
        } else {
            document.documentElement.style.fontSize = nowFontSize + 'px';
        }
    }
    var evt = 'onorientationchange' in window ? 'orientationchange' : 'resize'; //判断是否有旋转属性(有旋转的为平板和移动端)
    var timer = null
    //监听，屏幕旋转，和web端，大小改变事件，
    window.addEventListener(
        evt,
        function () {
            clearTimeout(timer)
            timer = setTimeout(setFontSize, 300); //防止改变过快还未执行
        },
        false
    )
    window.addEventListener(
        'pageshow',
        function (event) {
            if (event.persisted) {
                clearTimeout(timer);
                timer = setTimeout(setFontSize, 300); //页面显示(pageshow)事件
            }
        },
        false
    )
    // 初始化加载js文件时
    setFontSize()
})();
