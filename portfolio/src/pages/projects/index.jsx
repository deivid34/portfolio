import React from 'react'
import {
  Container,
  Content,
  Form,
  ProjectItem,
  ImageWrapper,
  Image,
  Overlay,
  IconContent,
} from './styles'
import { Appbar } from '../../components/Appbar'
import calculadora from '../../assets/calculadora.jpg'
import jobfinder from '../../assets/jobfinder.jpg'
import jogodavelha from '../../assets/jogodavelha.jpg'
import spotlist from '../../assets/spotlist.jpg'
import { TbLock } from 'react-icons/tb'
import { Link } from 'react-router-dom'

export const Projects = () => {
  const projects = [
    {
      name: 'Calculadora',
      image: calculadora,
      link: 'https://github.com/deivid34/calculadora',
    },
    {
      name: 'Job Finder',
      image: jobfinder,
      link: 'https://github.com/deivid34/job-finder',
    },
    {
      name: 'Jogo da Velha',
      image: jogodavelha,
      link: 'https://github.com/deivid34/jogo-da-velha',
    },
    {
      name: 'Spotlist',
      image: spotlist,
      link: 'https://github.com/deivid34/spot-list',
    },
  ]

  return (
    <Container>
      <Appbar />
      <Content>
        <Form>
          <h1>PROJETOS</h1>
          <div>
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ProjectItem>
                  <ImageWrapper>
                    <Image src={project.image} alt={project.name} />
                    <Overlay>{project.name}</Overlay>
                  </ImageWrapper>
                </ProjectItem>
              </a>
            ))}
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
