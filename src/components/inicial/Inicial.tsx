import { useState } from 'react'
import './Inicial.css'
import TarefasForm from '../TarefasForm/TarefasForm'
import Tarefa from '../Tarefa/Tarefa'

import { Task } from '../../tipos/Tipos'

export default function Inicial(){
    const [tarefas, setTarefas] = useState<Task[]>([])

    const adicionar = (tarefa: Task) => {
        if(!tarefa.texto || /^\s*$/.test(tarefa.texto)){
            return
        }
        const novasTarefas = [tarefa, ...tarefas]
        setTarefas(novasTarefas)
    }    

    const remover = (id: number) => {
        const removerObj = [...tarefas].filter((t: Task) => t.id !== id)
        setTarefas(removerObj)
    }

    const atualizar = (tarefaId: number, novoValor: Task) => {
        if(!novoValor.texto || /^\s*$/.test(novoValor.texto)){
            return
        }
        setTarefas(prev => prev.map((item:Task) => (item.id === tarefaId ? novoValor : item)))
    }

    const tarefaCompleta = (id: number) => {
        let tarefasAtualizadas = tarefas.map(t => {
            if(t.id === id){
                t.concluida = !t.concluida
            }
            return t
        })
        setTarefas(tarefasAtualizadas)
    }

    return(
        <div className="inicial">
            <TarefasForm onSubmit={adicionar}/>
            <Tarefa tarefas={tarefas} removerTarefa={remover} atualizarTarefa={atualizar} tarefaCompleta={tarefaCompleta}/>
        </div>
    )
}