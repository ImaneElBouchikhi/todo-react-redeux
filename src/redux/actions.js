export const checkTodo = (id)=>{
    return{
        type:'CHECK_TODO',
        payload : id
    }
}
export const deleteTodo = (id)=>{
    return{
        type:'DELETE_TODO',
        payload : id
    }
}
export const addTodo = (title)=>{
    return{
        type:'ADD_TODO',
        payload : title
    }
}
