var app = angular.module('myCards', []);

app.directive('myCard', function() {
  return {
    scope: {},
    controllerAs: 'ctrl',
    bindToController: {
      title: '=myTitle',
      pic: '=myPic'
    },
    templateUrl: 'myCard',
    transclude: true,
    controller: function() { }
  };
});