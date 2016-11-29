/**
 * Created by duanyunhu on 2016/11/27.
 */
define(['config','page'], function (config,page) {

    var currentModule = null;
    /**
     * 路由处理器
     * @param route 当前处理的路由
     * @returns {Function} page.js需要处理的路由方法
     */
    var routeHandler = function(route){
        var deps = route.require || [];
        return function () {
            var args = arguments;//路由框架参数
            require(deps,function(mod){
                if (currentModule && currentModule !== mod) {
                    currentModule.onRouteChange && currentModule.onRouteChange();
                }
                currentModule = mod;
                mod.apply(null, args);
            });
        }
    };

    var init = function (routes) {
        for(var i=0;i<routes.length;i++){
            var route = routes[i];
            page(route.path,routeHandler(route))
        }
    }
    return init;
});