import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.gradiant};
  width: 100%;
  height: 100vh;
`

export const Content = styled.div``

export const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Alinha a imagem e o texto no início */
  gap: 100px; /* Espaçamento entre a imagem e o texto */
  margin-top: 200px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }

  @media (max-width: 768px) {
    margin-top: 50px;
  }

  @media (max-width: 480px) {
    margin-top: 30px;
    gap: 30px;
  }

  div {
    width: 500px;

    @media (max-width: 1024px) {
      width: 80%;
    }

    @media (max-width: 768px) {
      width: 90%;
    }

    @media (max-width: 480px) {
      width: 100%;
    }

    h1 {
      margin-bottom: 15px;
      font-size: 50px;
      font-family: 'Poppins';

      @media (max-width: 1024px) {
        font-size: 40px;
      }

      @media (max-width: 768px) {
        font-size: 30px;
      }

      @media (max-width: 480px) {
        font-size: 25px;
      }
    }

    h3 {
      margin-bottom: 20px;
      font-size: 1.2rem;
      font-family: 'Poppins';

      @media (max-width: 1024px) {
        font-size: 1rem;
      }

      @media (max-width: 768px) {
        font-size: 0.9rem;
      }

      @media (max-width: 480px) {
        font-size: 0.8rem;
      }
    }

    p {
      line-height: 1.6;
      font-size: 1.1rem;
      font-family: 'Poppins';

      @media (max-width: 1024px) {
        font-size: 1rem;
      }

      @media (max-width: 768px) {
        font-size: 0.9rem;
      }

      @media (max-width: 480px) {
        font-size: 0.8rem;
      }
    }
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  width: 450px;
  height: 450px;
  border: 10px solid black;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);

  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  @media (max-width: 1024px) {
    width: 400px;
    height: 400px;
  }

  @media (max-width: 768px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 300px;
  }

  @keyframes floating {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 10px);
    }
    100% {
      transform: translate(0, 0px);
    }
  }
`
