import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  justify-content: center;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center; /* Center items horizontally */
  width: 100%;

  h1 {
    font-size: 50px;

    font-family: 'Roboto', sans-serif;
  }
  button {
    margin-top: 10px;
  }
`
export const Form = styled.div`
  margin-top: 100px;
  gap: 200px;
  display: flex;
  flex-direction: row;
text-align:center;

  div {
    display: flex;
    flex-direction: column;
   margin-top:10px
    gap: 10px;

  
`

export const Image = styled.img`
  width: 400px;
`
