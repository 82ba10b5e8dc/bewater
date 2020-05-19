import React, { FC } from 'react'

import { Box, Heading, Text } from 'theme-ui'

import { useStore } from 'support/store'

const Streak: FC = () => {
  const { streak } = useStore()

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
        {browser.i18n.getMessage('current_streak', streak)}
      </Text>
    </Box>
  )
}

export default Streak
