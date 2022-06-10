import {
  Row, Col, Typography, Empty, Divider, Button, Space, Modal,
} from 'antd'
import { useStore } from 'effector-react'
import { useMediaQuery } from 'react-responsive'
import { FilterOutlined } from '@ant-design/icons'

import {
  Cards, Filters, List, ViewToggle,
} from 'components'
import { $viewMode, $isFiltersOpened, showFilters } from 'models/items/index'
import { $filteredItemsCount } from 'models/items/init'

import { WrapperStyled, TabletHeaderStyled } from './Main.style'

const { Title } = Typography

const Main = () => {
  const viewMode = useStore($viewMode)
  const itemsCount = useStore($filteredItemsCount)
  const isFiltersOpened = useStore($isFiltersOpened)

  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })

  const renderContent = () => {
    if (itemsCount === 0) {
      return <Empty style={{ marginTop: 100 }} />
    }

    if (viewMode === 'cards') {
      return <Cards />
    }

    return <List />
  }

  if (isTablet) {
    return (
      <WrapperStyled>
        <Col>
          <TabletHeaderStyled>
            <Title level={4}>
              Items (
              { itemsCount }
              )
            </Title>
            <Space>
              <Button
                icon={<FilterOutlined />}
                size="large"
                type="primary"
                onClick={() => showFilters(true)}
              />
              <ViewToggle />
            </Space>
          </TabletHeaderStyled>
          {renderContent()}
          <Modal
            title="Filtration"
            visible={isFiltersOpened}
            onCancel={() => showFilters(false)}
            onOk={() => showFilters(false)}
          >
            <Filters />
          </Modal>
        </Col>
      </WrapperStyled>
    )
  }

  return (
    <WrapperStyled>
      <Col>
        <Title level={4} style={{ height: 40, verticalAlign: 'center' }}>Filtration</Title>
        <Divider />
        <Filters />
      </Col>
      <Col>
        <Row justify="space-between">
          <Title level={4}>
            Items (
            { itemsCount }
            )
          </Title>
          <Space>
            <ViewToggle />
          </Space>
        </Row>
        <Divider />
        {renderContent()}
      </Col>
    </WrapperStyled>
  )
}

export default Main
