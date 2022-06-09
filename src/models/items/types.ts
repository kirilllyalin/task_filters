export type PossibleFilterValue = string | number | boolean | FromToValue | null

export type FromToValue = FromToNumberValue | FromToStringValue

export type FromToNumberValue = { from: number, to: number }

export type FromToStringValue = { from: string, to: string }

export type DefaultValue = string | number | boolean | null

export interface Filter {
  mark: string | null,
  year: FromToStringValue | null,
  price: FromToNumberValue | null,
  mileage: FromToNumberValue | null,
  engine: number,
  transmission: 'Automatic' | 'Manual' | null,
  color: string | null,
  isCrashed: boolean | null,
  isCanBeLoaned: boolean | null,
}

export interface Car {
  mark: string,
  model: string,
  year: string,
  price: number,
  image: string,
  mileage: number,
  engine: number,
  transmission: string,
  color: string,
  isCrashed: boolean,
  isCanBeLoaned: boolean,
}