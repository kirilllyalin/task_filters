import {
  List as AntdList, Space, Typography, Divider,
} from 'antd'
import { useStore } from 'effector-react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { $filteredItems } from 'models/items/init'

import 'react-lazy-load-image-component/src/effects/opacity.css'

const { Text } = Typography

const List = () => {
  const filteredItems = useStore($filteredItems)

  return (
    <AntdList
      dataSource={filteredItems}
      itemLayout="vertical"
      renderItem={item => (
        <AntdList.Item
          key={item.model}
          extra={(
            <LazyLoadImage
              alt={`${item.mark} ${item.model}`}
              effect="opacity"
              height={180}
              src={item.image}
              style={{ objectFit: 'cover', padding: 20 }}
              width={290}
            />
          )}
        >
          <AntdList.Item.Meta
            description={(
              <Space split={<Divider type="vertical" />}>
                <Space>
                  Price
                  <Text>
                    {item.price}
                    $
                  </Text>
                </Space>
                <Space>
                  Color
                  <Text>
                    {item.color}
                  </Text>
                </Space>
                <Space>
                  Mileage
                  <Text>
                    {item.mileage}
                    {' '}
                    ml
                  </Text>
                </Space>
                <Space>
                  Can be loaned
                  <Text>
                    {item.isCanBeLoaned ? 'Yes' : 'No'}
                  </Text>
                </Space>
                <Space>
                  Been in an accident
                  <Text>
                    {item.isCrashed ? 'Yes' : 'No'}
                  </Text>
                </Space>
              </Space>
)}
            title={`${item.mark} ${item.model}`}
          />
        </AntdList.Item>
      )}
    />
  )
}

export default List
