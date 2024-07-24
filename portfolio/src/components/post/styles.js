import styled from 'styled-components'

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Article = styled.div`
  background: var(--gray-800);
  border-radius: 8px;
  padding: 2.5rem;
`

export const Content = styled.div`
  line-height: 1.6rem;
  color: var(--gray-300);
  margin-top: 1.5rem;
  p {
    margin-top: 1rem;
  }
  a {
    font-weight: bold;
    color: var(--pink-300);
    text-decoration: none;
    cursor: pointer;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: block;
    color: var(--gray-100);
    line-height: 1.6rem;
  }
  time {
    font-size: 0.875rem;
    color: var(--gray-400);
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
