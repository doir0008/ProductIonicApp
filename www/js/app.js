angular.module('productBrowsing', ['ionic', 'ionic-ratings', 'productBrowsing.controllers', 'productBrowsing.services'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    // setup an abstract state for the tabs directive
    .state('categories', {
        url: '/categories',
        abstract: true,
        templateUrl: 'templates/categories.html',
        controller: 'CategoryController'
    })

    .state('categories.1', {
        url: '/1',
        params: {
            id: 1
        },
        views: {
            '1': {
                templateUrl: 'templates/products.html',
                controller: 'ProductsController'
            }
        }
    })
    
    .state('categories.1-product', {
        url: '/:id/:bookID',
        views: {
            '1': {
                templateUrl: 'templates/product.html',
                controller: 'ProductController'
            }
        }
    })
    
    .state('categories.2', {
        url: '/2',
        params: {
            id: 2
        },
        views: {
            '2': {
                templateUrl: 'templates/products.html',
                controller: 'ProductsController'
            }
        }
    })
    
    .state('categories.2-product', {
        url: '/:id/:bookID',
        views: {
            '2': {
                templateUrl: 'templates/product.html',
                controller: 'ProductController'
            }
        }
    })
    
    .state('categories.3', {
        url: '/3',
        params: {
            id: 3
        },
        views: {
            '3': {
                templateUrl: 'templates/products.html',
                controller: 'ProductsController'
            }
        }
    })
    
    .state('categories.3-product', {
        url: '/:id/:bookID',
        views: {
            '3': {
                templateUrl: 'templates/product.html',
                controller: 'ProductController'
            }
        }
    })
    
    .state('categories.4', {
        url: '/4',
        params: {
            id: 4
        },
        views: {
            '4': {
                templateUrl: 'templates/products.html',
                controller: 'ProductsController'
            }
        }
    })
    
    .state('categories.4-product', {
        url: '/:id/:bookID',
        views: {
            '4': {
                templateUrl: 'templates/product.html',
                controller: 'ProductController'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/categories/1');
});
