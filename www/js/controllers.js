angular.module('productBrowsing.controllers', [])

.controller("CategoryController",function($scope, Items){
    Items.getAll()
    .then(function(response){
        $scope.data = response.data;
    }, function(response){
        // error
    });
})

.controller("ProductsController",function($scope, Items, $stateParams){
    $scope.id = $stateParams.id;
    $scope.item = {"books":[]};
    $scope.category = "";
    Items.getAll()
    .then(function(response){
        var items = response.data.books;
        items.forEach(function(i){
            if(i.cat_id == $scope.id) {
                $scope.item.books.push(i)
            }
        })
        var categories = response.data.categories;
        categories.forEach(function(i){
            if(i._id == $scope.id) {
                $scope.category = i.title;
            }
        })
    }, function(response){
        //error
    });
})


.controller("ProductController",function($scope, Items, $stateParams){
    $scope.bookID = $stateParams.bookID;
    $scope.book = {};
    $scope.ratingsObject = {
                    iconOn : 'ion-ios-star',
                    iconOff : 'ion-ios-star-outline',
                    iconOnColor: 'rgb(200, 200, 100)',
                    iconOffColor:  'rgb(200, 100, 100)',
                    rating: 1,
                    minRating: 1,
                    callback: function(rating) {
                        $scope.ratingsCallback(rating);
                    }
                };
    
    Items.getOne($scope.bookID)
    .then(function(response){
        var books = response.data.books;
        books.forEach(function(i){
            if(i._id == $scope.bookID){
                $scope.book = i;
                if(Items.getRating(i._id) > 0) {
                    $scope.ratingsObject.rating = Items.getRating(i._id);
                } else {
                    $scope.ratingsObject.rating = i.rating;
                }

                $scope.ratingsCallback = function(rating) {
                    localStorage.setItem(i._id,rating);
                };
                
            }
        });
    }, function(response){
        //error
    });
});