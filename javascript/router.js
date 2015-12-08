angular.module('UILPractice')
    .config(Router);

Router.$inject = ['$routeProvider'] ;

function Router( $routeProvider ) {
    $routeProvider
        .when( '/', {
            controller: 'NavBarController as vm',
            templateUrl: 'templates/problemDisplay.html'
        } )
        .when('/addition', {templateUrl: 'templates/addition/addition.html'})
        .when('/subtraction', {templateUrl: 'templates/subtraction/subtraction.html'})
        .when('/multiplication', { templateUrl: 'templates/multiplication/multiplication.html'})
        .when('/division', {templateUrl: 'templates/division/division.html'})
        .otherwise( {
            redirectTo: '/'
        } );
}
