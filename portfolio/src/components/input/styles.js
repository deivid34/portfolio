import styled, { css } from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.text};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.text};
  padding: 16px;

  width: 100%;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  svg {
    margin-right: 16px;
  }

  input {
    background: transparent;
    border: 0;
    font-size: 16px;
    width: 100%;

    ${(props) =>
      props.isFilled &&
      css`
        color: ${({ theme }) => theme.secondary};
      `}
    &::placeholder {
      color: ${({ theme }) => theme.gray};
    }
  }
  margin: 5px auto;
  max-width: 500px;
`
