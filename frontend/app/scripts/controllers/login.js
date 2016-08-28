'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('LoginCtrl', function ($scope, $auth, $location) {

    $scope.login = {
        email: "",
        password: ""
    };
    
    $scope.signIn = function(){
        // console.log($scope.login)

        $auth.submitLogin($scope.login)
        .then(function(resp) {
          if (resp.id) {
            $location.path('/user/'+resp.id+'/mission/add');
          }
        })
        .catch(function(resp) {
          // handle error response
        });
    }
  });
