import React from "react";
import { useDispatch } from "react-redux";
import { checkTodo } from "../redux/actions";
import { deleteTodo } from "../redux/actions";

function TodoItem({ todo }) {
  const dispatch = useDispatch()
  const onToggle = (id) => {
    dispatch(checkTodo(id))
  }
  const handeleDelete = (id) => {
    dispatch(deleteTodo(id))
  }

  return (
    <div className="pb-3 ">
      <ul className="list-group list-group-horizontal rounded-0 bg-transparent px-5 py-5 todo_card mx-5">
        <li
          className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
          <div className="form-check">
            <input className="form-check-input me-0" type="checkbox" value="" id="flexCheckChecked1"
              aria-label="..." checked={todo.completed} onChange={() => onToggle(todo.id)} />
          </div>
        </li>
        <li
          className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
          <p className="lead fw-normal mb-0">{todo.title}</p>
        </li>
        <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
          <div className="d-flex flex-row justify-content-end mb-1">
            <a href="#!" onClick={() => handeleDelete(todo.id)} className="text-danger icon" data-mdb-toggle="tooltip" title="Delete todo"><i
              className="fas fa-trash-alt"></i></a>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default TodoItem