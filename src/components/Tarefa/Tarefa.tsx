import { useState } from 'react'
import './Tarefa.css'
import {BiEdit} from 'react-icons/bi'
import {IoIosCloseCircle} from 'react-icons/io'
import TarefasForm from '../TarefasForm/TarefasForm'

type Task = {
    id: number,
    texto: string
 
}

type Props = {
    tarefas: Task[]
    removerTarefa: (id: number) => void
    atualizarTarefa: (tarefaId: number, novoValor: Task) => void
}

export default function Tarefa({tarefas, removerTarefa, atualizarTarefa}: Props){

    const [edit, setEdit] = useState<Task>({id: 0, texto:''})

    const submitUpdate = (valorAtualizado: Task) => {
        atualizarTarefa(edit.id, valorAtualizado)
        setEdit({id: 0, texto: ''})
    }

    if(edit.id){
        return<TarefasForm edit={edit} onSubmit={submitUpdate}/>
    }

    return(
        <div className="lado-direito">
            <h2>Tarefas a serem concluídas</h2>
            {tarefas.map((t: Task) => (
                <div className="tarefaObj">
                    <label>{t.texto}</label>
                    <div className="icones">
                        <button className="botao" onClick={() => setEdit({id: t.id, texto: t.texto})}><BiEdit/></button>
                        <button className="botao" onClick={() =>removerTarefa(t.id)}><IoIosCloseCircle/></button>
                    </div>
                </div>
            ))}
        </div>
    )
}