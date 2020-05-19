import React, { Fragment, FC, useMemo } from 'react'
import { Button, Flex, Heading, Box, Grid, Text } from 'theme-ui'

import { useStore } from 'support/store'

import Drop from './Drop'

interface Props {}

const TOTAL = 8

const Counter: FC<Props> = () => {
  const { daily, onDrink } = useStore()

  /**
   * if we have met the total number of glasses for the day then we return
   * the praise message. if not, render the drops elements styled by the
   * current amount
   */

  const content = useMemo(() => {
    if (daily === TOTAL) {
      return (
        <Box py='2'>
          <Heading>
            <span
              role='img'
              aria-label={browser.i18n.getMessage('sun_alt')}
            >
              ☀️
            </span>
          </Heading>

          <Text variant='caption'>
            {browser.i18n.getMessage('popup_praise')}
          </Text>
        </Box>
      )
    }

    const elements = Array.from({ length: TOTAL }, (_, index) => ((
      <Drop active={index <= daily} key={index} />
    )))

    return (
      <Fragment>
        <Button
          variant='area'
          onClick={onDrink}
        >
          <Flex py='3'>
            <Grid
              gap='1'
              columns={[4]}
            >
              {elements}
            </Grid>

            <Text color='primary'>
              {browser.i18n.getMessage('popup_ml', `${daily * 250}`)}
            </Text>
          </Flex>
        </Button>

        <Text variant='caption'>
          {browser.i18n.getMessage('popup_reminder')}
        </Text>
      </Fragment>
    )
  }, [daily, onDrink])

  return (
    <Box
      p='3'
      sx={{
        flex: '1 auto',
        bg: 'muted'
      }}
    >
      <Heading variant='uppercase' as='h4'>
        {browser.i18n.getMessage('daily_title')}
      </Heading>

      {content}
    </Box>
  )
}

export default Counter
