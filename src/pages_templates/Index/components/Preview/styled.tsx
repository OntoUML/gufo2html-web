import styled from 'styled-components'

export const PreviewContainer = styled.iframe<{ opened: boolean }>`
  border: 0;
  height: 100vh;
  margin: 0;
  overflow: auto;
  padding: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 50vw;
  z-index: 1;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding-bottom: 42px;
    transform: ${({ opened }) =>
      opened ? 'translateX()' : 'translateX(100%)'};
    transition: transform 0.3s ease;
    width: 100vw;
    will-change: transform;
  }
`
