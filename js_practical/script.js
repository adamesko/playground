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

  changeTodo: function(position, newValue){
    todoList.changeTodo(position, newValue);
    view.displayTodos();
  },
  deleteTodo: function(position){
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function(position){
    todoList.toggleCompleted(position);
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
  },
  inputEvents: function(){
    var addTodoInputText = document.getElementById('addTodoInputText');
    addTodoInputText.addEventListener('keyup',function(event){
    //  event.preventDefault(); - jeszcze nie wiem do czego to
      if (event.keyCode === 13) {
        todoList.addTodo(addTodoInputText.value);
        addTodoInputText.value = '';
        view.displayTodos();
      }
    })
  },
  toggleEvents: function(){
    var todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function(event){
      if(event.target.nodeName == 'LI' && event.ctrlKey == false){
        handlers.toggleCompleted(parseInt(event.target.id));
      }
    })
  },
  changeEvents: function(){
    var todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function(event){
      var elementClickedId = event.target.id;
      if(event.target.nodeName == 'LI' && event.ctrlKey == true){
        var inputElement = document.createElement('input');
        var todoLi = document.getElementById(elementClickedId)
        inputElement.type = "text";
        inputElement.value = todoList.todos[elementClickedId].todoText;
        todoLi.innerHTML = "";
        todoLi.appendChild(inputElement);
        inputElement.focus();
        todoLi.addEventListener('keyup',function(event){
          //  event.preventDefault(); - jeszcze nie wiem do czego to
            if (event.keyCode === 13) {
              if (inputElement.value == ""){
                view.displayTodos();
              } else {
                handlers.changeTodo(parseInt(elementClickedId), inputElement.value);
              }
            }
          });
        todoLi.addEventListener('focusout',function(event){
          if (inputElement.value == ""){
          view.displayTodos();
          } else {
            handlers.changeTodo(parseInt(elementClickedId), inputElement.value);
          }
        })
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
    deleteButton.textContent = 'X';
    return deleteButton;
  },
};
handlers.deleteEvents();
handlers.inputEvents();
handlers.toggleEvents();
handlers.changeEvents();
