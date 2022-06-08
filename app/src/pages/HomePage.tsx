import { Box, Flex, Grid, Heading, HStack, VStack, Text, UnorderedList, ListItem, SimpleGrid, Center, useDisclosure, Button } from '@chakra-ui/react'
import React from 'react'
import { ColorModeSwitcher } from '../ColorModeSwitcher'
import { CardComponent, CardComponent2 } from '../components/CardComponent'

const boxes = {
  developer: [
    "Experto en JavaScript",
    "Master en React y React Native",
    "Bien en TypeScript",
    "Experto en Firebase",
    "Bien en Node.js",
    "Master de Google Cloud Technologies",
  ],
  development: [
    "Aprendiz de Boddichita",
    "Técnicas para disolver tensión",
    "Meditación",
    "Respiración Extática",
    "4,7,8 Breath",
    "WimHof Technique",
  ]
}

export default function HomePage() {

  const { getDisclosureProps, getButtonProps } = useDisclosure()
  const buttonProps = getButtonProps()
  const disclosureProps = getDisclosureProps()
  return (
    <Box height={"100vh"}>
      <Center paddingY={4} fontSize="xl">
        <Heading>
          Emas Dev
        </Heading>
      </Center>
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







    </Box>
  )
}
