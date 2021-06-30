import React, { useState } from 'react'

export default function TarefasForm(props){

    const [countId, setCountId] = useState(1)
    const [entrada, setEntrada] = useState()
    

    const handleChange = e => {
        setEntrada(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        let n = countId + 1
        setCountId(n)
        
        props.onSubmit({
            id: countId ,
            texto: entrada
        })
        setEntrada('')
    }

    return(
        <div className="lado-esquerdo">
            <h1>Organizador de tarefas</h1>
            <h3>Desafio Heeds</h3>
            <form className="tarefa-form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Digite uma tarefa"
                    value={entrada}
                    name="text"
                    className="tarefa-input"
                    onChange={handleChange}
                />
                <button className="botao-adicionar">Adicionar</button>
            </form>
        </div>
    )
}