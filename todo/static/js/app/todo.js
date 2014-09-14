var app = angular.module('todo', ['mk.editablespan', 'ngRoute', 'ngResource']);


app.controller('main', ['$scope', '$route', '$http', 'Task',
    function($scope, $route, $http, Task) {

        $scope.task = new Task();
        $scope.tasklist = Task.query();

        $scope.save = function(task) {
            var data = {
                title: task.title
            };

            if (task.id) {
                var url = 'http://127.0.0.1:8000/tasks/' + task.id + '/';
                $http.put(url, data).then(function(result) {
                    console.log(result.data);
                });
            } else {
                var url = 'http://127.0.0.1:8000/tasks/';
                $http.post(url, data).then(function(result) {
                    console.log(result.data);
                    $scope.tasklist.push(task);
                    $scope.visible = false;
                    $scope.task = new Task();

                });
            }
        }

        $scope.delete = function(task) {
          $scope.tasklist = _.without($scope.tasklist, task)
            Task.deletetask(task)
            
        }


        $scope.visible = false;
        //$scope.tasklist = [{title:'aaa'}, {title:'bbb'}, {title:'ccc'}];



    }
]);



// app.controller('main', function($scope, $http, Task){ 

//     // Start as not visible but when button is tapped it will show as true 

//         $scope.visible = false;

//     // Create the array to hold the list of Birthdays

//         $scope.tasklist = [{title:'aaa'}, {title:'bbb'}, {title:'ccc'}];
//         $http.get('/tasks/').success(function(data) {
//             console.log(data);
//             angular.forEach(data, function(value, key) {
//                 console.log(value);
//                 $scope.tasklist.push({
//                     title: value.title,
//                     id: value.id

//                 });
//             });

//             console.log($scope.tasklist);
//         });



//     // Create the function to push the data into the "bdays" array

//     $scope.newTask = function(){

//         $scope.tasklist.push({title:$scope.ttitle});

//         $scope.ttitle = '';
//     };

//     $scope.sendToDjango = function(task){

//         $http.put('/tasks/'+task.id).success
//     }

//     // $scope.editTask = function(){

//     //     $scope.;

//     //     $scope.ttitle = '';
//     // };

// });