const baseSize = 32
// 设置 rem 函数
function setRem() {
    // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
    const scale = document.documentElement.clientWidth / 750
    // 设置页面根节点字体大小
    document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function() {
    setRem()
}

// 设置 rem 函数
// function setRem () {
//     // 320 默认大小16px; 320px = 20rem ;每个元素px基础上/16
//     let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
//     // 得到html的Dom元素
//     let htmlDom = document.getElementsByTagName('html')[0];
//     // 设置根元素字体大小
//     htmlDom.style.fontSize= htmlWidth/20 + 'px';
// }


// ! function(n) {
//     var e = n.document,
//     t = e.documentElement,
//     i = 720,
//     d = i / 100,
//     o = "orientationchange" in n ? "orientationchange" : "resize",
//     a = function() {
//         var n = t.clientWidth || 320;
//         n > 720 && (n = 720);
//         t.style.fontSize = n / d + "px"
//     };
//     e.addEventListener && (n.addEventListener(o, a, !1), e.addEventListener("DOMContentLoaded", a, !1))
// }(window);