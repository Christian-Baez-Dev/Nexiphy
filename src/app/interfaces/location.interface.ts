export interface LocationI{
  id: string
  name: string
}

export interface ProvinceI extends LocationI{
}

export interface CountryI extends LocationI{
}

export interface MunicipalityI extends LocationI{
}
