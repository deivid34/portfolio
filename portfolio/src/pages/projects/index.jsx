import React from 'react'
import { Container, Content, Form, Image, IconContent } from './styles'
import { Appbar } from '../../components/Appbar'
import calculadora from '../../assets/calculadora.jpg'
import jobfinder from '../../assets/jobfinder.jpg'
import jogodavelha from '../../assets/jogodavelha.jpg'
import spotlist from '../../assets/spotlist.jpg'
import { TbLock } from 'react-icons/tb'
import { Link } from 'react-router-dom'
export const Projects = () => {
  return (
    <Container>
      <Appbar />
      <Content>
        <Form>
          <h1>PROJETOS</h1>
          <div>
            <a
              href="https://github.com/deivid34/calculadora"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={calculadora} alt="Calculadora" />
            </a>
            <a
              href="https://github.com/deivid34/job-finder"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={jobfinder} alt="Job Finder" />
            </a>
            <a
              href="https://github.com/deivid34/jogo-da-velha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={jogodavelha} alt="Jogo da Velha" />
            </a>
            <a
              href="https://github.com/deivid34/spot-list"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={spotlist} alt="Spotlist" />
            </a>
          </div>
          <IconContent>
            <Link to="/private">
              <TbLock size={50} />
            </Link>
          </IconContent>
        </Form>
      </Content>
    </Container>
  )
}
