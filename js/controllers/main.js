//main.js
angular
.module('app',['rzModule', 'ui.bootstrap.datetimepicker'])
.controller('newDeliveryCtrl', newDeliveryCtrl);

function time_convert(num)
 { 
  var hours = Math.floor(num / 60);
  var minutes = num % 60;
  hours = (hours<10) ? ("00" + hours).slice(-2) : hours;
  minutes = (minutes<10) ? ("00" + minutes).slice(-2) : minutes;
  return hours + ":" + minutes;
}

newDeliveryCtrl.$inject = ['$scope'];
function newDeliveryCtrl($scope) {

  var sliderRangeOptions = {
    minValue: 480,
    maxValue: 1110,
    options: {
      floor: 0,
      ceil: 1439,
      hideLimitLabels: true,
      translate: function(value, sliderId, label) {
        return time_convert(value);
      }
    }
  };
  $scope.datepickerOptions = {
    format: 'dd/mm/yyyy'
  };

  $scope.pickupHour = angular.copy(sliderRangeOptions);
  $scope.deliveryHour = angular.copy(sliderRangeOptions);
  $scope.pickupDate = moment().format('DD/MM/YYYY');
  $scope.deliveryDate = moment().add(7, 'days').format('DD/MM/YYYY');
}