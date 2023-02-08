import produce from "immer";
const initialState = [
    {
        id:1,
        title:"preparer le cours",
        completed: true
    },
    {
        id:2,
        title:"enregitrer le cours",
        completed: false
    },
]

const nextTodoId = (draft) =>{
    const maxId = draft.reduce((maxId, todo)=> Math.max(todo.id, maxId), -1)
    return maxId + 1
}

const todoReducer = (state = initialState , action ) =>{
    switch(action.type){
        case 'CHECK_TODO':
            return produce(state, draft=>{
                draft.map((ele)=>{
                    if(ele.id===action.payload){
                        ele.completed = !ele.completed;
                    }
                })
            })
        case 'DELETE_TODO':
            return produce(state, draft=>{
                return draft.filter((ele)=>ele.id !== action.payload)
            })
        case 'ADD_TODO':
            return produce(state, draft=>{
                draft.push(
                    {
                        id: nextTodoId(draft),
                        title: action.payload,
                        completed: false

                    }
                )
            })
            
        
        default:
            return state;
    }
    return state;
}

export default todoReducer