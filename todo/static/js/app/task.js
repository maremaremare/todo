angular.module('todo')
  .provider('Task', function() {
    this.$get = ['$resource', function($resource) {
      var Task = $resource('http://127.0.0.1:8000/tasks/:id/', {}, {
        update: {
          method: 'PUT'
        },

        deletetask: {
          method: 'DELETE'
        },


        
      })

      return Task;
    }];
  });