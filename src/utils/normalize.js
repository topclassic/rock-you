export const normalizeDigit = (value) => {
    if (!value) {
      return value
    }
    return value.replace(/[^\d.]/g, '')
  }