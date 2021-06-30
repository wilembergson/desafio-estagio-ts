import { ChangeEvent, useState } from 'react'
import './Inicial.css'
import TarefasForm from '../TarefasForm/TarefasForm'


type Task = {
    id: number,
    texto: string
 
}

export default function Inicial(){
    const [tarefas, setTarefas] = useState<Task[]>([])

    const adicionar = (tarefa: Task) => {
        if(!tarefa.texto || /^\s*$/.test(tarefa.texto)){
            return
        }
        const novasTarefas = [tarefa, ...tarefas]
        setTarefas(novasTarefas)
    }    

    return(
        <div className="inicial">
            <TarefasForm onSubmit={adicionar}/>
            
            <div className="lado-direito">
                <h2>Tarefas listadas</h2>
                {tarefas.map(t=>(
                 <div>ID:{t.id}, {t.texto}</div> 
                ))}
            </div>
        </div>
    )
}