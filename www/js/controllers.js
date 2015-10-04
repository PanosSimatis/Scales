angular.module('starter.controllers', [])

.controller('MajorCtrl', function($scope, Chats) 
{
  $scope.chats = Chats.allMajor();
})

.controller('MajorDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.getMajor($stateParams.chatId);
})

.controller('MinorCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.allMinor();
})

.controller('MinorDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.getMinor($stateParams.chatId);
});
