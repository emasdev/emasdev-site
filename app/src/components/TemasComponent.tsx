import { Box, Button, SimpleGrid, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { boxes } from '../data/Data'
import { CardComponent, CardComponent2 } from './CardComponent'

export default function TemasComponent() {
  const { getDisclosureProps, getButtonProps } = useDisclosure()
  const buttonProps = getButtonProps()
  const disclosureProps = getDisclosureProps()
  return (
    <Box p={1}>
      <Box textAlign={'center'}>
        <Button {...buttonProps}>Mis temas de conversación</Button>
      </Box>

      <Box {...disclosureProps} mt={4}>
        <SimpleGrid columns={2} spacing={1}>
          {boxes.developer.map((i) => {
            return (
              <CardComponent titulo={i} />
            )
          })}
          {boxes.development.map((i) => {
            return (
              <CardComponent2 titulo={i} />
            )
          })}
        </SimpleGrid>
      </Box>

    </Box>
  )
}
