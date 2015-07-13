var textApp = angular.module("hypertext", []);

textApp.controller("MainController", ['$scope', '$timeout', function($scope, $timeout) {
  var countDownCheck = true;
  $scope.countDownTimer = false;
  $scope.score = 0;
  $scope.start = false;
  $scope.finish = false;
  $scope.counter = 3;

  //=======================================//

  $scope.checker = function() {
    if($scope.start && !$scope.finish && $scope.answer === newsText[0]) {
      $scope.score += newsText[0].length;
      newsText[0] = wordArray[randomize()];
      dwAText = "", cnews=0, eline=0, cchar=0, mxText=0;
      document.news.news2.value = "";
      doNews();
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
    newsText[0] = wordArray[randomize()];
    var myTimeout = $timeout($scope.onTimeout,1000);
  };

  $scope.startGame = function() {
    doNews();
    $scope.start = true;
    $scope.counter = 25;
    var myTimeout = $timeout($scope.onTimeout,1000);
  };

  $scope.resetGame = function() {
    $scope.start = false;
    $scope.finish = false;
    $scope.counter = 10;
    $scope.score = 0;
    countDownCheck = true;
    dwAText = "", cnews=0, eline=0, cchar=0, mxText=0;
    document.news.news2.value = "";
  };

}]);
