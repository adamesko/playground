var todoList = {
  todos: [],
  addTodo: function(todoText){
    if (todoText === ''){
      console.log('Empty value of Todo');
    } else {
      this.todos.push({
        todoText: todoText,
        completed: false
      })
    }
  },
  deleteTodo: function(position){
    this.todos.splice(position, 1);
  },
  changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText;
  },
  toggleCompleted: function(position){
    var thisTodo = this.todos[position]
    thisTodo.completed = !thisTodo.completed;
  },
  toggleAll: function(){
    var todoCompleted = 0;
    var totalTodos = this.todos.length;
    this.todos.forEach(function(element){
      if (element.completed === true){
        todoCompleted++;
      }
    })
    this.todos.forEach(function(todo){
      if(totalTodos === todoCompleted){
        todo.completed = false;
      } else {
        todo.completed = true;
      }
    })
  },
  clearTodos: function(){
    this.todos = [];
  }
}

var handlers = {
  addTodo: function(){
    var addTodoInputText = document.getElementById('addTodoInputText');
    todoList.addTodo(addTodoInputText.value);
    addTodoInputText.value = '';
    view.displayTodos();
  },
  changeTodo: function(){
    var changeTodoInputPosition = document.getElementById('changeTodoInputPosition');
    var changeTodoInputText = document.getElementById('changeTodoInputText');
    todoList.changeTodo(changeTodoInputPosition.valueAsNumber, changeTodoInputText.value);
    changeTodoInputPosition.value = '';
    changeTodoInputText.value = '';
    view.displayTodos();
  },
  deleteTodo: function(position){
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function(){
    var toggleCompletedInputPosition = document.getElementById('toggleCompletedInputPosition');
    todoList.toggleCompleted(toggleCompletedInputPosition.value);
    toggleCompletedInputPosition.value = '';
    view.displayTodos();
  },
  toggleAll: function(){
    todoList.toggleAll();
    view.displayTodos();
  },
  clearTodos: function(){
    todoList.clearTodos();
    view.displayTodos();
  },
  deleteEvents: function(){
    var todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function(event){
      var elementClicked = event.target;
      if(elementClicked.className == 'deleteButton'){
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    })
  }
};

var view = {
  displayTodos: function(){
    var todoUl = document.querySelector('ul');
    todoUl.innerHTML = '';
    todoList.todos.forEach(function(element,index){
      var todoLi = document.createElement('li');
      todoUl.appendChild(todoLi);
      if(element.completed === true){
        todoLi.textContent = "(x) " + element.todoText;
      } else {
        todoLi.textContent = "(  ) " + element.todoText;
      };
      todoLi.id = index;
      todoLi.appendChild(this.createDeleteButton());
    }, this)
  },
  createDeleteButton: function(){
    var deleteButton = document.createElement('button');
    deleteButton.className = 'deleteButton';
    deleteButton.textContent = 'Delete';
    return deleteButton;
  },
};
handlers.deleteEvents();
