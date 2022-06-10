import {
  List as AntdList, Avatar,
} from 'antd'
import { useStore } from 'effector-react'

import { $filteredItems } from 'models/items/init'

import { ItemDescription } from '..'

import { LazyLoadImageStyled } from './List.style'

import 'react-lazy-load-image-component/src/effects/opacity.css'

const List = ({ isPhone }: { isPhone: boolean }) => {
  const filteredItems = useStore($filteredItems)

  if (isPhone) {
    return (
      <AntdList
        dataSource={filteredItems}
        renderItem={item => (
          <AntdList.Item key={item.model}>
            <AntdList.Item.Meta
              avatar={<Avatar size="large" src={item.image} />}
              description={<ItemDescription item={item} />}
              title={`${item.mark} ${item.model}`}
            />
          </AntdList.Item>
        )}
      />
    )
  }

  return (
    <AntdList
      dataSource={filteredItems}
      renderItem={item => (
        <AntdList.Item
          key={item.model}
          extra={(
            <LazyLoadImageStyled
              alt={`${item.mark} ${item.model}`}
              effect="opacity"
              src={item.image}
            />
          )}
        >
          <AntdList.Item.Meta
            description={<ItemDescription item={item} />}
            title={`${item.mark} ${item.model}`}
          />
        </AntdList.Item>
      )}
    />
  )
}

export default List
