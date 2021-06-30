import React , { useState } from 'react'
import './Inicio.css'

interface TodoItem {
    id: number,
    value: string
}

let count = 1

export default function Inicio(){
    const [list, setList] = useState<TodoItem[]>([{id: 0, value: ''}])

    const editar = (value: string, id: TodoItem['id']) => {
        setList(prev => prev.map(item => item.id ===id ? {...item, value} : item))
    }

    const deletar = (id: TodoItem['id']) => {
        setList(prev => prev.filter(item => item.id !== id))
    }

    const adicionar = (index: number) => {
        const newItem = {id: count++, value: ''}
        setList(prev => [...prev.slice(0, index+1), newItem, ...prev.slice(index+1)])
    }
    
    return(
        <div className="inicio">
            {list.map((item, index) => (
                <div key={item.id}>
                    <input type="text" value={item.value} onChange={e => editar(e.currentTarget.value, item.id)} className="tarefa" />
                    <button onClick={() => adicionar(index)}>+</button>
                    <button onClick={() => deletar(item.id)}>-</button>
                </div>
            ))}    
        </div>
    )
}