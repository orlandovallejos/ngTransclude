var app = angular.module('myCards', []);

app.directive('myCard', function() {
  return {
    scope: {
      title: '=myTitle',
      pic: '=myPic',
      content: '@myContent'
    },
    templateUrl: 'myCard'
  };
});