import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/actions'

function AddTodo() {
    const refTitle = useRef(null)
    const dispatch = useDispatch()

    const handeleAdd = () =>{
        const title = refTitle.current.value
        if(title!==""){
            dispatch(addTodo(title))
            refTitle.current.value = ""
        }
    }
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
                    <u>Add New Todo-s</u>
                  </p>

                  <div className="pb-2">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex flex-row align-items-center">
                          <input type="text" ref={refTitle} className="form-control form-control-lg" id="exampleFormControlInput1"
                            placeholder="Add new..." />    
                          <div>
                            <button type="submit" onClick={handeleAdd} className="btn btn-primary px-4 py-2">Add</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AddTodo