/* eslint-disable @typescript-eslint/no-explicit-any */
import { combine } from 'effector'

import {
  checkForRange, checkEquality,
} from './helpers'
import { Filter } from './types'

import {
  $filter,
  $items,
  resetFilters,
  filtered,
} from '.'

export const $activeFilters = $filter
  .on(filtered, (state, { key, value }) => ({ ...state, [key]: value }))
  .reset(resetFilters)

export const $filteredItems = combine($items, $activeFilters, (items, filters) => {
  let filteredItems = items

  const filterKeys = Object.keys(filters) as Array<keyof Filter>

  filterKeys.forEach((key) => {
    if (key === 'price' || key === 'mileage' || key === 'year') {
      filteredItems = filteredItems.filter(item => checkForRange(filters[key], item[key]))
    } else {
      filteredItems = filteredItems.filter(item => checkEquality(filters[key], item[key]))
    }
  })

  return filteredItems
})

export const $filteredItemsCount = $filteredItems.map(items => items.length)
