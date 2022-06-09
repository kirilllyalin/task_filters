import { Radio } from 'antd'
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons'
import { useStore } from 'effector-react'

import { $viewMode, changedViewMode } from 'models/items/index'

const ViewToggle = () => {
  const viewMode = useStore($viewMode)

  return (
    <Radio.Group size="large" value={viewMode} onChange={({ target }) => changedViewMode(target.value)}>
      <Radio.Button style={{ padding: '0 12px' }} value="cards"><AppstoreOutlined /></Radio.Button>
      <Radio.Button style={{ padding: '0 12px' }} value="list"><BarsOutlined /></Radio.Button>
    </Radio.Group>
  )
}

export default ViewToggle
