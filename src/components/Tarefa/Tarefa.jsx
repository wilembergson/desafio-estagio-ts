

export default function Tarefa({tarefas}){
    return(
        <div className="lado-direito">
            <h2>Tarefas a serem concluídas</h2>
            {tarefas.map(t => (
                <div>{t.texto}</div>
            ))}
        </div>
    )
}