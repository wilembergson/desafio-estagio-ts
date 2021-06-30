import './Inicial.css'

export default function Inicial(){
    return(
        <div className="inicial">
            <div className="lado-esquerdo">
                <h1>Organizador de tarefas</h1>
                <h3>Desafio Heeds</h3>
                <form>
                    <input placeholder="Adicione uma tarefa"/>
                    <button className="botao-adicionar">Adicionar</button>
                </form>
            </div>

            <div className="lado-direito">
                <h2>Tarefas listadas</h2>
                <h3>teste</h3>
            </div>
        </div>
    )
}