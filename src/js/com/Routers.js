define(['config', 'page'], function (config, page) {
    var routes = [

        {
            path: '/article/*',
            require: ['article/index']
        }, {
            path: '/article/list',
            require: ['article/list']
        }, {
            path: '/article/:id',
            require: ['article/detail']
        },





        {
            path: '/category',
            require: ['category/index']
        }, {
            path: '/category/*',
            require: ['category/index']
        }, {
            path: '/category/list',
            require: ['category/list']
        }, {
            path: '/category/:id',
            require: ['category/detail']
        },




        {
            path: '*',
            require: ['com/NotFound']
        }

    ];

    return routes;
});