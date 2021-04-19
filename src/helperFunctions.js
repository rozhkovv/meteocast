export function invertColor (hexTripletColor) {
  let color = hexTripletColor
  color = color.substring(1) // remove #
  color = parseInt(color, 16) // convert to integer
  // eslint-disable-next-line operator-assignment
  color = 0xFFFFFF ^ color // invert three bytes
  color = color.toString(16) // convert to hex
  color = (`000000${color}`).slice(-6) // pad with leading zeros
  color = `#${color}` // prepend #
  return color
}

export default {}
