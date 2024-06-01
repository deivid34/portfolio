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

    font-weight: 700;

    font-family: 'Poppins'; sans-serif;
  }
  p {
    font-size: 1rem;
  }
  button {
    margin-top: 10px;
  }
`
export const Form = styled.div`
  margin-top: 50px;
  gap: 200px;
  display: flex;
  flex-direction: row;
  text-align: center;
`

export const Image = styled.img`
  width: 200px;
`
export const IconContainer = styled.div`
  margin-left: 1050px;
  margin-top: -10px;

  h3 {
    margin-bottom: 5px;
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
  }
`
