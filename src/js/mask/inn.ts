const regexp = /(\d{0,12})/
const completeRegexp = /\d{12}$/

export function getUnmaskedValue(value: string) {
  return value.replace(/\D/g, '')
}

export function getMaskedValue(value: string) {
  const numberValue = getUnmaskedValue(value)

  if (!numberValue) return ''

  const matchValue = numberValue.match(regexp)

  if (!matchValue) return ''

  const a = matchValue[1]

  const maskedValue = `${a ? `${a}` : ''}`

  return maskedValue
}

export function isComplete(value: string) {
  const numberValue = value.replace(/\D/g, '')

  return completeRegexp.test(numberValue)
}

export default {
  getUnmaskedValue,
  getMaskedValue,
  isComplete,
}
