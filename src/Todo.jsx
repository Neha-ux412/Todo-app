

function Todo({todo,onDelete,onToggle}){
    return(

        <li>
            <input type="checkbox" checked={todo.completed} onChange={()=>onToggle(todo.id)}></input>
            <strong>{todo.title}</strong>-{todo.description}
            &nbsp;&nbsp;&nbsp;
            <button onClick={()=>onDelete(todo.id)}>Delete</button>
        </li>
    )
}

export default Todo;