/**
 * Created by Administrator on 2016/11/29.
 */
define(['common'],function (com) {
    var init = function (ctx,next) {
        console.log('article List invoke .....'+new Date().getTime());
        $content.empty().append('<table><tr>123<td></td><td>xxx</td><td><a href="/article/123">详情</a></td></tr></table>')
    }
    return init;
});