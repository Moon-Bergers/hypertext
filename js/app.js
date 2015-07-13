var textApp = angular.module("hypertext", []);

textApp.controller("MainController", ['$scope', '$timeout', '$http', function($scope, $timeout, $http) {

  var countDownCheck = true;
  var wordArray = [];
  var randomWords = [];
  $scope.countDownTimer = false;
  $scope.start = false;
  $scope.finish = false;
  $scope.score = 0;
  $scope.counter = 3;
  $scope.currentWord = "a";

  $http.get('js/data.json').success(function(data) {
    wordArray = data;
  });

  $scope.checker = function() {
    if($scope.start && !$scope.finish && $scope.answer === $scope.currentWord) {
      $scope.score += $scope.currentWord.length;
      $scope.answer = "";
      nextWord();
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
    nextWord();
  };

  $scope.resetGame = function() {
    $scope.start = false;
    $scope.finish = false;
    $scope.counter = 10;
    $scope.score = 0;
    countDownCheck = true;
  };

  function nextWord () {
    if (randomWords.length === 0) {
      randomWords = wordArray.slice(0);
      randomWords = shuffle(randomWords);
    }
    $scope.currentWord = randomWords.pop();
  }


  function timeCheck () {
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
  }

  //Fisher-Yates Shuffle
  function shuffle (array) {
    var m = array.length, t, i;
    while (m > 0) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }
}]);
