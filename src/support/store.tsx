import React, {
  FC,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react'

import storage from 'support/storage'
import { DAILY_GOAL, TODAY } from 'support/constants'

const DEFAULT_STATE = {
  timestamp: TODAY.toISOString(),
  daily: 0,
  streak: 0,
  onDrink: () => {}
}

const isSameDay = (d1: Date, d2: Date) => {
  return d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();
}

const StoreContext = createContext(DEFAULT_STATE)

export const useStore = () => useContext(StoreContext)

const StoreManager: FC = ({ children }) => {
  const [value, setValue] = useState(DEFAULT_STATE)

  useEffect(() => {
    async function initialize () {
      const initialState = await storage.get()

      const merged = {
        ...DEFAULT_STATE,
        ...initialState
      }

      if (!isSameDay(new Date(merged.timestamp), new Date(TODAY))) {
        merged.timestamp = TODAY
        storage.set('timestamp', TODAY)
      }

      return setValue(merged)
    }

    initialize()
  }, [])

  /**
   * when a user drinks a glass of water we check if they reached their
   * goal and update the streak value, regardless we increment the daily value
   */

  const handleDrink = () => {
    const daily = value.daily + 1

    const isCompleted = daily === DAILY_GOAL

    const streak = isCompleted
      ? value.streak + 1
      : value.streak

    storage.set({
      daily,
      streak
    })

    return setValue({
      ...value,
      streak,
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
