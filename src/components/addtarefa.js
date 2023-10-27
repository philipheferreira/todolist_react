import React from "react";

const AddForm = () => {
    return <div className="add-form">
        <h2>Criar Tarefa:</h2>
        <form>
            <input type="text" placeholder="Digite o Título" />
            <select>
                <option value="" >Selecione uma categoria</option>
                <option value="" >Trabalho</option>
                <option value="" >Pessoal</option>
                <option value="" >Selecione uma categoria</option>
            </select>
            <button type="submite">Criar Tarefa</button>
        </form>
    </div>
}


export default AddForm;
