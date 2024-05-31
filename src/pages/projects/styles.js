import styled from 'styled-components'

export const Container = styled.div``

export const Content = styled.div`
  width: 100%;

  margin: 0 auto;
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  margin-top: 20px;
  margin-left: 40px;
  h1 {
    margin-bottom: 30px;
    font-family: 'Poppins';
    font-size: 50px;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
`

export const Image = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  border: 2px solid #ccc;
  padding: 5px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
`
