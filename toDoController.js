(function() {
  'use strict';

  angular
    .module('toDoList', []);
})();


(function() {
  'use strict';

  angular
    .module('toDoList')
    .controller('ToDoController', ToDoController);

  ToDoController.$inject = [];

  /* @ngInject */
  function ToDoController() {
// Define Empty Variables
    var vm = this;
    vm.toDoItem = "";
    vm.toDoList = [];
    vm.toDoObject = [];

// CLick Add Items to List
    vm.addItem = function() {

      vm.toDoList.push({
        toDo: vm.toDoObject.toDoItem,
        priority: vm.toDoObject.priorities
      });
    }
  }
})();
