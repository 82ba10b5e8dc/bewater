import React from 'react'
import { Box, Flex, ThemeProvider } from 'theme-ui'

import Streak from 'components/Streak'
import Counter from 'components/Counter'
import theme from 'support/theme'

function App() {
  return (
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
  )
}

export default App
