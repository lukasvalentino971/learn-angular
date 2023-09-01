var app = angular.module("ToDoApp", []);

app.controller("ToDoController", function($scope) {
    $scope.tasks = [];
    
    $scope.addTask = function() {
        if ($scope.newTask) {
            $scope.tasks.push($scope.newTask);
            $scope.newTask = "";
        }
    };
});
