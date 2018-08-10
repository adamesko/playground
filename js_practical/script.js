var todoList = {
  todos: [],
  displayTodos: function(){
    if(this.todos.length === 0){
      console.log("This todo list is empty");
    } else {
      console.log('My Todos: ')
      for(var i = 0; i < this.todos.length; i++){
        if (this.todos[i].completed === false){
          console.log('( ) ' + this.todos[i].todoText);
        } else {
          console.log('(x) ' + this.todos[i].todoText);
        }
      }
    }
   },
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    }),
    this.displayTodos();
  },
  addTodos: function(number, todoText){
    for(var i = 1; i < (number + 1); i++){
      this.todos.push({
        todoText: todoText + " " + i,
        completed: false
      })
    };
    this.displayTodos();
  },
  deleteTodo: function(position){
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  toggleCompleted: function(position){
    var thisTodo = this.todos[position]
    thisTodo.completed = !thisTodo.completed;
    this.displayTodos();
  },
  toggleAll: function(){
    var todoCompleted = 0;
    for (var i = 0; i < this.todos.length; i++){
      if (this.todos[i].completed === true){
        todoCompleted++;
      }
    }
    if (todoCompleted === this.todos.length){
      for(var i = 0; i < this.todos.length; i++){
        this.todos[i].completed = false;
      }
    } else {
      for(var i = 0; i < this.todos.length; i++){
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  },
  displayCompleted: function(){
    console.log('Completed tasks:');
    for (var i = 0; i < this.todos.length; i++){
      if (this.todos[i].completed === true){
        console.log('(x) ' + this.todos[i].todoText);
      }
    }
  },
  displayUncompleted: function(){
    console.log('Uncompleted tasks:');
    for (var i = 0; i < this.todos.length; i++){
      if (this.todos[i].completed === false){
        console.log('( ) ' + this.todos[i].todoText);
      }
    }
  },
  clearTodos: function(){
    this.todos = [];
    this.displayTodos();
  }
}

var handlers = {
  displayTodos: function(){
    todoList.displayTodos();
  },
  addTodo: function(){
    var addTodoInputText = document.getElementById('addTodoInputText');
    todoList.addTodo(addTodoInputText.value);
    addTodoInputText.value = '';
  },
  changeTodo: function(){
    var changeTodoInputPosition = document.getElementById('changeTodoInputPosition');
    var changeTodoInputText = document.getElementById('changeTodoInputText');
    todoList.changeTodo(changeTodoInputPosition.valueAsNumber, changeTodoInputText.value);
    changeTodoInputPosition.value = '';
    changeTodoInputText.value = '';
  },
  deleteTodo: function(){
    var deleteTodoInputPosition = document.getElementById('deleteTodoInputPosition');
    todoList.deleteTodo(deleteTodoInputPosition.valueAsNumber);
    deleteTodoInputPosition.value = '';
  },
  toggleCompleted: function(){
    var toggleCompletedInputPosition = document.getElementById('toggleCompletedInputPosition');
    todoList.toggleCompleted(toggleCompletedInputPosition.value);
    toggleCompletedInputPosition.value = '';
  },
  toggleAll: function(){
    todoList.toggleAll();
  }
};
