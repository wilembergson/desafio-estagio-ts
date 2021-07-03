import { useState, useEffect } from 'react'
import './Tarefa.css'
import {BiEdit} from 'react-icons/bi'
import {IoIosCloseCircle} from 'react-icons/io'
import TarefasForm from '../TarefasForm/TarefasForm'

import { Task, Props } from '../../tipos/Tipos'

export default function Tarefa({tarefas, removerTarefa, atualizarTarefa, tarefaCompleta}: Props){

    const [edit, setEdit] = useState<Task>({id: 0, texto:''})
    const [tarefasRalizadas, setTarefasRealizadas] = useState(0)

//******************************************************* */
    useEffect(() => {
        let tc:number = 0
        if(tarefas.length === 0){
            setTarefasRealizadas(0)
        } 
        else{
            tarefas.forEach(function (t){
                if(t.concluida === true && tarefas.length!==0){
                    tc++
                }
                setTarefasRealizadas(tc)
            })
        }
       
    }, [tarefas])


//******************************************************* */
    const submitUpdate = (valorAtualizado: Task) => {
        atualizarTarefa(edit.id, valorAtualizado)
        setEdit({id: 0, texto: ''})
    }

    if(edit.id !== 0){
        return<TarefasForm edit={edit} onSubmit={submitUpdate}/>
    }

    return(
        <div className="lado-direito">
            <div className="cabecalho">
                <h2>Tarefas concluídas</h2>
                <h2 className={tarefasRalizadas === tarefas.length && tarefasRalizadas !== 0 ? "contagem-finalizada": "contagem"}>
                    {tarefasRalizadas}/{tarefas.length}
                </h2>
            </div>
            
            {tarefas.map((t: Task, index) => (
                <div className="linha" key={index}>
                    <div className={t.concluida ? "tarefaObj-concluida" : "tarefaObj"} onClick={() => tarefaCompleta(t.id)}>
                        <label>{t.texto}</label>
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