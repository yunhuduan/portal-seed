/**
 * Created by duanyunhu on 2016/11/29.
 */
define([],function () {
    return function (ctx,next) {
        console.log('route not found...'+ctx.path);
        $content.empty().html('not found');
    }
});
