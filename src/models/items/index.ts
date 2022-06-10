import { createStore, createEvent } from 'effector'

import { data } from './mockedData'
import {
  Car, Filters, PossibleFilterValue,
} from './types'

export const $items = createStore<Car[]>(data)

export const $filters = createStore<Filters>({
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
  transmission: null,
  color: null,
  isCrashed: false,
  isCanBeLoaned: true,
})

export const filter = createEvent<{ key: string, value: PossibleFilterValue }>()

export const prependFilterEventByKey = (key: keyof Filters) => filter
  .prepend<PossibleFilterValue>(value => ({ key, value }))

export const $viewMode = createStore<'cards' | 'list'>('cards')

export const $isFiltersOpened = createStore<boolean>(false)

export const changeViewMode = createEvent<'cards' | 'list'>()

export const showFilters = createEvent<boolean>()

export const filterByMark = prependFilterEventByKey('mark')

export const filterByYear = prependFilterEventByKey('year')

export const filterByPrice = prependFilterEventByKey('price')

export const filterByMileAge = prependFilterEventByKey('mileage')

export const filterByTransmission = prependFilterEventByKey('transmission')

export const filterByColor = prependFilterEventByKey('color')

export const filterByCrashed = prependFilterEventByKey('isCrashed')

export const filterByCanBeLoaned = prependFilterEventByKey('isCanBeLoaned')

export const resetFilters = createEvent()
