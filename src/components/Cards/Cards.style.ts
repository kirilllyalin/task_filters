import styled from 'styled-components'

export const WrapperStyled = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(5, 350px);
  grid-template-rows: repeat(5, auto);
  grid-gap: 20px;

  width: 100%;
  padding-top: 15px;
`
