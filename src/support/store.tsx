import React, {
  FC,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react'

import storage from 'support/storage'

const DEFAULT_VALUE = {
  timestamp: new Date(),
  daily: 0,
  streak: 0,
  onDrink: () => {}
}

const StoreContext = createContext(DEFAULT_VALUE)

export const useStore = () => useContext(StoreContext)

const StoreManager: FC = ({ children }) => {
  const [value, setValue] = useState(DEFAULT_VALUE)

  useEffect(() => {
    async function initialize () {
      const initialState = await storage.get()

      return setValue({
        ...DEFAULT_VALUE,
        ...initialState
      })
    }

    initialize()
  }, [])

  const handleDrink = () => {
    const daily = value.daily + 1

    storage.set({
      daily
    })

    return setValue({
      ...value,
      daily
    })
  }

  return (
    <StoreContext.Provider value={{
      ...value,
      onDrink: handleDrink
    }}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreManager
