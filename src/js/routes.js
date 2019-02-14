angular
.module('app')
.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('app', {
    abstract: true,
    templateUrl: 'views/common/layouts/full.html',
    //page title goes here
    ncyBreadcrumb: {
      label: 'Root',
      skip: true
    },
    resolve: {
      loadCSS: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load CSS files
        return {
          serie: true,
          name: 'Font Awesome',
          files: ['node_modules/font-awesome/css/font-awesome.min.css']
        },{
          serie: true,
          name: 'Simple Line Icons',
          files: ['node_modules/simple-line-icons/css/simple-line-icons.css']
        }]);
      }],
    }
  })
  .state('app.main', {
    url: '/',
    templateUrl: 'views/main.html',
    //page title goes here
    ncyBreadcrumb: {
      label: 'New Delivery',
    },
    resolve: {
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load controllers
        return $ocLazyLoad.load({
          files: ['js/controllers/main.js']
        });
      }]
    }
  })
}]);
