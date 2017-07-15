var app = angular.module('myCards', []);

app.directive('myCard', function() {
  return {
    scope: {
      title: '=myTitle',
      pic: '=myPic'
    },
    templateUrl: 'myCard',
    transclude: true,
    link: function(scope, el, attrs, ctrl, transclude) {
      el.find('.content').append(transclude());
    }
  };
});