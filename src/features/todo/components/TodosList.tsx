import { useAppSelector } from '../hooks/redux'
import TodoItem from './TodoItem'

export default function TodosList() {
  const todos = useAppSelector((state) => state.todo.todos)

  return (
    <div className='w-full mt-6'>
      <h1 className='text-2xl md:text-4xl text-purple-400'>Todos</h1>
      <ul className='mt-4 list-none space-y-4'>
        {todos.length === 0 && (
          <li className='text-center py-6 px-4 rounded-lg bg-gray-800'>
            Start adding your TODOS
          </li>
        )}
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  )
}
