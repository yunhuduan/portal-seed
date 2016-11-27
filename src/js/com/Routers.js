define(['config','page'], function (config,page) {
    var routes =  [
        {
            path: '/',
            require:['index']
        }, {
            path: '/article',
            require:['article/index']
        },{
            path: '/article/:id',
            require:['article/index']
        },





        {
            path:'*',
            require:['com/NotFound.js']
        }

    ];

    return routes;
});