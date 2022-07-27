const form=document.querySelector(".formfield");
const todovalue=document.querySelector("#inputtodo");
const todobtn=document.querySelector(".btn");
const cardbody=document.querySelector(".card-body");
const ulist=document.querySelector(".lists");
const message=document.querySelector("#message");






const showmessage=(text,status)=>{
    message.textContent=text;
    message.classList.add(`bg-${status}`);

    setTimeout(()=>{
        message.textContent=" ";
        message.classList.remove(`bg-${status}`);

    },1000);
}


/*const addtodolist=(todo,randomid)=>{
    const todoelement=document.createElement("li");
    todoelement.id=randomid;
    todoelement.classList.add("li-style");

    todoelement.innerHTML= ` 
    <span> ${todo} </span>
    <span> <button class="btn" id="delete"> <i class="fa fa-trash"> </i></button> </span>`;

    ulist.appendChild(todoelement);
}*/


const addtodolist=(todo,randomid)=>{
    console.log(todo);
    const todoelement=document.createElement("li");
    todoelement.id=randomid;
    todoelement.classList.add("li-style");

    todoelement.innerHTML= ` 
    <span> ${todo} </span>
    <span> <button class="dbtn" id="delete"> <i class="fa fa-trash"> </i></button> </span>`;

    ulist.appendChild(todoelement);
    showmessage("todo is added", "success");

    const deletebtn=todoelement.querySelector("#delete");
    deletebtn.addEventListener("click", deletefn);
}

function deletefn(event){
    const targetvalue=event.target.parentElement.parentElement.parentElement;
    ulist.removeChild(targetvalue);
    showmessage("todo is deleted", "danger");

};

const createtodo= (event)=>{
    event.preventDefault();
    const todo=todovalue.value;

    const randomid=Date.now().toString();

    addtodolist(todo,randomid);

    const  todos=localStorage.getItem("mytodos") ? JSON.parse(localStorage.getItem("mytodos")) :[];
    todos.push({todo,randomid});
    localStorage.setItem("mytodos", JSON.stringify(todos));

    todovalue.value=" ";
};

const loadTodos = () => {
    const todos = getTodosFromLocalStorage();
    todos.map((todoe) => createTodo(todoe.randomid, todoe.todo));
  };


  

  


form.addEventListener("submit", createtodo);