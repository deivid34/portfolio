import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  display: flex;

  align-items: center;
  width: 100%;
  height: 100vh; /* Garante que o container ocupe toda a altura da viewport */
  flex-direction: column;
  text-align: center;
  position: relative; /* Adiciona posição relativa para o container */
  background: ${({ theme }) => theme.primary};
  background-size: cover; /* Faz com que o background cubra todo o container */
  background-repeat: no-repeat; /* Evita repetição do background */
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center items horizontally */
  width: 100%;

  h1 {
    font-size: 50px;
    font-family: 'Pixelify Sans', 
    font-weight: 700;
  color: ${({ theme }) => theme.text};
  
  }

  p {
    font-size: 1rem;
color: ${({ theme }) => theme.text};
  }

  button {
    margin-top: 10px;
  }

   @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
      
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`

export const Form = styled.div`
  margin-top: 170px; /* Ajuste a margem superior conforme necessário */
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    margin-top: 15vh;
  }

  @media (max-width: 480px) {
    margin-top: 10vh;
  }
`

const pulse = keyframes`

  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`
export const Image = styled.img`
  width: 200px;
  animation: ${pulse} 1s infinite;

  @media (max-width: 768px) {
    width: 150px;
  }

  @media (max-width: 480px) {
    width: 100px;
  }
`

export const IconContainer = styled.div`
  position: absolute; /* Garante que o container seja posicionado em relação ao seu container pai */
  bottom: 5px; /* Ajusta a distância do fundo */
  right: 10px; /* Ajusta a distância da direita */
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza os itens dentro do container */
  h3 {
    margin-bottom: 5px;
    color: ${({ theme }) => theme.text};
  }

  @media (max-width: 768px) {
    bottom: 15px;
    right: 15px;
  }

  @media (max-width: 480px) {
    bottom: 20px;
    right: 20px;
  }
`

export const IconContent = styled.div`
  position: absolute;
  bottom: 5px;
  left: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;

  h3 {
    margin-bottom: 5px;
    color: ${({ theme }) => theme.text};
  }

  @media (max-width: 768px) {
    bottom: 15px;
    left: 15px;
  }

  @media (max-width: 480px) {
    bottom: 20px;
    left: 20px;
  }
`
