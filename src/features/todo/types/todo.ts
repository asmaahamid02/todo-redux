export interface TTodo {
  id: string
  title: string
  completed: boolean
  date: Date
  completedAt?: Date | null
}

export interface TTodoState {
  todos: TTodo[]
}
