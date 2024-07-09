import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.gradiant};
  width: 100%;
  height: 100vh;
`

export const Content = styled.div`
  width: 1000px;

  margin: 0 auto;
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 100px;
  margin-left: 40px;

  h1 {
    margin-bottom: 30px;

    font-size: 70px;
    background: linear-gradient(90deg, #333333, #ffffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 50px;
    }

    @media (max-width: 480px) {
      font-size: 40px;
    }
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
  max-width: 450px;
  border-radius: 8px;
  border: 2px solid #ccc;
  padding: 5px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    max-width: 400px;
  }

  @media (max-width: 768px) {
    max-width: 350px;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`

export const IconContent = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  padding: 5px;
  margin-top: 50px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.3);
  }
`
