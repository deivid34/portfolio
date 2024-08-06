import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  background: ${({ theme }) => theme.secondary};
  box-shadow: 0 0 10px 1px;
  height: 90px;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  z-index: 10;
  box-shadow: 1px 1px 1px 1px ${({ theme }) => theme.text};
  h1 {
    color: #ffffff;
    margin: 0;
    font-family: 'Pixelify Sans';
    font-size: 70px;
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
