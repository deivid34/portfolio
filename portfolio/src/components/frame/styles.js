import styled from 'styled-components'

export const Aside = styled.div`
  background: var(--gray-800);
  border-radius: 8px;
  overflow: hidden;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: calc(0px - 1.5rem - 6px);
  }
  strong {
    margin-top: 0.875rem;
    color: var(--gray-400);
    line-height: 1.6rem;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 72px;
  object-fit: cover;
`

export const Footer = styled.div`
  border-top: 1px solid var(--gray-600);
  margin-top: 1.5rem;
  padding: 1.5rem 2rem 2rem;
  a {
    background: transparent;
    color: var(--pink-500);
    border: 1px solid var(--pink-500);
    border-radius: 8px;
    height: 50px;
    padding: 0 1.5rem;
    font-weight: bold;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.4rem;

    transition:
      color 0.2s,
      background 0.2s;
  }
`
