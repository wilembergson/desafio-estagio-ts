import { useState } from 'react'
import './Inicial.css'
import TarefasForm from '../TarefasForm/TarefasForm'
import Tarefa from '../Tarefa/Tarefa'

import { taskType } from '../../tipos/Tipos'

export default function Inicial(){
    const [tasks, setTasks] = useState<taskType[]>([])

    const add = (task: taskType) => {
        if(!task.text || /^\s*$/.test(task.text)){
            return
        }
        const newTasks = [task, ...tasks]
        setTasks(newTasks)
    }    

    const remove = (id: number) => {
        const removeObj = [...tasks].filter((t: taskType) => t.id !== id)
        setTasks(removeObj)
    }

    const update = (taskId: number, newValue: taskType) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return
        }
        setTasks(prev => prev.map((item:taskType) => (item.id === taskId ? newValue : item)))
    }

    const taskComplete = (id: number) => {
        let updatedTasks = tasks.map(t => {
            if(t.id === id){
                t.concluded = !t.concluded
            }
            return t
        })
        setTasks(updatedTasks)
    }

    return(
        <div className="inicial">
            <TarefasForm onSubmit={add}/>
            <Tarefa tasks={tasks} removeTask={remove} updateTask={update} taskComplete={taskComplete}/>
        </div>
    )
}