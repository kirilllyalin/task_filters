import styled from 'styled-components'

export const WrapperStyled = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 300px auto;
  grid-gap: 40px;

  @media (max-width: 1440px) {
    grid-template-columns: 220px auto;
  }

`
