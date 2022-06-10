import {
  Card,
} from 'antd'
import { useStore } from 'effector-react'

import { ItemDescription } from 'components/index'
import { $filteredItems } from 'models/items/init'

import CardTitle from './CardTitle'
import { WrapperStyled, LazyLoadImageStyled } from './Cards.style'

import 'react-lazy-load-image-component/src/effects/opacity.css'

const { Meta } = Card

const Cards = () => {
  const filteredItems = useStore($filteredItems)

  return (
    <WrapperStyled>
      {filteredItems.map(item => (
        <Card
          key={`${item.mark} ${item.model}`}
          bodyStyle={{ borderTop: '1px solid #F5F5F5' }}
          cover={(
            <LazyLoadImageStyled
              alt={`${item.mark} ${item.model}`}
              effect="opacity"
              src={item.image}
            />
          )}
          hoverable
        >
          <Meta
            description={<ItemDescription item={item} />}
            title={<CardTitle item={item} />}
          />
        </Card>
      ))}
    </WrapperStyled>
  )
}

export default Cards
