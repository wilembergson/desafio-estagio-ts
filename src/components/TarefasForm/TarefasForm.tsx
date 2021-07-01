import React, { ChangeEvent, useState } from 'react'
import './TarefaForm.css'

type Task = {
    id: number
    texto: string
    concluida?: boolean
}

interface Props{
    onSubmit: (n: Task) => void
    edit?: Task
}

export default function TarefasForm({onSubmit,edit}: Props){

    const [countId, setCountId] = useState<number>(edit ? edit.id : 1)
    const [entrada, setEntrada] = useState<string>(edit ? edit.texto : '')
    

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setEntrada(e.target.value)
    }

    const handleSubmit = (e: any): void => {
        e.preventDefault()

        let n = countId + 1
        setCountId(n)
        
        onSubmit({
            id: countId,
            texto: entrada
        })
        setEntrada('')
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
                                value={entrada}
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
                </div>
            )}
        </>
        
    )
}