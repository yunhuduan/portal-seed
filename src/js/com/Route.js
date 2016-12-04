/**
 * Created by duanyunhu on 2016/11/27.
 */
define(['config','page'], function (config,page) {
    //路由配置
    page({
        click:true,//bind to click events [true]
        popstate:true,//bind to popstate [true]
        dispatch:true,//perform initial dispatch [true]
        hashbang:true,// add #! before urls [false]
        decodeURLComponents:true//remove URL encoding from path components (query string, pathname, hash) [true]
    });

    var routeOptions = {};//路由选项后期拓展

    /**
     * 路由处理器
     * @param route 当前处理的路由
     * @returns {Function} page.js需要处理的路由方法
     */
    var routeHandler = function(route){
        var deps = route.require || [];
        return function () {//路由方法
            var routeArgs = arguments;//路由框架参数content,next
            require(deps,function(){
                if(arguments){
                    for(var i=0;i<arguments.length;i++){
                        var mod = arguments[i];
                        if(mod && typeof mod =='function'){
                            mod.apply(null, routeArgs);
                        }
                    }
                }
            });
        }
    };

    var init = function (routes,options) {
        routeOptions = options;
        for(var i=0;i<routes.length;i++){
            var route = routes[i];
            page(route.path,routeHandler(route))
        }
        page();
    }
    return init;
});