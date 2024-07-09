import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  align-items: center;
  width: 100%;
  height: 100vh; /* Garante que o container ocupe toda a altura da viewport */
  flex-direction: column;
  text-align: center;
  position: relative; /* Adiciona posição relativa para o container */
  background: ${({ theme }) => theme.gradiant};
  background-size: cover; /* Faz com que o background cubra todo o container */
  background-repeat: no-repeat; /* Evita repetição do background */
`
