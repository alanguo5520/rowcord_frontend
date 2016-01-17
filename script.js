/**
 * Created by alanguo on 1/16/16.
 */
//create the module and name it
    //also include ngRoute for all routing needs
var rowcordApp = angular.module('rowcordApp', ['ngRoute']);

//configure our routes
rowcordApp.config(function($routeProvider){
    $routeProvider
    //route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller : 'mainController'
        })
    //route for the about page
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller : 'aboutController'
        })
        .when('/login', {
            templateUrl : 'pages/login.html',
            controller : 'loginController'
        })
        .when('/signup', {
            templateUrl : 'pages/signup.html',
            controller : 'signupCtrl'
        })
        .when('/log', {
            templateUrl : 'pages/log.html',
            controller : 'logCtrl'
        })
    ;
});

//create the controller and inject Angular's $scope
rowcordApp.controller('mainController', function($scope){
    //create a message to display in our view
    $scope.message = 'Home page';
});

rowcordApp.controller('aboutController', function($scope) {
    $scope.message = 'About page';
});

rowcordApp.controller('loginController', function($scope) {
    $scope.message = 'Login page';
});

rowcordApp.controller('signupCtrl', function($scope) {
    $scope.message = 'Signup page';
});

rowcordApp.controller('logCtrl', ["$scope", function($scope) {
    $scope.message = 'Log Rowing Workouts';
    $scope.showSingleDist = false;
    $scope.showSingleTime = false;
    $scope.showIntDist = false;
    $scope.showIntTime = false;
    $scope.showIntVar = false;
    $scope.toggleSingleTime = function() {
        $scope.showSingleTime = !$scope.showSingleTime;
    };
    $scope.toggleSingleDist = function() {
        $scope.showSingleDist = !$scope.showSingleDist;
    };
    $scope.toggleIntDist = function() {
        $scope.showIntDist = !$scope.showIntDist;
    };
    $scope.toggleIntTime = function() {
        $scope.showIntTime = !$scope.showIntTime;
    };
    $scope.toggleIntVar = function() {
        $scope.showIntVar = !$scope.showIntVar;
    };



    $scope.choices = [{}];
    $scope.addNewChoice = function(){
        var newItemNo = $scope.choices.length + 1;
        $scope.choices.push({'id':'choice'+newItemNo});
    };
    $scope.showAddChoice = function(choice) {
        return choice.id === $scope.choices[$scope.choices.length-1].id;
    };
    $scope.removeChoice = function(){
        var newItemNo = $scope.choices.length-1;
        if($scope.choices.length>1) {
            $scope.choices.pop();
        }
    };

}]);
