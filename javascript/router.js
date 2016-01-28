angular.module('UILPractice')
    .config(Router);

Router.$inject = ['$routeProvider'] ;

function Router( $routeProvider ) {
    $routeProvider
        .when( '/', {
            controller: 'NavBarController as vm',
            templateUrl: 'templates/problemDisplay.html'
        } )
        .when('/no_help', {templateUrl: 'templates/none.html'})
        .when('/addition/sequentials', {templateUrl: 'templates/addition/sequentials.html'})
        .when('/no_help', {templateUrl: 'templates/none.htm'})
        .when('/no_help', {templateUrl: 'templates/none.html'})
        .when('/no_help', {templateUrl: 'templates/none.html'})
        .when('/no_help', {templateUrl: 'templates/none.html'})
        .when('/no_help', {templateUrl: 'templates/none.html'})
        .when('/no_help', {templateUrl: 'templates/none.html'})
        .otherwise( {
            redirectTo: '/'
        } );
}
