
/*controller determines what data gets bound into the view, accepts any data sent from the view, negotiates saving data by talking to the model*/
/*does not talk directly to the view but goes through a ViewModel called the scope*/
/* the scope is all the data for the view the scope conncts the controller and the view*/

function ListController($scope) {
  
  $scope.todos = [
    {text:'Feed the cat', done:false},         
    {text: 'Cut the grass', done:false}
  ];
  
  
  $scope.addTodo = function () {
    $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.formTodoText = '';
  };
 

$scope.clearCompleted = function () { 
          $scope.todos = $scope.todos.filter(function(todo) {
            return !todo.done
          });
        };
};




