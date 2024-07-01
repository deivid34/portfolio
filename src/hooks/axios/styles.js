import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;

  flex-direction: column;
  background: ${({ theme }) => theme.gradiant};
  align-items: center;
  justify-content: center;

  h1 {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 50px;
    color: #fff;
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 1100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: Black;
  }
`

export const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`

export const RepoCard = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: left;
  color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  a {
    color: #1e90ff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  &:hover {
    transform: scale(1.05);
  }
`
