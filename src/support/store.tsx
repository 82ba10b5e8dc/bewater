/* global:browser */
import React, { FC, createContext, useState } from 'react'

const StoreContext = createContext({
  timestamp: new Date(),
  daily: 0,
  streak: 0,
  onDrink: () => {}
})

const StoreManager: FC = ({ children }) => {
  const [value, setValue] = useState({
    daily: browser.storage.local.get('daily') || 0,
    streak: browser.storage.local.get('streak') || 0,
    timestamp: new Date()
  })

  const handleDrink = () => {
    const daily = value.daily + 1

    browser.storage.local.set('daily', daily)
    browser.storage.local.set('timestamp', new Date())

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
