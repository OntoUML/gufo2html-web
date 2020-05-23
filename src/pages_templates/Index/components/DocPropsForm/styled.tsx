import styled from 'styled-components'

export const FormContainer = styled.div`
  background-color: #f5f5f5;
  border-right: 1px solid #ddd;
  min-height: 100vh;
  padding: 5rem;
  width: 50vw;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 1rem 1rem 5rem;
    width: 100vw;
  }
`
