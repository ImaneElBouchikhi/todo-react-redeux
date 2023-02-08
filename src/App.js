import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import AddTodo from "./components/AddTodo";
import Navbar from "./components/Navbar/Navbar";
import TodoListe from "./components/TodoListe";
import TodoFilter from "./components/TodoFilter";
import CountTodo from "./components/CountTodo";

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path="/" element={<TodoListe/>} />
        <Route path="/addTodo" element={<AddTodo/>} />
        <Route path="/filterTodo" element={<TodoFilter/>} />
        <Route path="/countTodo" element={<CountTodo/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
