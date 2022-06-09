import { createStore, createEvent, Event } from 'effector'

import { data } from './mockedData'
import {
  Car, Filter, FromToNumberValue, FromToStringValue, PossibleFilterValue,
} from './types'

export const $items = createStore<Car[]>(data)

export const $filter = createStore<Filter>({
  mark: null,
  year: {
    from: '2000',
    to: '2022',
  },
  price: {
    from: 10000,
    to: 75000,
  },
  mileage: {
    from: 20000,
    to: 60000,
  },
  engine: 1.0,
  transmission: null,
  color: null,
  isCrashed: false,
  isCanBeLoaned: true,
})

export const filtered = createEvent<{ key: string, value: PossibleFilterValue }>()

export const filteredByMark: Event<string | null> = filtered.prepend(value => ({ key: 'mark', value }))

export const filteredByYear: Event<FromToStringValue | null> = filtered
  .prepend(value => ({ key: 'year', value }))

export const filteredByPrice: Event<FromToNumberValue | null> = filtered
  .prepend(value => ({ key: 'price', value }))

export const filteredByMileAge: Event<FromToNumberValue | null> = filtered
  .prepend(value => ({ key: 'mileage', value }))

export const filteredByEngine: Event<number> = filtered.prepend(value => ({ key: 'engine', value }))

export const filteredByTransmission: Event<'Automatic' | 'Manual' | null> = filtered
  .prepend(value => ({ key: 'transmission', value }))

export const filteredByColor: Event<string | null> = filtered.prepend(value => ({ key: 'color', value }))

export const filteredByCrashed: Event<boolean | null> = filtered.prepend(value => ({ key: 'isCrashed', value }))

export const filteredByCanBeLoaned: Event<boolean | null> = filtered.prepend(value => ({ key: 'isCanBeLoaned', value }))

export const resetFilters = createEvent()
