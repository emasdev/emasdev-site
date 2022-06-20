import { Box, Button, SimpleGrid, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { apps } from '../data/Data'
import { AppComponent, CardComponent, CardComponent2 } from './CardComponent'

export default function MisAppsComponent() {
  const { getDisclosureProps, getButtonProps } = useDisclosure()
  const buttonProps = getButtonProps()
  const disclosureProps = getDisclosureProps()
  return (
    <Box p={1}>
      <Box textAlign={'center'}>
        <Button {...buttonProps}>Mis Apps</Button>
      </Box>

      <Box {...disclosureProps} mt={4}>
        <SimpleGrid columns={2} spacing={1}>
          {apps.map((i) => {
            return (
              <AppComponent titulo={i.titulo} desc={i.desc} />
            )
          })}
        </SimpleGrid>
      </Box>

    </Box>
  )
}
