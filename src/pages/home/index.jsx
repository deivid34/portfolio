import React from 'react'
import { Container, Content, Form, Image, IconContainer } from './styles'
import { Appbar } from '../../components/Appbar'
import { Button } from '../../components/button'
import pcImage from '../../assets/pc.png'
import { IoLogoJavascript } from 'react-icons/io5'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa'

import(
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap'
)
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
            <Image src={pcImage} alt="PC" />
          </div>
        </Form>
        <IconContainer>
          <h3>Minhas tecnologias:</h3>
          <IoLogoJavascript size={50} color="yellow" />
          <FaHtml5 size={50} color="blue" />
          <FaCss3Alt size={50} color="red" />
          <FaReact size={50} color="#114880" />
          <FaNodeJs size={50} color="green" />
        </IconContainer>
      </Content>
    </Container>
  )
}
