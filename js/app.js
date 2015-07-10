var textApp = angular.module("hypertext", []);

textApp.controller("MainController", ['$scope', function($scope) {
  $scope.score = 0;
  $scope.wordArray = [
    "Cat",
    "Dog",
    "CatDog",
    "log",
    "omgwtf"
  ];
  $scope.random = function () {return Math.floor(Math.random() * $scope.wordArray.length);
  };

  $scope.wordNumber = $scope.random();

  $scope.checker = function() {
    if($scope.answer === $scope.wordArray[$scope.wordNumber]) {
      $scope.score += $scope.wordArray[$scope.wordNumber].length;
      $scope.wordNumber = $scope.random();
      $scope.answer = "";
    }
  };



}]);
