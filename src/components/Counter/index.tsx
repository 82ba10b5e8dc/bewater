import React, { FC, useMemo } from 'react'

interface Props {}

const Counter: FC<Props> = () => {
  const elements = useMemo(() => Array.from({ length: 8 }, (_, index) => ((
    <div key={index}>
      drop
    </div>
  ))), [])

  return (
    <div>
      {elements}
    </div>
  )
}

export default Counter
