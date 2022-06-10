import { Space, Typography } from 'antd'

const { Text } = Typography

const CardDescription = ({
  item: {
    price, color, mileage, isCanBeLoaned, isCrashed,
  },
}: CardDescriptionProps) => (
  <Space direction="vertical" size={5}>
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
