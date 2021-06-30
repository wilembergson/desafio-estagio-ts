import './Tarefa.css'
import {BiEdit} from 'react-icons/bi'
import {IoIosCloseCircle} from 'react-icons/io'

export default function Tarefa({tarefas}){
    return(
        <div className="lado-direito">
            <h2>Tarefas a serem concluídas</h2>
            {tarefas.map(t => (
                <div className="tarefaObj">
                    <label>{t.texto}</label>
                    <div className="icones">
                        <button className="botao"><BiEdit/></button>
                        <button className="botao"><IoIosCloseCircle/></button>
                    </div>
                </div>
            ))}
        </div>
    )
}