import React, { useEffect } from 'react'
import { Flex, ThemeProvider } from 'theme-ui'

import Streak from 'components/Streak'
import Counter from 'components/Counter'
import theme from 'support/theme'
import StoreManager from 'support/store'

function App() {
  return (
    <StoreManager>
      <ThemeProvider theme={theme}>
        <Flex sx={{
          flexDirection: 'column',
          width: '240px',
          height: '400px'
        }}>
          <Streak />

          <Counter />
        </Flex>
      </ThemeProvider>
    </StoreManager>
  )
}

export default App
