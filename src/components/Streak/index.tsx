import React, { FC } from 'react'

import { Box, Heading, Text } from 'theme-ui'

const Streak: FC = () => {
  return (
    <Box
      p='3'
      sx={{
        flex: '240px 0',
      }}
    >
      <Heading as='h4'>
        {browser.i18n.getMessage('popup_title')}
      </Heading>

      <Text variant='caption'>
        {browser.i18n.getMessage('popup_subtitle')}
      </Text>

      <Heading mx='auto'>
        <span role='img' aria-label='plant'>
          🌱
        </span>
      </Heading>

      <Text variant='caption'>
        Your current streak is 2 days
      </Text>
    </Box>
  )
}

export default Streak
