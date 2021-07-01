import { useState } from 'react'
import './Tarefa.css'
import {BiEdit} from 'react-icons/bi'
import {IoIosCloseCircle} from 'react-icons/io'
import TarefasForm from '../TarefasForm/TarefasForm'

type Task = {
    id: number,
    texto: string
    concluida?: boolean 
}

type Props = {
    tarefas: Task[]
    removerTarefa: (id: number) => void
    atualizarTarefa: (tarefaId: number, novoValor: Task) => void
    tarefaCompleta: (id: number) => void
}

export default function Tarefa({tarefas, removerTarefa, atualizarTarefa, tarefaCompleta}: Props){

    const [edit, setEdit] = useState<Task>({id: 0, texto:''})

    const submitUpdate = (valorAtualizado: Task) => {
        atualizarTarefa(edit.id, valorAtualizado)
        setEdit({id: 0, texto: ''})
    }

    if(edit.id !== 0){
        return<TarefasForm edit={edit} onSubmit={submitUpdate}/>
    }

    return(
        <div className="lado-direito">
            <h2>Tarefas a serem concluídas</h2>
            
            {tarefas.map((t: Task) => (
                <div className="aaa">
                <div className={t.concluida ? "tarefaObj-concluida" : "tarefaObj"} key={t.id} onClick={() => tarefaCompleta(t.id)}>
                    <label>----{t.id}----{t.texto}</label>
                </div>
                <div className="icones">
                        <button className="botao" onClick={() => setEdit({id: t.id, texto: t.texto})}><BiEdit/></button>
                        <button className="botao" onClick={() =>removerTarefa(t.id)}><IoIosCloseCircle/></button>
                </div>
                </div>
            ))}
        </div>
    )
}