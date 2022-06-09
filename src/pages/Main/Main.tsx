import { Row, Col, Typography } from 'antd'
import { useStore } from 'effector-react'

import {
  Cards, Filters, List, ViewToggle,
} from 'components'
import { $viewMode } from 'models/items/index'
import { $filteredItemsCount } from 'models/items/init'

import { WrapperStyled } from './Main.style'

const { Title } = Typography

const Main = () => {
  const viewMode = useStore($viewMode)
  const itemsCount = useStore($filteredItemsCount)

  return (
    <WrapperStyled>
      <Row gutter={[10, 0]} style={{ width: '100%' }}>
        <Col span={3}>
          <Filters />
        </Col>
        <Col offset={1} span={20}>
          <Row align="middle" justify="space-between" style={{ width: '100%' }}>
            <Title level={4}>
              Items (
              { itemsCount }
              )
            </Title>
            <ViewToggle />
          </Row>
          {viewMode === 'cards' ? <Cards /> : <List />}
        </Col>
      </Row>
    </WrapperStyled>
  )
}

export default Main
