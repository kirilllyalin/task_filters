import { useState } from 'react'
import { Row, Col } from 'antd'

import {
  Cards, Filters, List, ViewToggle,
} from 'components'

import { WrapperStyled } from './Main.style'

const Main = () => {
  const [viewMode, setViewMode] = useState('list')

  const isCards = viewMode === 'cards'

  return (
    <WrapperStyled>
      <Row gutter={[30, 0]} style={{ width: '100%' }}>
        <Col span={3}>
          <Filters />
        </Col>
        <Col span={21}>
          {isCards ? <Cards /> : <List />}
        </Col>
      </Row>
    </WrapperStyled>
  )
}

export default Main
