import { FromToValue, DefaultValue } from './types'

export const checkEquality = (value: DefaultValue, checkedValue: string | number | boolean): boolean => {
  if (!value || value === checkedValue) {
    return true
  }

  return false
}

export const stringToNumber = (value: string): number => Number(value)

export const checkForRange = (range: FromToValue | null, checkedValue: number | string): boolean => {
  const numberedCheckedValue = typeof checkedValue === 'string' ? Number(checkedValue) : checkedValue
  const numberedRange = typeof range?.from === 'string'
    ? { from: Number(range.from), to: Number(range.to) }
    : range

  if (!numberedRange) { return true }

  if (numberedCheckedValue >= numberedRange.from && numberedCheckedValue <= numberedRange.to) {
    return true
  }

  return false
}
