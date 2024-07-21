import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.primary};
  width: 100%;
  height: 100vh;
  text-align: center;
  align-items: center;
  position: relative; /* Adiciona essa linha */
`

export const Content = styled.div`
  margin: 0 auto;
  width: 1000px;
`

export const Form = styled.div`
  margin-top: 2rem;
  h1 {
    font-size: 90px;
      color: ${({ theme }) => theme.text};
   
`

export const Image = styled.div`
  margin: 0 auto;
  border-radius: 8px;
  border: 2px solid #ccc;
  padding: 5px;
  transition: transform 0.3s ease-in-out;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  height: 600px; /* Ajuste a altura conforme necessário */

  &:hover {
    transform: scale(1.05);
  }
`

export const Overlay = styled.div`
  position: absolute; /* Adiciona essa linha */
  top: 0; /* Adiciona essa linha */
  left: 0; /* Adiciona essa linha */
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Fundo semi-transparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10; /* Garante que o overlay fique sobreposto */
`
