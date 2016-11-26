define(['config'], function () {
    return [
        {
            path: '/',
            require:['index']
        }, {
            path: '/article',
            require:['article/index']
        },{
            path: '/article/:id',
            require:['article/index']
        }

    ];
});