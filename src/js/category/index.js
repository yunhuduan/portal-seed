define(['common'],function (com) {
    var init = function (ctx,next) {
        console.log('category index invoke...'+new Date().getTime())
        $leftMenu.empty().append('<div><ul><li><a href="/category/list">分类列表</a></li></ul></div>');
        next();
    }
    return init;
});