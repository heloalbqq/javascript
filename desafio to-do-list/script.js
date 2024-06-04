//  Seleçã de elementos

    const todoForm =  document.querySelector("#todo-form")
    const todoInput =  document.querySelector("#todo-input")
    const todoList =  document.querySelector("#todo-list")
    const editForm =  document.querySelector("#edit-form")
    const editInput =  document.querySelector("#edit-input")
    const cancelEditBtn =  document.querySelector("#cancel-edit-btn")

//  Funções

    const saveTodo = (text) => {
        const todo = document.createElement('div')
        todo.classList.add('todo')

        const todoTitle = document.createElement('h3')
        todoTitle.innerText = text
        todo.appendChild(todoTitle)

        const doneBtn = document.createElement('button')
        doneBtn.classList.add('finish-todo')
        doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
        todo.appendChild(doneBtn)

        const editBtn = document.createElement('button')
        editBtn.classList.add('edit-todo')
        editBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
        todo.appendChild(editBtn)

        const deleteBtn = document.createElement('button')
        deleteBtn.classList.add('remove-todo')
        deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        todo.appendChild(deleteBtn)

        todoList.appendChild(todo)

        todoInput.value = ''
        todoInput.focus()
    }
//  Eventos

    todoForm.addEventListener("submit", (e) => {
        e.preventDefault() //impede o comportamento de eventos no navegador
        //console.log('Enviou form') Para ver se está funcionando (vai no inspecionar do google e depois em console)
        
        const inputValue = todoInput.value //armazena o valor digitado na var
        
        if(inputValue) {
            //console.log(inputValue) olha no inspecionar p ver se tá certo
           saveTodo(inputValue)
        }
    })

        document.addEventListener('click', (e) => {
            const targetEl = e.target //p saber onde clicou
            const parentEl = targetEl.closest('div') //para achar a "caixa" de onde vc clicou

            if(targetEl.classList.contains('finish-todo')) { //verif se tem a var
                parentEl.classList.toggle('done') //marca como feito
            }

            if(targetEl.classList.contains('remove-todo')) {
                parentEl.remove()
            }

            if(targetEl.classList.contains('edit-todo')) {
                console.log('editou')
            }
        })