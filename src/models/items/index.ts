import { createStore, createEvent } from 'effector'

import { data } from './mockedData'
import {
  Car, Filter, PossibleFilterValue,
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
  transmission: null,
  color: null,
  isCrashed: false,
  isCanBeLoaned: true,
})

export const filter = createEvent<{ key: string, value: PossibleFilterValue }>()

export const prependFilteredEventByKey = (key: keyof Filter) => filter
  .prepend<PossibleFilterValue>(value => ({ key, value }))

export const $viewMode = createStore<'cards' | 'list'>('cards')

export const changedViewMode = createEvent<'cards' | 'list'>()

export const filterByMark = prependFilteredEventByKey('mark')

export const filterByYear = prependFilteredEventByKey('year')

export const filterByPrice = prependFilteredEventByKey('price')

export const filterByMileAge = prependFilteredEventByKey('mileage')

export const filterByTransmission = prependFilteredEventByKey('transmission')

export const filterByColor = prependFilteredEventByKey('color')

export const filterByCrashed = prependFilteredEventByKey('isCrashed')

export const filterByCanBeLoaned = prependFilteredEventByKey('isCanBeLoaned')

export const resetFilters = createEvent()
