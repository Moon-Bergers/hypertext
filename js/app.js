var textApp = angular.module("hypertext", []);

textApp.controller("MainController", ['$scope', '$timeout', '$http', function($scope, $timeout, $http) {

  var wordArray = [], randomWords = [], easyArray = [], mediumArray = [], hardArray = [];
  var countDownCheck = true;

  $scope.countDownTimer = false;
  $scope.start = false;
  $scope.finish = false;
  $scope.score = 0;
  $scope.counter = 3;
  $scope.currentWord = "a";

  $http.get('js/easy.json').success(function(data) {
    easyArray = data;
  });
  $http.get('js/medium.json').success(function(data) {
    mediumArray = data;
  });
  $http.get('js/hard.json').success(function(data) {
    hardArray = data;
  });

  //=======================================//

  $scope.checker = function() {
    if ($scope.start && !$scope.finish && $scope.answer === newsText[0]) {
      $scope.score += newsText[0].length;
      dwAText = "", cnews=0, eline=0, cchar=0, mxText=0;
      document.news.news2.value = "";
      $scope.answer = "";
      nextWord();
      newsText[0] = $scope.currentWord;
      doNews();
    }
  };

  $scope.onTimeout = function(){
      $scope.counter--;
      myTimeout = $timeout($scope.onTimeout,1000);
      timeCheck();
  };

  $scope.countDown = function() {
    if ($scope.value == 1) {
      wordArray = easyArray;
    }
    if ($scope.value == 2) {
      wordArray = mediumArray;
    }
    if ($scope.value == 3) {
      wordArray = hardArray;
    }
    $scope.counter = 3;
    $scope.countDownTimer = true;
    var myTimeout = $timeout($scope.onTimeout,1000);
  };

  $scope.startGame = function() {
    $scope.start = true;
    $scope.counter = 25;
    nextWord();
    newsText[0] = $scope.currentWord;
    doNews();
    var myTimeout = $timeout($scope.onTimeout,1000);
  };

  $scope.resetGame = function() {
    $scope.start = false;
    $scope.finish = false;
    $scope.counter = 10;
    $scope.score = 0;
    countDownCheck = true;
    randomWords = [];
    dwAText = "", cnews=0, eline=0, cchar=0, mxText=0;
    document.news.news2.value = "";
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
