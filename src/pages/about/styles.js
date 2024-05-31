import styled from 'styled-components'

export const Container = styled.div``

export const Content = styled.div``

export const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Alinha a imagem e o texto no início */
  gap: 150px; /* Espaçamento entre a imagem e o texto */
  margin-top: 50px;
  div {
    width: 500px;
    h1 {
      margin-bottom: 15px;
      font-size: 50px;
      font-family: 'Poppins';
    }
    h3 {
      margin-bottom: 20px;
      font-size: 1.2rem;
    }
    p {
      line-height: 1.6;
      font-size: 1rem;
    }
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  width: 400px;
  height: 400px;
  border: 10px solid #1e90ff; /* Define uma borda dupla preta com espessura de 4px */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adiciona uma sombra sutil */
  padding: 1px; /* Espaçamento interno opcional para separar a imagem da borda */
`
