angular.module('productBrowsing.services', [])

.factory("Items", function ItemsFactory($http){
    return {
        getAll: function() {
            return $http({method:'GET', url:'data.json'});
        },
        getOne: function(_id){
            return $http({method:'GET', url:'data.json'});
        },
        getRating: function(_id){
            if(localStorage.getItem(_id)){
                return localStorage.getItem(_id);
            } else {
                return 0;
            }
        }
    }
});