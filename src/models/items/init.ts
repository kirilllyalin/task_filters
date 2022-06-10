import { combine } from 'effector'

import { filterItemsByKey } from './helpers'
import { Car, Filters } from './types'

import {
  $filters,
  $items,
  resetFilters,
  filter,
  $viewMode,
  changeViewMode,
  showFilters,
  $isFiltersOpened,
} from '.'

export const $currentFilters = $filters
  .on(filter, (state, { key, value }) => ({ ...state, [key]: value }))
  .reset(resetFilters)

export const $filteredItems = combine($items, $currentFilters, (items, currentFilters) => {
  let filteredItems: Car[] = items

  const filterKeys = Object.keys(currentFilters) as Array<keyof Filters>

  filterKeys.forEach((key) => { filteredItems = filterItemsByKey(filteredItems, currentFilters, key) })

  return filteredItems
})

export const $filteredItemsCount = $filteredItems.map(items => items.length)

$viewMode.on(changeViewMode, (_, viewMode) => viewMode)

$isFiltersOpened.on(showFilters, (_, value) => value)
