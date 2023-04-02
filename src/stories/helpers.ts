type Params = {
  search?: string
  key: string
  defaultValue?: string
}

export function getValueFromStorybookSearchParams(params: Params): string {
  const { search = window.location.search, key, defaultValue = '' } = params

  const urlSearchParams = new URLSearchParams(search)

  const globals = urlSearchParams.get('globals')
  if (!globals) {
    return defaultValue
  }

  const currentValue = globals
    .split(';')
    .map((x) => x.split(':'))
    .find(([cKey]) => cKey === key)

  return currentValue?.[1] || defaultValue
}
