const avatar = require('../index');

test('generates avatar', () => {
  const a = avatar('hello world');
  // TODO - should fix the tests as this is not valid anymore because the ID's are generated so they will not match
  expect(a).toEqual(`<?xml version="1.0" encoding="UTF-8"?>
<svg  viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="g">
      <stop stop-color="rgb(255, 123, 0)" offset="0%"></stop>
      <stop stop-color="rgb(0, 255, 123)" offset="100%"></stop>
    </linearGradient>
  </defs>
  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <rect id="Rectangle" fill="url(#g)" x="0" y="0" width="80" height="80"></rect>
  </g>
</svg>`);
});

test('generates avatar with size', () => {
  const a = avatar('hello world', 300);

  expect(a.includes('width="300px"')).toBeTruthy();
  expect(a.includes('height="300px"')).toBeTruthy();
});
