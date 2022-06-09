import {
  Card,
} from 'antd'
import { useStore } from 'effector-react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { $filteredItems } from 'models/items/init'

import CardDescription from './CardDescription'
import CardTitle from './CardTitle'
import { WrapperStyled } from './Cards.style'

import 'react-lazy-load-image-component/src/effects/opacity.css'

const { Meta } = Card

const Cards = () => {
  const filteredItems = useStore($filteredItems)

  return (
    <WrapperStyled>
      {filteredItems.map(item => (
        <Card
          bodyStyle={{ borderTop: '1px solid #F5F5F5' }}
          cover={(
            <LazyLoadImage
              alt={`${item.mark} ${item.model}`}
              effect="opacity"
              height={240}
              src={item.image}
              style={{ objectFit: 'cover', padding: 20 }}
              width={350}
            />
          )}
          hoverable
          style={{ width: 350 }}
        >
          <Meta
            description={<CardDescription item={item} />}
            title={<CardTitle item={item} />}
          />
        </Card>
      ))}
    </WrapperStyled>
  )
}

export default Cards
