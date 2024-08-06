import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.primary};
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 300px;
  left: ${(props) => (props.sidebar ? '0' : '-100%')};
  animation: showSidebar 0.4s;
  box-shadow: 10px 0 10px -10px ${({ theme }) => theme.text};

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 25px;
    margin-top: 30px;
    margin-left: 30px;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`

export const Content = styled.div`
  margin-top: 100px;
`
