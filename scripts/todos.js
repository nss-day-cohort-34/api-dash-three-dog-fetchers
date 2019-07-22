const whereToPutTheTodosList = document.querySelector("#todos_list") 

const toDosListFetcher = () => {

fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(data => data.json())
  .then((arrayOfTodosList) => {
    let value = 1
      for (let i = 0; i < 30; i++){

      
      const singleTodosList = arrayOfTodosList[i];
      
    }
  })

    
    
    
  }

toDosListFetcher()


const todosListConverter = (toDosListObject) =>{
  return `
  <section class="todosList">
    <h1 class="toDos_title">${toDosListObject.title}</h1>
    <form action="/todos.js"><input type= "checkbox" name="complete" 
  </section>  
  `
}


const displayTodosListInDOM = (todosListHTMLRepresentation) => {
  whereToPutTheTodosList.innerHTML += todosListHTMLRepresentation
}