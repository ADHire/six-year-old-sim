angular.module("myMod",[])
  .controller("myCtrl", function($scope){
    $scope.heading = 'Silly Words';
    $scope.randomWords = [
    'Tim ',
    'Okay ',
    'Hello ',
    'Random ',
    'Words ',
    'Oops '
    ];
    $scope.wordsOnPage = [];
    $scope.addUndecoratedWord = function (){
      var newElement = {};
      newElement.word =  $scope.randomWords[Math.floor(Math.random()* $scope.randomWords.length)];
      newElement.decor = '';
      $scope.wordsOnPage.push(newElement);
    }
    $scope.addDecoratedWord = function(){
      var newElement = {};
      newElement.word =  $scope.randomWords[Math.floor(Math.random()* $scope.randomWords.length)];
      newElement.decor = 'red';
      $scope.wordsOnPage.push(newElement);
    }
  });