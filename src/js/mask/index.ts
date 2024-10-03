function init(selector: string, mask: Mask) {
  document.addEventListener('input', (event) => {
    const target = event.target as HTMLInputElement

    if (!target.matches(selector)) return
    const maskedValue = mask.getMaskedValue(target.value)

    target.value = maskedValue

    const blurHandler = () => {
      if (!mask.isComplete(target.value)) {
        target.value = ''
      }
    }

    target.addEventListener('blur', blurHandler, { once: true })
  })
}

type Mask = {
  getUnmaskedValue: (value: string) => string
  getMaskedValue: (value: string) => string
  isComplete: (value: string) => boolean
}

export default { init }
