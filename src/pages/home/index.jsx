import React from 'react'
import { Container, Content, Form, Image } from './styles'
import { Appbar } from '../../components/Appbar'
import { Button } from '../../components/button'
import pcImage from '../../assets/pc.png'

import '@fontsource/roboto'
export const Home = () => {
  return (
    <Container>
      <Content>
        <Appbar />

        <Form>
          <div>
            <strong>
              <h1>
                olá, eu sou <br /> Deivid Melega
              </h1>
            </strong>
            <p>Desenvolvedor fullstack</p>
            <a
              href="https://www.linkedin.com/in/deivid-melega/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>linkedin</Button>
            </a>
            <a
              href="https://github.com/deivid34"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>github</Button>
            </a>
          </div>
          <Image src={pcImage} alt="PC" />
        </Form>
      </Content>
    </Container>
  )
}
