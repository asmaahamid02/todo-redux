import AddTodo from './components/AddTodo'
import TodosList from './components/TodosList'

export default function TodoPage() {
  return (
    <div className='w-full max-w-2xl flex flex-col justify-center mx-auto p-4'>
      <AddTodo />
      <TodosList />
    </div>
  )
}
