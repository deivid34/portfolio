import styled from 'styled-components'

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Article = styled.div`
  background: ${({ theme }) => theme.third};
  border-radius: 8px;
  padding: 1rem;
  margin-top: 2rem;
  max-width: 60rem;
  border: 5px solid #3730a3;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  margin-left: 15rem;
`

export const Content = styled.div`
  line-height: 1.6rem;
  color: var(--gray-300);

  color: ${({ theme }) => theme.text};
  p {
    margin-top: 1rem;
  }
  a {
    font-weight: bold;

    text-decoration: none;
    cursor: pointer;
    color: ${({ theme }) => theme.text};
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: block;

    line-height: 1.6rem;
    color: ${({ theme }) => theme.text};
  }
  time {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.text};
  }
  strong {
    display: block;
    color: var(--gray-100);
    line-height: 1.6rem;
  }
`

export const Avatar = styled.div`
  width: calc(3rem + 12px);
  height: calc(3rem + 12px);
  border-radius: 8px;
  border: 4px solid var(--gray-800);
  outline: 2px solid var(--pink-500);
`
