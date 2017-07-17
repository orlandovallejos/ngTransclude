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
    controller: function($element, $transclude) {
      var ctrl = this;
      var content = $element.find('.content'); 
      var transcludedScope;
      
      ctrl.expand = function() {
        $transclude(function(transEl, transScope) {
          content.append(transEl);
          transcludedScope = transScope;
          transScope.myCardCollapse = ctrl.collapse;
        });
        ctrl.expanded = true;
      };
      ctrl.collapse = function() {
        transcludedScope.$destroy();
        transcludedScope = null;
        content.empty();
        ctrl.expanded = false;
      };
    }
  };
});