define(['common'],function (com) {
    var init = function(ctx,next){
        console.log('article index invoke .....'+new Date().getTime());
        $leftMenu.empty().append('<div><ul><li><a href="/article/list">文章列表</a></li></ul></div>')
    };
    return init;
});