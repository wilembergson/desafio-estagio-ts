import { useState, useEffect } from 'react'
import './Task.css'
import {BiEdit} from 'react-icons/bi'
import {IoIosCloseCircle} from 'react-icons/io'
import TarefasForm from '../TasksForm/TasksForm'

import { taskType } from '../../types/Types'

export type props = {
    tasks: taskType[]
    removeTask: (id: number) => void
    updateTask: (taskId: number, newValue: taskType) => void
    taskComplete: (id: number) => void
}
export default function Tarefa({tasks, removeTask, updateTask, taskComplete}: props){

    const [edit, setEdit] = useState<taskType>({id: 0, text:''})
    const [tasksPerformed, setTasksPerformed] = useState(0)
    
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

    const submitUpdate = (updatedValue: taskType) => {
        updateTask(edit.id, updatedValue)
        setEdit({id: 0, text: ''})
    }

    if(edit.id !== 0){
        return<TarefasForm edit={edit} onSubmit={submitUpdate}/>
    }

    return(
        <div className="right-side">
            <div className="head">
                <h2 className="title">Tarefas concluídas</h2>
                <h2 className={tasksPerformed === tasks.length && tasksPerformed !== 0 ? "finished-count": "count"}>
                    {tasksPerformed}/{tasks.length}
                </h2>
            </div>
            
            {tasks.map((t: taskType, index) => (
                <div className="line" key={index}>
                    <div className={t.concluded ? "taskObj-finished" : "taskObj"} onClick={() => taskComplete(t.id)}>
                        <label>{t.text}</label>
                    </div>
                    <div className="icons">
                            <button className="button" onClick={() => setEdit({id: t.id, text: t.text})}><BiEdit/></button>
                            <button className="button" onClick={() =>removeTask(t.id)}><IoIosCloseCircle/></button>
                    </div>
                </div>
            ))}
        </div>
    )
}