/**
 * Created by Tiemo.Hunger on 4/10/2015.
 */
angular.module('divinePrototype',['angular-chartist']);

angular.module('divinePrototype').controller('MainCtrl',['$scope',function($scope){

    var vm = this;
    $scope.chartData = {
    labels:['a','b','v'],

      series:[[1,2,3,4],[0,0,0,0]
      ]
    };

}]);
