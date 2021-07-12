import React, { ChangeEvent, useState } from 'react'
import './TarefaForm.css'

import { taskType } from '../../tipos/Tipos'

type props = {
    onSubmit: (n: taskType) => void
    edit?: taskType
}

export default function TarefasForm({onSubmit,edit}: props){

    const [countId, setCountId] = useState<number>(edit ? edit.id : 1)
    const [input, setInput] = useState<string>(edit ? edit.text : '')
    

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setInput(e.target.value)
    }

    const handleSubmit = (e: any): void => {
        e.preventDefault()

        let n = countId + 1
        setCountId(n)
        
        onSubmit({
            id: countId,
            text: input
        })
        setInput('')
    }

    return(
        <>
            {edit ? (
                <>
                    <div className="lado-direito">
                        <h1>Atualizar tarefa</h1>
                        <form className="tarefa-form" onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                placeholder="Atualizar tarefa"
                                value={input}
                                name="text"
                                className="tarefa-input"
                                onChange={handleChange}
                            />
                            <button className="botao-adicionar">Atualizar</button>
                        </form>
                    </div>
                </>
            ):(
                <div className="lado-esquerdo">
                    <div className="div1">
                        <h1>Organizador de tarefas</h1>
                        <h3>Gerencie seu dia</h3>
                        <form className="tarefa-form" onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                placeholder="Digite uma tarefa"
                                value={input}
                                name="text"
                                className="tarefa-input"
                                onChange={handleChange}
                            />
                            <button className="botao-adicionar">Adicionar</button>
                        </form>
                    </div>
                </div>
            )}
        </>
        
    )
}