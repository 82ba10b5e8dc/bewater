import React, { FC } from 'react'

interface Props {
  active: boolean
}

const Drop: FC<Props> = ({ active }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    data-name='Layer 1'
    viewBox='0 0 24 24'
    height='20px'
    width='20px'
  >
    <path
      d='M12.57.28a.81.81 0 00-1.14 0C11.08.65 3 9.38 3 15.14a9 9 0 0018 0C21 9.38 12.92.65 12.57.28z'
      fill={active ? '#0074ff' : 'grey'}
    />
  </svg>
)

export default Drop
