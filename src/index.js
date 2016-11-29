require.config({
    //define all js file path base on this base path
    //actually this can setting same to data-main attribute in script tag
    //定义所有JS文件的基本路径,实际这可跟script标签的data-main有相同的根路径
    baseUrl:'http://localhost:63342/portal-seed/src/js',
    //define each js frame path, not need to add .js suffix name
    //定义各个JS框架路径名,不用加后缀 .js
    paths:{
        'jquery':['lib/jquery/jquery-1.9.1.min'],
        'template':['lib/arttemplate/template'],
        'page':['lib/pagejs/page'],
        'config':['com/Config'],
        'routers':['com/Routers'],
        'route':['com/Route'],
        'common':['com/Common']
    },
    //include NOT AMD specification js frame code
    //包含其它非AMD规范的JS框架
    shim:{

    },
    urlArgs: "v=" +  (new Date()).getTime()//清除缓存
});

require(['jquery','template','page','config','routers','route','common'],function ($,template,page,config,routers,route,common) {
    route(routers);//配置路由
    page();
    window.$leftMenu = $('#leftMenu');
    window.$content = $('#content');


});
