import { ComponentProps } from 'react'

export default function PrimaryButton({
  children,
  color = 'bg-purple-600 hover:bg-purple-700',
  ...props
}: Omit<ComponentProps<'button'>, 'className'> & {
  color?: string
}) {
  return (
    <button
      type='button'
      className={`focus:outline-none text-white ${color} font-medium rounded-lg text-sm px-5 py-2.5 focus:ring-0`}
      {...props}
    >
      {children}
    </button>
  )
}
