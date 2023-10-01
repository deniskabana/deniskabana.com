export const hex2rgba = (hex: string, alpha = 1) => {
  const match6 = hex?.length === 6 || hex?.length === 7 ? hex.match(/\w\w/g) : false
  const match3 = hex?.length === 3 || hex?.length === 4 ? hex.match(/\w/g) : false

  if (match6) {
    const [r, g, b] = match6.map((x) => parseInt(x, 16))
    return `rgba(${r},${g},${b},${alpha})`
  }

  if (match3) {
    const [r, g, b] = match3.map((x) => parseInt(`${x}${x}`, 16))
    return `rgba(${r},${g},${b},${alpha})`
  }

  return "rgba(0,0,0,1)"
}
