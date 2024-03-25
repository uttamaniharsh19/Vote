angular.module('myApp', [])
    .controller('FormController', ['$scope', '$http', function($scope, $http) {
        $scope.formData = {};
        $scope.showConfirmationMessage = false;

        $scope.submitForm = function() {
            $http.post('/submit-form', $scope.formData)
                .then(function(response) {
                    console.log(response.data);
                    $scope.showConfirmationMessage = true; // Show confirmation message
                    // Optionally reset the form
                    $scope.formData = {};
                }, function(error) {
                    console.error('Error submitting form: ' + error.data);
                    // Handle error
                });
        };
    }]);
