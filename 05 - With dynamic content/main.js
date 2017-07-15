var app = angular.module('myCards', []);

app.controller('MyDataCtrl', function() {
  var data = this;
  data.title = 'Ilfracombe';
  data.pic = 'http://teropa.info/ilfracombe.jpg';
  data.content = [
    'Ilfracombe /ˈɪlfrəkuːm/ is a seaside resort and civil parish on the North Devon coast, England with a small harbour, surrounded by cliffs.',
    'The parish stretches along the coast from \'The Coastguard Cottages\' in Hele Bay toward the east and 4 miles along The Torrs to Lee Bay toward the west. The resort is hilly and the highest point within the parish boundary is at \'Hore Down Gate\', 2 miles inland and 860 feet (270 m) above sea level.'
  ];
});

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
    controller: function() {
    },
  };
});
