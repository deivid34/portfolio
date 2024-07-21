import styled from 'styled-components'
export const Container = styled.div`
  background: ${({ theme }) => theme.primary};
  width: 100%;
  height: 100vh;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export const Form = styled.form`
  margin-top: 180px;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.2);
  width: 100%;
  padding: 30px;
  max-width: 600px; /* Aumente a largura máxima para 600px */
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    margin-top: 100px;
    padding: 20px;
  }

  @media (max-width: 480px) {
    margin-top: 50px;
    padding: 15px;
  }
  h1 {
    margin-bottom: 30px;
    font-size: 50px;
    font-family: 'Poppins';
    color: ${({ theme }) => theme.text};

    @media (max-width: 768px) {
      font-size: 40px;
    }

    @media (max-width: 480px) {
      font-size: 30px;
    }
  }
  button {
    margin-top: 40px;

    @media (max-width: 768px) {
      margin-top: 30px;
    }

    @media (max-width: 480px) {
      margin-top: 20px;
    }
  }
  input {
    margin: 5px;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
      padding: 8px;
    }
  }
`
