import { useState } from "react";
import { useSelector } from "react-redux";
import TodoItem from './TodoItem'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function CountTodo() {
    const todos = useSelector(state => state)
    const compCount=todos.filter(obj => {if (obj.completed) {return true;}return false;}).length;
    const uncompCount=todos.filter(obj => {if (!obj.completed) {return true;}return false;}).length;
    const percentageCompleted = compCount/todos.length;
    const percentageNotCompleted = uncompCount/todos.length;
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
                                        <u>Count Todo-s</u>
                                    </p>

                                </div>

                                <div className="pb-3 ">
                                    <ul className="list-group list-group-horizontal rounded-0 bg-transparent px-5 py-5 todo_card mx-5">
                                        <li
                                            className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">

                                        </li>
                                        <li
                                            className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                                            <p className="lead fw-normal mb-0">Number of Todo-s Completed</p>
                                        </li>
                                        <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                                            <div className="d-flex flex-row justify-content-end mb-1">
                                              
                                                <div style={{ width: 150, height: 150 }}>
                                                <CircularProgressbar maxValue={1} value={percentageCompleted} text={`${compCount}`} />;
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="pb-3 ">
                                    <ul className="list-group list-group-horizontal rounded-0 bg-transparent px-5 py-5 todo_card mx-5">
                                        <li
                                            className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">

                                        </li>
                                        <li
                                            className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                                            <p className="lead fw-normal mb-0">Number of Todo-s UnCompleted</p>
                                        </li>
                                        <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                                            <div className="d-flex flex-row justify-content-end mb-1">
                                               
                                                <div style={{ width: 150, height: 150 }}>
                                                <CircularProgressbar maxValue={1}  styles={buildStyles({textColor: "red",pathColor: "red",trailColor: ""})} value={percentageNotCompleted} text={`${uncompCount}`} />;
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                              
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CountTodo;