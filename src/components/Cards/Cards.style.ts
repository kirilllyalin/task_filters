import styled from 'styled-components'

export const WrapperStyled = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(5, calc(20% - 7.5px));
  grid-gap: 15px;

  width: 100%;
  padding-top: 15px;

  @media (max-width: 1920px) {
    grid-template-columns: repeat(4, calc(25% - 7.5px));
  }

  @media (max-width: 1440px) {
    grid-template-columns: repeat(3, calc(33% - 7.5px));
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, calc(50% - 7.5px));
  }

  @media (max-width: 569px) {
    grid-template-columns: repeat(1, calc(100% - 7.5px));
  }
`
