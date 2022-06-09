import { Space, Divider, Typography } from 'antd'

const { Text } = Typography

const CardDescription = ({
  item: {
    price, color, mileage, isCanBeLoaned, isCrashed,
  },
}: CardDescriptionProps) => (
  <Space direction="vertical">
    <Space split={<Divider type="vertical" />}>
      <Space>
        Price
        <Text>
          {price}
          $
        </Text>
      </Space>
      <Space>
        Color
        <Text>
          {color}
        </Text>
      </Space>
    </Space>
    <Space split={<Divider type="vertical" />}>
      <Space>
        Mileage
        <Text>
          {mileage}
          {' '}
          ml
        </Text>
      </Space>
      <Space>
        Can be loaned
        <Text>
          {isCanBeLoaned ? 'Yes' : 'No'}
        </Text>
      </Space>
    </Space>
    <Space>
      Been in an accident
      <Text>
        {isCrashed ? 'Yes' : 'No'}
      </Text>
    </Space>
  </Space>
)

interface CardDescriptionProps {
  item: {
    price: number
    color: string
    mileage: number
    isCanBeLoaned: boolean
    isCrashed: boolean
  }
}

export default CardDescription
