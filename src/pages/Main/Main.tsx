import {
  Row, Col, Typography, Empty, Divider, Space,
} from 'antd'
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

  const renderContent = () => {
    if (itemsCount === 0) {
      return <Empty style={{ marginTop: 100 }} />
    }

    if (viewMode === 'cards') {
      return <Cards />
    }

    return <List />
  }

  return (
    <Row gutter={[32, 0]}>
      <Col flex="300px">
        <Title level={4} style={{ height: 40, verticalAlign: 'center' }}>Filtration</Title>
        <Divider />
        <Filters />
      </Col>
      <Col flex="auto">
        <Row justify="space-between" style={{ width: '100%' }}>
          <Title level={4}>
            Items (
            { itemsCount }
            )
          </Title>
          <ViewToggle />
        </Row>
        <Divider />
        {renderContent()}
      </Col>
    </Row>
  )
}

export default Main
