/*
# The MIT License (MIT)
https://github.com/system-ui/theme-ui

Copyright (c) 2019 Brent Jackson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

/** @jsx jsx */
import { jsx } from 'theme-ui'

const Burger = ({ size = '1em' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentcolor"
    viewBox="0 0 24 24"
    sx={{
      display: 'block',
      margin: 0,
    }}
  >
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
)

export default (props) => (
  <button
    title="Toggle Menu"
    {...props}
    sx={{
      fontFamily: 'inherit',
      fontSize: 24,
      color: 'inherit',
      bg: 'transparent',
      width: 32,
      height: 32,
      p: 1,
      m: 0,
      border: 0,
      appearance: 'none',
      ':focus': {
        outline: '2px solid',
      },
      '@media screen and (min-width: 40em)': {
        display: 'none',
      },
    }}
  >
    <Burger />
  </button>
)
