require.config({
    //define all js file path base on this base path
    //actually this can setting same to data-main attribute in script tag
    //定义所有JS文件的基本路径,实际这可跟script标签的data-main有相同的根路径
    baseUrl:'./js',
    //define each js frame path, not need to add .js suffix name
    //定义各个JS框架路径名,不用加后缀 .js
    paths:{
        'jquery':['lib/jquery/jquery-1.9.1.min'],
        'template':['lib/arttemplate/template'],
        'page':['lib/pagejs/page'],
        //'comjs':['com/Common'],
        'config':['com/Config']
    },
    //include NOT AMD specification js frame code
    //包含其它非AMD规范的JS框架
    shim:{
        'com/Common':{
            'deps':['config','jquery','template','page']
        }
    }

});

require(['com/Common','config'],function (comjs,config) {
    TestFunc();

    console.log(config.baseUrl)
});
