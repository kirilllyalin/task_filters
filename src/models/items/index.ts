import { create } from 'domain'

import { createStore, createEvent, Event } from 'effector'

import { Car, data } from './mockedData'

type FilterValue = string | number | boolean | { from: number; to: number } | null

export interface Filter {
  mark: string | null,
  year: number | null,
  price: { from: number, to: number } | null,
  mileage: { from: number, to: number } | null,
  engine: number | null,
  transmission: 'Automatic' | 'Manual' | null,
  color: string | null,
  isCrashed: boolean | null,
  isCanBeLoaned: boolean | null,
}

export const $items = createStore<Car[]>(data)

export const $filters = createStore<Filter>({
  mark: null,
  year: null,
  price: null,
  mileage: null,
  engine: null,
  transmission: null,
  color: null,
  isCrashed: null,
  isCanBeLoaned: null,
})

export const filter = createEvent<{ key: string, value: FilterValue }>()

export const filterByMark: Event<string | null> = filter.prepend(value => ({ key: 'mark', value }))

export const filteredByYear: Event<number> = filter.prepend(value => ({ key: 'year', value }))

export const filteredByPrice: Event<{ from: number, to: number } | null> = filter
  .prepend(value => ({ key: 'price', value }))

export const filteredByMileAge: Event<{ from: number, to: number } | null> = filter
  .prepend(value => ({ key: 'mileage', value }))

export const filteredByEngine: Event<number> = filter.prepend(value => ({ key: 'number', value }))

export const filteredByTransmission: Event<'Automatic' | 'Manual' | null> = filter
  .prepend(value => ({ key: 'transmission', value }))

export const filteredByColor: Event<string | null> = filter.prepend(value => ({ key: 'color', value }))

export const filteredByCrashed: Event<boolean | null> = filter.prepend(value => ({ key: 'isCrashed', value }))

export const filteredByCanBeLoaned: Event<boolean | null> = filter.prepend(value => ({ key: 'isCanBeLoaned', value }))

export const resetFilters = createEvent()
