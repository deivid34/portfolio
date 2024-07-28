import styled from 'styled-components'

export const Aside = styled.div`
  background: var(--gray-800);
  border-radius: 8px;
  overflow: hidden;

  margin-top: 5rem;
  margin-left: 2rem;
  background: ${({ theme }) => theme.third};
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: calc(0px - 1.5rem - 6px);
  }
  strong {
    margin-top: 0.875rem;
    margin-bottom: 1px;
    line-height: 2rem;
    color: ${({ theme }) => theme.text};
  }
`

export const Image = styled.img`
  width: 100%;
  height: 72px;
  object-fit: cover;
`

export const Footer = styled.div`
  padding: 1.5rem 2rem 2rem;
  color: ${({ theme }) => theme.text};

  a {
    background: ${({ theme }) => theme.primary};

    border-radius: 8px;
    height: 50px;
    padding: 2rem;
    font-weight: bold;
    display: block;
    text-decoration: none;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.4rem;

    transition:
      color 0.2s,
      background 0.2s;
  }
`
