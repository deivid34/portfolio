import styled from 'styled-components'

export const Container = styled.div`
  max-width: 70rem;
  margin: 2rem auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 256px 1fr;
  gap: 2rem;
  align-items: flex-start;
`

export const Main = styled.main`
  grid-column: 2;
`

export const Form = styled.form`
  margin-bottom: 2rem;
  width: 100%;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--gray-600);

  strong {
    line-height: 1.6rem;
    color: var(--gray-100);
  }

  textarea {
    width: 100%;
    background: var(--gray-800);
    border: 0;
    resize: none;
    height: 6rem;
    padding: 1rem;
    border-radius: 8px;
    color: var(--gray-100);
    line-height: 1.4rem;
    margin-top: 1rem;
  }

  button {
    padding: 1rem 1.5rem;
    margin-top: 1rem;
    border-radius: 8px;
    border: 0;
    background: var(--pink-500);
    color: var(--white);
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  footer {
    visibility: visible;
    max-height: 100%;
  }
`
