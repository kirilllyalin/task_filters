import {
  Select, Slider, Radio, Checkbox, DatePicker, Form, Button,
} from 'antd'
import { useStore } from 'effector-react'
import moment from 'moment'

import { $currentFilters } from 'models/items/init'
import {
  filterByMark,
  filterByYear,
  filterByPrice,
  filterByMileAge,
  filterByTransmission,
  filterByColor,
  filterByCrashed,
  filterByCanBeLoaned,
  resetFilters,
} from 'models/items'
import { filtersData } from 'models/items/mockedData'

import { WrapperStyled } from './Filters.style'

import type { SliderMarks } from 'antd/lib/slider'

const { marks, colors } = filtersData

const { RangePicker } = DatePicker

const { Option } = Select

const Filters = () => {
  const {
    mark, year, price, mileage, transmission, color, isCrashed, isCanBeLoaned,
  } = useStore($currentFilters)

  return (
    <WrapperStyled>
      <Form layout="vertical" style={{ width: '96%' }}>
        <Form.Item
          label="Mark"
        >
          <Select value={mark} onChange={filterByMark}>
            <Option value={null}>All</Option>
            {marks.map(m => <Option key={m} value={m}>{m}</Option>)}
          </Select>
        </Form.Item>
        <Form.Item label="Production year">
          <RangePicker
            picker="year"
            value={[moment(year?.from), moment(year?.to)]}
            onChange={(_, formatString) => filterByYear({
              from: formatString[0],
              to: formatString[1],
            })}
          />
        </Form.Item>
        <Form.Item
          label="Price ($)"
        >
          <Slider
            marks={priceMarks}
            max={100000}
            min={0}
            range
            step={1000}
            tipFormatter={(value) => `${value}$`}
            value={price ? [price.from, price.to] : priceRange}
            onChange={(value) => filterByPrice({ from: value[0], to: value[1] })}
          />
        </Form.Item>
        <Form.Item
          label="Mileage (miles)"
        >
          <Slider
            marks={mileageMarks}
            max={120000}
            min={0}
            range
            step={1000}
            tipFormatter={(value) => `${value} miles`}
            value={mileage ? [mileage.from, mileage.to] : mileageRange}
            onChange={(value) => filterByMileAge({ from: value[0], to: value[1] })}
          />
        </Form.Item>
        <Form.Item label="Transmission">
          <Radio.Group
            optionType="button"
            style={{ minWidth: 220 }}
            value={transmission}
            onChange={({ target }) => filterByTransmission(target.value)}
          >
            <Radio.Button value="">All</Radio.Button>
            <Radio.Button value="Manual">Manual</Radio.Button>
            <Radio.Button value="Automatic">Automatic</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="Color"
        >
          <Select value={color} onChange={filterByColor}>
            <Option value={null}>All</Option>
            {colors.map(c => <Option key={c} value={c}>{c}</Option>)}
          </Select>
        </Form.Item>
        <Form.Item>
          <Checkbox
            checked={isCrashed}
            onChange={({ target }) => filterByCrashed(target.checked)}
          >
            Been in an accident
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Checkbox
            checked={isCanBeLoaned}
            onChange={({ target }) => filterByCanBeLoaned(target.checked)}
          >
            Can be loaned
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button block type="default" onClick={() => resetFilters()}>Reset filters</Button>
        </Form.Item>
      </Form>
    </WrapperStyled>
  )
}

const mileageRange: [number, number] = [0, 120000]

const priceRange: [number, number] = [0, 100000]

const priceMarks: SliderMarks = {
  0: '0',
  50000: '50,000',
  100000: '100,000',
}

const mileageMarks: SliderMarks = {
  0: '0',
  60000: '60,000',
  120000: '120,000',
}

export default Filters
