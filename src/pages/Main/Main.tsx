import { useState } from 'react'
import { Row } from 'antd'

import {
  Cards, Filters, List, ViewToggle,
} from 'components'

import { WrapperStyled } from './Main.style'

const Main = () => {
  const [viewMode, setViewMode] = useState('list')

  const isCards = viewMode === 'cards'

  return (
    <WrapperStyled>
      <Row justify="space-between">
        <Filters />
        <ViewToggle />
      </Row>
      {isCards ? <Cards /> : <List />}
    </WrapperStyled>
  )
}

export default Main
