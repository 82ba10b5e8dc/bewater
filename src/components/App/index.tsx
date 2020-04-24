import React from 'react'
import { Heading, Text, Button, ThemeProvider } from 'theme-ui'

import Counter from 'components/Counter'
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

      <Counter />
    </ThemeProvider>
  )
}

export default App
