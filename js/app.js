var textApp = angular.module("hypertext", []);

textApp.controller("MainController", ['$scope', '$timeout', function($scope, $timeout) {
  var countDownCheck = true;
  $scope.countDownTimer = false;
  $scope.score = 0;
  $scope.start = false;
  $scope.finish = false;
  $scope.counter = 3;
  $scope.wordArray = [
    "The cat in the hat",
    "The dog never came back",
    "big tall trees",
    "log log gol gol",
    "omgwtfbbq"
  ];

  $scope.random = function () {
    return Math.floor(Math.random() * $scope.wordArray.length);
  };

  $scope.wordNumber = $scope.random();

  $scope.checker = function() {
    if($scope.start && !$scope.finish && $scope.answer === $scope.wordArray[$scope.wordNumber]) {
      $scope.score += $scope.wordArray[$scope.wordNumber].length;
      $scope.wordNumber = $scope.random();
      $scope.answer = "";
    }
  };

  var timeCheck = function() {
    if (!$scope.counter) {
      $timeout.cancel(myTimeout);
      $scope.answer = "";
      if (!countDownCheck) {
        $scope.finish = true;
      }
      if (countDownCheck) {
        countDownCheck = false;
        $scope.countDownTimer = false;
        $scope.startGame();
      }
    }
  };
  $scope.onTimeout = function(){
      $scope.counter--;
      myTimeout = $timeout($scope.onTimeout,1000);
      timeCheck();
  };

  $scope.countDown = function() {
    $scope.counter = 3;
    $scope.countDownTimer = true;
    var myTimeout = $timeout($scope.onTimeout,1000);
  };

  $scope.startGame = function() {
    $scope.start = true;
    $scope.counter = 10;
    var myTimeout = $timeout($scope.onTimeout,1000);
  };

  $scope.resetGame = function() {
    $scope.start = false;
    $scope.finish = false;
    $scope.counter = 10;
    $scope.score = 0;
    countDownCheck = true;
  };
}]);
