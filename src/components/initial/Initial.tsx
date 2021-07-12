import { useState } from 'react'
import './Initial.css'
import TaskForm from '../TasksForm/TasksForm'
import Task from '../Task/Task'

import { taskType } from '../../types/Types'

export default function Initial(){
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
        const updatedTasks = tasks.map(t => {
            if(t.id === id){
                t.concluded = !t.concluded
            }
            return t
        })
        setTasks(updatedTasks)
    }

    return(
        <div className="initial">
            <TaskForm onSubmit={add}/>
            <Task tasks={tasks} removeTask={remove} updateTask={update} taskComplete={taskComplete}/>
        </div>
    )
}