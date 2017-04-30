(function() {
    'use strict';

    angular
        .module('todo', []);
})();

(function() {
    'use strict';

    angular
        .module('todo')
        .controller('ToDoController', ToDoController);

    ToDoController.$inject = [];

    /* @ngInject */
    function ToDoController() {
        var vm = this;
        vm.start = "To Do:";
        vm.item = "";

vm.addItem = function() {

    vm.start.push('vm.item');

}

vm.priority = function() {


}

vm.alpha = function() {


}
        }
})();
