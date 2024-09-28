import { FormEvent, useState } from 'react'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton'
import { addTodo } from '../redux/todoSlice'
import { useAppDispatch } from '../hooks/redux'

export default function AddTodo() {
  const [title, setTitle] = useState('')
  const dispatch = useAppDispatch()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(addTodo(title))

    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} className='flex gap-3 items-center w-full'>
      <input
        type='text'
        id='title'
        className='text-sm rounded-lg flex-1 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        placeholder='Type a todo ...'
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <PrimaryButton type='submit'>Add</PrimaryButton>
    </form>
  )
}
