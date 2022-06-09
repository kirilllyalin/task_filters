/* eslint-disable @typescript-eslint/no-explicit-any */
import { combine } from 'effector'

import { filterItemsByKey } from './helpers'
import { Car, Filter } from './types'

import {
  $filter,
  $items,
  resetFilters,
  filter,
  $viewMode,
  changedViewMode,
} from '.'

export const $currentFilter = $filter
  .on(filter, (state, { key, value }) => ({ ...state, [key]: value }))
  .reset(resetFilters)

export const $filteredItems = combine($items, $currentFilter, (items, currentFilters) => {
  let filteredItems: Car[] = items

  const filterKeys = Object.keys(currentFilters) as Array<keyof Filter>

  filterKeys.forEach((key) => { filteredItems = filterItemsByKey(filteredItems, currentFilters, key) })

  return filteredItems
})

export const $filteredItemsCount = $filteredItems.map(items => items.length)

$viewMode.on(changedViewMode, (_, viewMode) => viewMode)
