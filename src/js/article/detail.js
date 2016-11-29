/**
 * Created by Administrator on 2016/11/29.
 */
define(['common'],function (com) {
    var init = function (ctx,next) {
        console.log('article detail invoke .....'+new Date().getTime());
        $content.empty().append('i was article detail....')
    }
    return init;
});