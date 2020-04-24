import React, { FC, useMemo } from 'react'

import Drop from './Drop'

interface Props {}

const Counter: FC<Props> = () => {
  const elements = useMemo(() => Array.from({ length: 8 }, (_, index) => ((
    <Drop active key={index} />
  ))), [])

  return (
    <div>
      {elements}
    </div>
  )
}

export default Counter
