/**
 * Created by Administrator on 2016/11/29.
 */
define(['common'],function (com) {
    var init = function (ctx,next) {
        console.log('category detail invoke...'+new Date().getTime());
        $content.empty().append('category detail invoke...'+new Date().getTime());
    }
    return init;
});