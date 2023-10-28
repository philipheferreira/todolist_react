import React from "react";
import { useState } from "react"

const AddForm = () => {

    const [valor, setValor] = useState("");
    const [categoria, setCategoria] = useState("");

    const mandarSubmicao = (e) => {
        e.preventDefault();
        console.log(valor, categoria)
    }

    return <div className="add-form">
        <h2>Criar Tarefa:</h2>
        <form onSubmit = {mandarSubmicao}>
            <input type="text" placeholder="Digite o Título" onChange={(e) => setValor(e.target.valor)} />
            <select onChange={(e) => setCategoria(e.target.valor)}>
                <option valor="" >Selecione uma categoria</option>
                <option valor="Trabalho" >Trabalho</option>
                <option valor="Pessoal" >Pessoal</option>
                <option valor="Estudos" >Selecione uma categoria</option>
            </select>
            <button type="submit">Criar Tarefa</button>
        </form>
    </div>
}


export default AddForm;
