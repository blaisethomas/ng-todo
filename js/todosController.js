angular
    .module('todoApp')
    .controller('TodosController', TodosController)    
    
function TodosController($log){
    //console.log($log)
    
    var self = this;
    self.add = addTodo;
    self.newTodo = {task: '' };

    self.all = [
        {task: 'the task you want to do', done: false},
        {task: "build an awesome todo list", done: false},
        {task: "get super good at Angular", done: false},
        {task: "party on code", done: false},
        {task: "tackle the bonus challenges for this lesson", done: false},
        {task: "take a nap", done: false}
    ];
    
    $log.log(self.all)
    $log.warn("test warning")
    $log.info("test info")
    $log.error("test error")

    function addTodo(){
        self.all.push({task: self.newTodo.task, done:false})
        self.newTodo.task = "";
        $log.warn(self.all)
    }
}