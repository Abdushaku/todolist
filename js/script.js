let todos = []

const createTask = (e) =>{
    e.preventDefault()
    let message  = document.getElementById('text')
    let descr = document.getElementById('descr')
    console.log(message.value);
    console.log(descr.value);
    if(message.value.length>=3){
let todo = {
    id:todos.length  === 0 ? 1:todos[todos.length-1].id+1,
    message:message.value,
    description:descr.value,
    status:false,
    date:new Date()
    }
    todos.push(todo)
    message.value=''
    console.log(todos);
    renderTodos()
    }else{
    alert('Minimum length is 3 symbols')
    }
}







const renderTodos = ()=>{
    const output  = document.getElementById('output')
    output.innerHTML=''
    todos.map(todo =>{
        let block = document.createElement('div')
        block.style.background=todo.status===true?'coral': 'purple'

        let mess = document.createElement('h2')
        let ness = document.createElement('h3')
        let date = document.createElement('p')
        let set = document.createElement('p')
        

        let del = document.createElement('button')
        let edit = document.createElement('button')
        let done = document.createElement('button')
        
        let descriptionbtn = document.createElement('button')
       

        done.style.display = todo.status===true?'none':'inline'

        todo.status?set.textContent='Todo is Completed':null


        mess.textContent = `Name: ${todo.message}`


        let current_date = todo.date
        ness.textContent = `Discription: ${todo.description} `
        date.textContent=`
        Todo was created ${current_date.getDate()} -
        ${current_date.getMonth()+1} - 
${current_date.getFullYear()} ${current_date.getHours()}:${current_date.getMinutes()}:${current_date.getSeconds()}
        `
        
        
        
        
        descriptionbtn.textContent = 'description'
        del.textContent = 'Delete'
        edit.textContent = 'Edit'
        done.textContent = 'Done'
        

       

        done.addEventListener('click',()=>{
            donetodo(todo.id)
        })


        del.addEventListener('click',()=>{
           todo.status===true?deleteTodo(todo.id):alert('Такой не работает')
        })
    
        
        edit.addEventListener('click',()=>edittodo(todo.id))

        descriptionbtn.addEventListener('click',()=>descriptionbtntodo(todo.id))
       

        block.append(mess,ness,date,del,edit,done,set,descriptionbtn)
        output.append(block)
    })
}
// 



// console.log(new Date);
// console.log(new Date().getDate())
// console.log(new Date().getMonth()+1)
// console.log(new Date().getFullYear())
// console.log(new Date().getHours())
// console.log(new Date().getMinutes())
// console.log(new Date().getSeconds())



const donetodo = (id)=>{
    todos.map(el=>{
        if(id==el.id){
            el.status = true
            renderTodos()
        }
    })
}

const deleteTodo = (id) =>{
   todos = todos.filter(el=>el.id !=id)
   renderTodos()
}

const edittodo =(id)=>{
    todos.map(el=>{
        // console.log(el);
        if(id==el.id){
        let newMessage = prompt('Edit Todo')
        if(newMessage==null || newMessage=='' || newMessage.trim()==''){
            el.message
        }else if(newMessage.length<=3){
            alert('Minimum length is 3 symbols')
        }else{
            console.log(newMessage);
            el.message=newMessage
            renderTodos()
        }
       
        }
    })
}
const descriptionbtntodo =(id)=>{
    todos.map(el=>{
        // console.log(el);
        if(id==el.id){
        let newDescr = prompt('descriptionbtn Todo')
        if(newDescr==null || newDescr=='' || newDescr.trim()==''){
            el.descr
        }else if(newDescr.length<=3){
            alert('Minimum length is 3 symbols')
        }else{
            console.log(newDescr);
            el.description=newDescr
            renderTodos()
        }
       
        }
    })
}