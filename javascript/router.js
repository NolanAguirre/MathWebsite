angular.module('UILPractice')
    .config(Router);

Router.$inject = ['$routeProvider'] ;

function Router( $routeProvider ) {
    $routeProvider
        .when( '/', {
            controller: 'MathController as vm',
            templateUrl: 'templates/problemDisplay.html'
        } )
        .when('/none', {templateUrl: 'templates/none.html'})
        //.when('/about-us', {templateUrl: 'templates/about-us.html'})
        //.when('/contact-us', { templateUrl: 'templates/contact-us.html'})
        .otherwise( {
            redirectTo: '/'
        } );
}
