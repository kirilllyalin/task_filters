import styled from 'styled-components'

export const WrapperStyled = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 300px auto;
  grid-gap: 40px;

  position: relative;

  @media (max-width: 1440px) {
    grid-template-columns: 220px auto;
  }

  @media (max-width: 1024px) {
    grid-template-columns: auto;
  }

`

export const TabletHeaderStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 80px;

  position: sticky;  
  top: 0;
  left: 0;
  z-index: 20;

  background-color: #FFFFFF;

  border-bottom: 1px solid #0000000f;
`
