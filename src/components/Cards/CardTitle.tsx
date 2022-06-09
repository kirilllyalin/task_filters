import { Space, Typography } from 'antd'

const { Text } = Typography

const CardTitle = ({
  item: { mark, model, transmission },
}: CardTitleProps) => (
  <Space>
    <Text>
      {mark}
      {' '}
      {model}
    </Text>
    <Text type="secondary">
      {transmission}
    </Text>
  </Space>
)

interface CardTitleProps {
  item: {
    mark: string
    model: string
    transmission: string
  }
}

export default CardTitle
