import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 256px 1fr;
  gap: 2rem;
  align-items: flex-start;
  background: ${({ theme }) => theme.primary};
  height: 100%;
`

export const Main = styled.main`
  grid-column: 2;
`

export const Form = styled.form`
  width: 100%;
  margin-top: 3rem;
  padding-top: 1.5rem;
  margin-left: 15rem;

  border-top: 1px solid var(--gray-600);

  strong {
    line-height: 1.6rem;
    font-size: 40px;
    color: ${({ theme }) => theme.text};
  }

  textarea {
    width: 100%;
    width: 60rem;
    display: flex;
    border: 10px solid #3730a3;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    text-align: center;
    border: 0;
    resize: none;
    height: 8rem;
    padding: 1rem;
    font-size: 25px;
    border-radius: 12px;

    line-height: 1.4rem;
    margin-top: 1rem;
    color: ${({ theme }) => theme.primary};
  }

  button {
    background: ${({ theme }) => theme.secondary};

    height: 48px;
    border: 0;
    border-radius: 10px;
    padding: 0 16px;
    width: 100%;
    color: ${({ theme }) => theme.contrast};
    font-weight: 500;
    font-size: 24px;

    transition: all 0.3s;

    &:hover {
      transform: scale(1.02);
      box-shadow: 0 0 10px ${({ theme }) => theme.background};
    }

    width: 200px;
  }

  footer {
    visibility: visible;

    margin-top: 1rem;
  }
`
