var textApp = angular.module("hypertext", []);

textApp.controller("MainController", ['$scope', '$timeout', function($scope, $timeout) {
  $scope.wordNumber = 0;
  $scope.score = 0;
  $scope.wordArray = [
    "The cat in the hat",
    "The dog never came back",
    "big tall trees",
    "log log gol gol",
    "omgwtfbbq"
  ];

  $scope.checker = function() {
    if($scope.answer === $scope.wordArray[$scope.wordNumber]) {
      $scope.score += $scope.wordArray[$scope.wordNumber].length;
      $scope.wordNumber++;
      $scope.answer = "";
    }
  };

  var timeCheck = function() {
    if (!$scope.counter) {
      $timeout.cancel(myTimeout);
      $scope.answer = "";
    }
  }
  $scope.counter = 10;
  $scope.onTimeout = function(){
      $scope.counter--;
      myTimeout = $timeout($scope.onTimeout,1000);
      timeCheck();
  }
  var myTimeout = $timeout($scope.onTimeout,1000);

}]);
