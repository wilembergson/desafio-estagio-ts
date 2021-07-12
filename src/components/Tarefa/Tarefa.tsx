import { useState, useEffect } from 'react'
import './Tarefa.css'
import {BiEdit} from 'react-icons/bi'
import {IoIosCloseCircle} from 'react-icons/io'
import TarefasForm from '../TarefasForm/TarefasForm'

import { taskType } from '../../tipos/Tipos'

export type props = {
    tasks: taskType[]
    removeTask: (id: number) => void
    updateTask: (tarefaId: number, novoValor: taskType) => void
    taskComplete: (id: number) => void
}
export default function Tarefa({tasks, removeTask, updateTask, taskComplete}: props){

    const [edit, setEdit] = useState<taskType>({id: 0, text:''})
    const [tasksPerformed, setTasksPerformed] = useState(0)

//******************************************************* */
    useEffect(() => {
        let tc:number = 0
        if(tasks.length === 0){
            setTasksPerformed(0)
        } 
        else{
            tasks.forEach(function (t){
                if(t.concluded === true && tasks.length!==0){
                    tc++
                }
                setTasksPerformed(tc)
            })
        }
       
    }, [tasks])


//******************************************************* */
    const submitUpdate = (updatedValue: taskType) => {
        updateTask(edit.id, updatedValue)
        setEdit({id: 0, text: ''})
    }

    if(edit.id !== 0){
        return<TarefasForm edit={edit} onSubmit={submitUpdate}/>
    }

    return(
        <div className="lado-direito">
            <div className="cabecalho">
                <h2>Tarefas concluídas</h2>
                <h2 className={tasksPerformed === tasks.length && tasksPerformed !== 0 ? "contagem-finalizada": "contagem"}>
                    {tasksPerformed}/{tasks.length}
                </h2>
            </div>
            
            {tasks.map((t: taskType, index) => (
                <div className="linha" key={index}>
                    <div className={t.concluded ? "tarefaObj-concluida" : "tarefaObj"} onClick={() => taskComplete(t.id)}>
                        <label>{t.text}</label>
                    </div>
                    <div className="icones">
                            <button className="botao" onClick={() => setEdit({id: t.id, text: t.text})}><BiEdit/></button>
                            <button className="botao" onClick={() =>removeTask(t.id)}><IoIosCloseCircle/></button>
                    </div>
                </div>
            ))}
        </div>
    )
}