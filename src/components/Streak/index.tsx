import React, { FC } from 'react'

import { Heading, Text } from 'theme-ui'

const Streak: FC = () => {
  return (
    <div sx={{
      height: '240px',
      bg: 'muted'
    }}>
      <Heading>
        {browser.i18n.getMessage('popup_title')}
      </Heading>

      <Text>
        {browser.i18n.getMessage('popup_subtitle')}
      </Text>
    </div>
  )
}

export default Streak
