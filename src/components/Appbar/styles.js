import styled from 'styled-components'

export const Container = styled.div`
  height: 80px;
  display: flex;
  background-color: #000000;
  box-shadow: 0 0 10px 1px;
  width: 1325px;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  z-index: 10;
  h1 {
    color: #ffffff;
    margin: 0;
    font-family: 'Poppins';
    font-size: 40px;
  }
  > svg {
    position: absolute;
    left: 32px;
    color: white;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`
