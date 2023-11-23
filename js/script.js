
const todoinput = document.querySelector('.todo-input')
const todoBtn =document.querySelector('.todo-btn')
const todoResult =document.querySelector('.todo-result')

function addTodo(e) {

    e.preventDefault();



    // create li
    const todoLi = document.createElement('li');
    todoLi.classList.add('my-2', 'p-3', 'border', 'rounded',"list-unstyled")
    
    
    // create h4
    const todoTitle = document.createElement('h4')
    todoTitle.innerText = todoinput.value
    todoinput.value = ''
    todoTitle.classList.add("mian-op",'d-inline-block')

    todoLi.appendChild(todoTitle);
    
    
     
    // create div
     const todoAction = document.createElement('div')
     todoAction.classList.add("mian-btn",'d-inline-block', 'float-end')



    // add btn
    const btnComplete = document.createElement('button')
    btnComplete.classList.add('btn','btn-primary')
    btnComplete.innerHTML = '<i class="fa-solid fa-check"></i>'
    todoAction.appendChild(btnComplete);


     // btn 2
     const btnDelete = document.createElement('button')
     btnDelete.classList.add('btn','btn-danger')
     btnDelete.innerHTML = '<i class="fa-solid fa-trash-can"></i></button>'
     todoAction.appendChild(btnDelete)



     todoLi.appendChild(todoAction)

     todoResult.appendChild(todoLi)
    
}





function todoToggle(e){
    const item = e.target

    if (item.classList[1]=='fa-check'){
        const todo_li = item.parentElement.parentElement.parentElement
        todo_li.childNodes[0].classList.toggle('completed')
    }

    else if (item.classList[1]=='fa-trash-can'){
       item.parentElement.parentElement.parentElement.classList.add('deleted')
        
    }
    
}
    


    



todoBtn.addEventListener('click',addTodo)
todoResult.addEventListener('click',todoToggle)