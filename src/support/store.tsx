import React, {
  FC,
  createContext,
  useContext,
  useState
} from 'react'

const StoreContext = createContext({
  timestamp: new Date(),
  daily: 0,
  streak: 0,
  onDrink: () => {}
})

export const useStore = () => useContext(StoreContext)

const StoreManager: FC = ({ children }) => {
  const [value, setValue] = useState({
    daily: 0,
    streak: 0,
    timestamp: new Date()
  })

  const handleDrink = () => {
    const daily = value.daily + 1

    browser.storage.sync.set({
      daily
    })


    browser.storage.sync.get('daily').then(value => console.log(value))

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
