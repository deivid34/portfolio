import React from 'react'
import { Container, Content, Form, Image } from './styles'
import { Appbar } from '../../components/Appbar'
import dedeImage from '../../assets/dede.jpg'

export const About = () => {
  return (
    <Container>
      <Content>
        <Appbar />
        <Form>
          <Image src={dedeImage} alt="DEDE" />
          <div>
            <h1>SOBRE MIM</h1>
            <h3>
              MEU NOME É DEIVID,TENHO 18 ANOS DE IDADES, E ESTOU INGRESSANDO NA
              AREA DE TI.
            </h3>
            <p>
              Me chamo Deivid Melega, tenho 18 anos e estou começando minha
              jornada na área de Tecnologia da Informação (TI). Desde cedo, a
              tecnologia sempre me fascinou, e essa paixão me impulsionou a
              escolher a TI como carreira. Com entusiasmo e determinação,
              mergulhei nesse campo dinâmico e em constante evolução, buscando
              aprender e me aprimorar em programação, segurança da informação e
              redes de computadores, áreas fundamentais para o sucesso na TI
              moderna. Acompanhar tendências emergentes como inteligência
              artificial, aprendizado de máquina e computação em nuvem faz parte
              do meu plano de desenvolvimento profissional.
            </p>
          </div>
        </Form>
      </Content>
    </Container>
  )
}
