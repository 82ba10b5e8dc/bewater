import React from 'react'
import { Heading, Text, Button, ThemeProvider } from 'theme-ui'

import theme from 'support/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button />

      <Heading>
        Bewater
      </Heading>

      <Text>
        how are you doing today
      </Text>
    </ThemeProvider>
  )
}

export default App
