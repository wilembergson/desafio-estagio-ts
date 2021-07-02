export type Task = {
    id: number,
    texto: string,
    concluida?: boolean
 
}

export type Props = {
    tarefas: Task[]
    removerTarefa: (id: number) => void
    atualizarTarefa: (tarefaId: number, novoValor: Task) => void
    tarefaCompleta: (id: number) => void
}