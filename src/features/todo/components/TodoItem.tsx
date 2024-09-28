import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton'
import { editTodo, removeTodo, toggleCompleted } from '../redux/todoSlice'
import { useAppDispatch } from '../hooks/redux'
import { TTodo } from '../types/todo'
import { useState } from 'react'

type TProps = {
  todo: TTodo
}

export default function TodoItem(props: TProps) {
  const { id, title, date, completed, completedAt } = props.todo
  const [isEditing, setIsEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(title)
  const dispatch = useAppDispatch()

  const handleEdit = () => {
    if (!isEditing) {
      setIsEditing(true)
    } else {
      if (title !== newTitle) {
        dispatch(editTodo({ id, title: newTitle }))
      }
      setIsEditing(false)
    }
  }
  return (
    <li
      key={id}
      className='flex justify-between items-center py-2 px-4 rounded-lg bg-gray-800 gap-2'
    >
      <div className='space-y-1 flex-1'>
        {isEditing ? (
          <input
            type='text'
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className='w-full bg-gray-700 text-gray-200 px-2 py-1 rounded-lg focus:outline-none'
          />
        ) : (
          <p className='md:text-lg'>{title}</p>
        )}
        <p className='text-xs text-gray-500'>
          {date.toDateString()}
          {completedAt ? ' - ' + completedAt.toDateString() : null}
        </p>
      </div>
      <div className='flex items-center gap-2'>
        <button onClick={() => dispatch(toggleCompleted(id))}>
          {completed ? (
            <svg
              className='w-6 h-6 text-green-500'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                fill-rule='evenodd'
                d='M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z'
                clip-rule='evenodd'
              />
            </svg>
          ) : (
            <svg
              className='w-6 h-6 text-gray-400'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
              />
            </svg>
          )}
        </button>

        <PrimaryButton color='red' onClick={() => dispatch(removeTodo(id))}>
          <span className='sr-only'>Delete todo</span>
          <svg
            className='w-6 h-6 text-white'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z'
            />
          </svg>
        </PrimaryButton>

        <PrimaryButton color='green' onClick={handleEdit}>
          <span className='sr-only'>edit todo</span>
          <svg
            className='w-6 h-6 text-white'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              fill-rule='evenodd'
              d='M14 4.182A4.136 4.136 0 0 1 16.9 3c1.087 0 2.13.425 2.899 1.182A4.01 4.01 0 0 1 21 7.037c0 1.068-.43 2.092-1.194 2.849L18.5 11.214l-5.8-5.71 1.287-1.31.012-.012Zm-2.717 2.763L6.186 12.13l2.175 2.141 5.063-5.218-2.141-2.108Zm-6.25 6.886-1.98 5.849a.992.992 0 0 0 .245 1.026 1.03 1.03 0 0 0 1.043.242L10.282 19l-5.25-5.168Zm6.954 4.01 5.096-5.186-2.218-2.183-5.063 5.218 2.185 2.15Z'
              clip-rule='evenodd'
            />
          </svg>
        </PrimaryButton>
      </div>
    </li>
  )
}
