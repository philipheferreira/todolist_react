import './Lista.css';
import { useState } from "react"; 

function App() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            texto: "Estudar React",
            categoria: "Estudo",
            completa: false
        },
        {
            id: 2,
            texto: "Ir para academia",
            categoria: "Pessoal",
            completa: false
        },
        {
            id: 3,
            texto: "Treinor boxe",
            categoria: "Pessoal",
            completa: false
        }
    ]) // definit os todos em um state para armazenar os dados iniciais
  return (
    <div className="App">
      <header className="App-header">
        {todos.map((todo) => (
            <p>{todo.texto}</p>
        ))}
      </header>
    </div>
  );
}

export default App;
