import './Tarefa.css'
import {BiEdit} from 'react-icons/bi'
import {IoIosCloseCircle} from 'react-icons/io'

type Task = {
    id: number,
    texto: string
 
}

type Props = {
    tarefas: Task[]
    removerTarefa: (id: number) => void
}

export default function Tarefa({tarefas, removerTarefa}: Props){
    return(
        <div className="lado-direito">
            <h2>Tarefas a serem concluídas</h2>
            {tarefas.map((t: Task) => (
                <div className="tarefaObj">
                    <label>{t.texto}</label>
                    <div className="icones">
                        <button className="botao"><BiEdit/></button>
                        <button className="botao" onClick={() =>removerTarefa(t.id)}><IoIosCloseCircle/></button>
                    </div>
                </div>
            ))}
        </div>
    )
}