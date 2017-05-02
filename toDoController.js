
(function() {
  'use strict';

  angular
    .module('toDoList')
    .controller('ToDoController', ToDoController);

  ToDoController.$inject = [];

  /* @ngInject */
  function ToDoController() {


    var vm = this;
    var value = vm.priorities
    vm.toDoItem = "";
    vm.toDoList = [];
    vm.sort = 'value';
    vm.reverse = false;


    vm.addItem = function() {

      vm.toDoList.push(vm.toDoObject.toDoItem);
      console.log(vm.toDoObject);
    }

    vm.sortBy = function(){


    }
  }
})();
