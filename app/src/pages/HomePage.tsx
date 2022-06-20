import { Heading, Center, Container } from '@chakra-ui/react'
import React from 'react'
import { AppComponent } from '../components/CardComponent'
import MisAppsComponent from '../components/MisAppsComponent'
import TemasComponent from '../components/TemasComponent'


export default function HomePage() {


  return (
    <Container>
      <Center paddingY={4} fontSize="xl">
        <Heading>
          Emas Dev
        </Heading>
      </Center>
      <TemasComponent />
      <MisAppsComponent />

    </Container>
  )
}
