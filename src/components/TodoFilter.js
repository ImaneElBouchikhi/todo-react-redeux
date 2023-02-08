import { useState } from "react";
import { useSelector } from "react-redux";
import TodoItem from './TodoItem'


function TodoFilter() {
    const todos = useSelector(state => state)
    const [showCompleted,setShowCompleted]=useState(true)
    const [showNotCompleted,setShowNotCompleted]=useState(false)
    return (

        <div>
            <section className="">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card" id="list1">
                                <div className="card-body py-4 px-4 px-md-5">

                                    <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                                        <i className="fas fa-check-square me-1"></i>
                                        <u>Filter Todo-s</u>
                                    </p>

                                </div>
                                <div className="text-center mb-4 pb-3">
                                    <ul className="navbar-nav flex-row justify-content-center  me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <button className="btn btn-success  me-2" onClick={()=>{setShowCompleted(true);setShowNotCompleted(false)}}>Completed ToDos</button>
                                        </li>
                                        <li className="nav-item">
                                            <button className="btn btn-warning  me-2" onClick={()=>{setShowCompleted(false);setShowNotCompleted(true)}}>Uncompleted ToDo-s</button>
                                        </li>
                                    </ul>
                                </div>

                                {
                                  showCompleted &&  todos.flatMap((todo) => todo.completed ? <TodoItem key={todo.id} todo={todo} /> : [])
                                }

                                {
                                  showNotCompleted &&   todos.flatMap((todo) => !todo.completed ? <TodoItem key={todo.id} todo={todo} /> : [])
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TodoFilter;