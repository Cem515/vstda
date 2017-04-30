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
        var vm = this;

        vm.item = "";

vm.addItem = function() {

    vm.start.push('vm.item');

}

vm.priority = function() {


}

vm.alpha = function() {


}
        }
    }
})();
