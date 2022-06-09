/* eslint-disable @typescript-eslint/no-explicit-any */
import { combine } from 'effector'

import {
  filterByMark,
  resetFilters,
  $filters,
  $items,
  filter,
  Filter,
} from '.'

const checkEquality = (value: any, checkedValue: any): boolean => {
  if (!value || value === checkedValue) {
    return true
  }

  return false
}

const checkForRange = (value: any, checkedValue: any): boolean => {
  if (!value || (checkedValue >= value.from && checkedValue <= value.to)) {
    return true
  }

  return false
}

export const $activeFilters = $filters
  .on(filter, (state, { key, value }) => ({ ...state, [key]: value }))
  .reset(resetFilters)

export const $filteredItems = combine($items, $activeFilters, (items, filters) => {
  const filterKeys = Object.keys(filters) as Array<keyof Filter>

  const rangeFilterKeys: Array<keyof Filter> = ['price', 'mileage']

  let filteredItems = items

  filterKeys.forEach((key) => {
    if (rangeFilterKeys.includes(key)) {
      filteredItems = filteredItems.filter(item => checkForRange(filters[key], item[key]))
    } else {
      filteredItems = filteredItems.filter(item => checkEquality(filters[key], item[key]))
    }
  })

  return filteredItems
})

$filteredItems.watch(state => console.log(state))
$activeFilters.watch(state => console.log(state))

filterByMark('Toyota')

setTimeout(() => filterByMark(null), 3000)
