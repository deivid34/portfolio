import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.primary};
  width: 100%;
  height: 100%;
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  margin-top: 50px;
  font-size: 50px;
  color: ${({ theme }) => theme.text};
  width: 100%;
  height: 100vh;
`

export const Image = styled.div`
  border-radius: 50%;
`
