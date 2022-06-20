import { Box, Center, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'

type CardProps = {
  titulo: string,
}

type AppCardProps = {
  titulo: string,
  desc: String
}
export function CardComponent({ titulo }: CardProps) {
  return (
    <Center
      padding={5}
      textAlign={"center"}
      bgColor={"#7b6a34"}
      color={"yellow.400"}
      borderRadius={"md"}
    >
      <Text fontSize={'large'} fontWeight={"bold"}>{titulo}</Text>
    </Center>
  )
}

export function CardComponent2({ titulo }: CardProps) {
  return (
    <Center
      padding={5}
      textAlign={"center"}
      color={"#7b6a34"}
      bgColor={"yellow.400"}
      borderRadius={"md"}
    >
      <Text fontSize={'large'} fontWeight={"bold"}>{titulo}</Text>
    </Center>
  )
}

export function AppComponent({ titulo, desc }: AppCardProps) {
  return (
    <Center
      padding={5}
      textAlign={"center"}
      bgColor={"#e8d8a6"}
      color={"#505050"}
      borderRadius={"md"}
    >
      <VStack>
        <Text fontSize={'large'} fontWeight={"bold"}>{titulo}</Text>
        <Text>{desc}</Text>
      </VStack>
    </Center>
  )
}
