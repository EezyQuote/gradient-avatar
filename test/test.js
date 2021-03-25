const { gravatar } = require('../dist/index')

test('generates avatar', () => {
  const a = gravatar('hello world')
  const id = a.match(/id="(\d+)"/)[0].split('"')[1]
  expect(a).toEqual(`<?xml version="1.0" encoding="UTF-8"?>
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="${id}">
      <stop stop-color="rgb(255, 123, 0)" offset="0%"></stop>
      <stop stop-color="rgb(0, 255, 123)" offset="100%"></stop>
    </linearGradient>
  </defs>
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <rect id="Rectangle" fill="url(#${id})" x="0" y="0" width="100%" height="100%"></rect>
  </g>
</svg>`)
})

test('generates avatar with size', () => {
  const a = gravatar('hello world', 300)

  expect(a.includes('width="300px"')).toBeTruthy()
  expect(a.includes('height="300px"')).toBeTruthy()
})
