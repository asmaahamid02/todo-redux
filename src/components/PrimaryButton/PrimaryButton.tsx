import { ComponentProps } from 'react'

export default function PrimaryButton({
  children,
  color = 'purple',
  ...props
}: Omit<ComponentProps<'button'>, 'className'> & {
  color?: string
}) {
  return (
    <button
      type='button'
      className={`focus:outline-none text-white  focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 bg-${color}-600 hover:bg-${color}-700 focus:ring-0`}
      {...props}
    >
      {children}
    </button>
  )
}
