import hslRgb from 'hsl-rgb'
import hslTriad from 'hsl-triad'
import stringHash from 'string-hash'

function uniqueID() {
  return Math.floor(Math.random() * Date.now())
}

export function generateGradient(str: string) {
  const hash = stringHash(str)
  const colors = hslTriad(hash % 360, 1, 0.5)
  const color1 = hslRgb(colors[0][0], colors[0][1], colors[0][2])
  const color2 = hslRgb(colors[1][0], colors[1][1], colors[1][2])
  const start = `rgb(${color1[0]}, ${color1[1]}, ${color1[2]})`
  const stop = `rgb(${color2[0]}, ${color2[1]}, ${color2[2]})`
  return { start, stop }
}
const units = ['px', 'em', 'rem', '%', 'in', 'pt', 'pc', 'cm', 'mm']

export const gravatar = (str: string, size: number | string = '100%') => {
  const { start, stop } = generateGradient(str)
  const id = uniqueID()
  const parsedSize = units.some((val) => `${size}`.includes(val)) ? size : `${size}px`
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg ${
    size != undefined ? `width="${parsedSize}" height="${parsedSize}"` : ''
  } version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="${id}">
      <stop stop-color="${start}" offset="0%"></stop>
      <stop stop-color="${stop}" offset="100%"></stop>
    </linearGradient>
  </defs>
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <rect id="Rectangle" fill="url(#${id})" x="0" y="0" width="${parsedSize}" height="${parsedSize}"></rect>
  </g>
</svg>`
}
