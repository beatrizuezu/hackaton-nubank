'use strict';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
angular
  .module('frontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ng-token-auth'
  ])
  .config(function ($routeProvider, $authProvider) {
    $authProvider.configure({
        apiUrl: 'https://hackaton-nubank.herokuapp.com'
    });

    $routeProvider
      .when('/user/:user_id/mission', {
        templateUrl: 'views/mission.html',
        controller: 'MissionCtrl'
      })
      .when('/activities', {
        templateUrl: 'views/activities.html',
        controller: 'ActivitiesCtrl'
      })
      .when('/skills', {
        templateUrl: 'views/skills.html',
        controller: 'SkillsCtrl'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })
      .when('/messages', {
        templateUrl: 'views/messages.html',
        controller: 'MessagesCtrl',
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/user/:user_id/mission/add', {
        templateUrl: 'views/mission/add.html',
        controller: 'MissionAddCtrl',
        resolve: {
          auth: function($auth) {
            return $auth.validateUser();
          }
        }
      })
      .when('/user/:user_id/mission/:id', {
        templateUrl: 'views/mission/show.html',
        controller: 'MissionShowCtrl'
      })
      .when('/user/:user_id/mission/:id/activity', {
        templateUrl: 'views/activity/index.html',
        controller: 'ActivityIndexCtrl'
      })
      .when('/mission/:mission_id/task', {
        templateUrl: 'views/task/index.html',
        controller: 'TaskIndexCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .run(function (amMoment, $rootScope, $location) {
    $rootScope.$on('auth:validation-success', function(ev, reason) {
      console.log(ev);
      console.log(reason);
    });
    $rootScope.$on('auth:validation-error', function(ev, reason) {
      console.log(ev);
      console.log(reason);
    });
    $rootScope.$on('auth:invalid', function(ev) {
      console.log(ev);
      $location.path('/login');
    });
    amMoment.changeLocale('pt-br');
  });
