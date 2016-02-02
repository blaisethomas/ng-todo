angular
    .module('todoApp')
    .controller('TodosController', TodosController)    
    
function TodosController($log, $scope){
    //console.log($log)
    
    //var self = this;
    $scope.add = addTodo;
    $scope.newTodo = {task: '' };

    $scope.all = [
        {task: 'the task you want to do', done: false},
        {task: "build an awesome todo list", done: false},
        {task: "get super good at Angular", done: false},
        {task: "party on code", done: false},
        {task: "tackle the bonus challenges for this lesson", done: false},
        {task: "take a nap", done: false}
    ];
    
    $log.log($scope.all)
    // $log.warn("test warning")
    // $log.info("test info")
    // $log.error("test error")

    function addTodo(){
        $scope.all.push({task: $scope.newTodo.task, done:false})
        $scope.newTodo.task = "";
        $log.warn(self.all)
    }
}