import React, { ChangeEvent, useState } from 'react'
import './TasksForm.css'

import { taskType } from '../../types/Types'

type props = {
    onSubmit: (n: taskType) => void
    edit?: taskType
}

export default function TasksForm({onSubmit,edit}: props){

    const [countId, setCountId] = useState<number>(edit ? edit.id : 1)
    const [input, setInput] = useState<string>(edit ? edit.text : '')
    

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setInput(e.target.value)
    }

    const handleSubmit = (e: any): void => {
        e.preventDefault()

        const n = countId + 1
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
                    <div className="right-side">
                        <h1>Atualizar tarefa</h1>
                        <form className="task-form" onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                placeholder="Atualizar tarefa"
                                value={input}
                                name="text"
                                className="task-input"
                                onChange={handleChange}
                            />
                            <button className="add-button">Atualizar</button>
                        </form>
                    </div>
                </>
            ):(
                <div className="left-side">
                    <div className="div1">
                        <h1>Organizador de tarefas</h1>
                        <h3>Gerencie seu dia</h3>
                        <form className="task-form" onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                placeholder="Digite uma tarefa"
                                value={input}
                                name="text"
                                className="task-input"
                                onChange={handleChange}
                            />
                            <button className="add-button">Adicionar</button>
                        </form>
                    </div>
                </div>
            )}
        </>
        
    )
}