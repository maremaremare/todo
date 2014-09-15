angular.module('todo')
  .provider('Task', function() {
    this.$get = ['$resource', function($resource) {
      var Task = $resource('http://dry-falls-4918.herokuapp.com/tasks/:id/', {}, {
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