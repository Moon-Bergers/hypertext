var textApp = angular.module("hypertext", []);

textApp.controller("MainController", ['$scope', function($scope) {
  $scope.wordNumber = 0;
  $scope.score = 0;
  $scope.wordArray = [
    "Cat",
    "Dog",
    "CatDog",
    "log",
    "omgwtf"
  ];

  $scope.checker = function() {
    if($scope.answer === $scope.wordArray[$scope.wordNumber]) {
      $scope.score += $scope.wordArray[$scope.wordNumber].length;
      $scope.wordNumber++;
      $scope.answer = "";
    }
  };

}]);
