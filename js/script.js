var app = angular.module("myMod",[]);
  app.controller("myCtrl", function($scope, $interval){

    var randomWords = ['dog ', 'cat ', 'coffee ', 'meow ', 'bark ', 'uuuuughhhhhhhhh '];
    var randomClass= ['red ', 'blue ', 'green ', 'yellow ', 'spin '];
    $scope.heading = 'Silly Words';
    $scope.wordsOnPage = [];

    $scope.talk = function() {

      var mixFuncs = [addDecorWord, addUndecorWord];

      function rando (){

        return mixFuncs[Math.floor(Math.random() * mixFuncs.length)]();

      };

      $interval(rando, 100, 500);

    }


    function addUndecorWord() {

      var newElement = {};
      newElement.word =  randomWords[Math.floor(Math.random() * randomWords.length)];
      newElement.decor = '';
      $scope.wordsOnPage.push(newElement);

    }


    function addDecorWord() {
      var newElement = {};
      newElement.word =  randomWords[Math.floor(Math.random() * randomWords.length)];
      newElement.decor = randomClass[Math.floor(Math.random() * randomClass.length)];
      $scope.wordsOnPage.push(newElement);
    }

  });
