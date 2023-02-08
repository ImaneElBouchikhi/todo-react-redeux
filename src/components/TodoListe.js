import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import 'bootstrap/dist/css/bootstrap.css';
import '../components/style.css'

function TodoListe() {
  const todos = useSelector(state => state)
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
                    <u>My Todo-s List</u>
                  </p>
                  <hr className="my-4" />


                  {
                    todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
                  }



                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default TodoListe