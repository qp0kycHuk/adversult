const regexp = /(\d{0,4})(\d{0,6})/
const completeRegexp = /\d{10}$/

export function getUnmaskedValue(value: string) {
  return value.replace(/\D/g, '')
}

export function getMaskedValue(value: string) {
  const numberValue = getUnmaskedValue(value)

  if (!numberValue) return ''

  const matchValue = numberValue.match(regexp)

  if (!matchValue) return ''

  const a = matchValue[1]
  const b = matchValue[2]

  const maskedValue = `${a ? `${a}` : ''}${b ? ` ${b}` : ''}`

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
