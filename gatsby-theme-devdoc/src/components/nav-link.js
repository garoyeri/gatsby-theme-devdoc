/*
# The MIT License (MIT)
https://github.com/system-ui/theme-ui

Copyright (c) 2019 Brent Jackson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

/** @jsx jsx */
/* eslint jsx-a11y/anchor-has-content: 0 */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import isAbsoluteURL from 'is-absolute-url'

const styles = {
  variant: 'links.nav',
}

export default ({ href, ...props }) => {
  const isExternal = isAbsoluteURL(href || '')
  if (isExternal) {
    return <a {...props} href={href} sx={styles} />
  }
  const to = props.to || href
  return <Link {...props} to={to} sx={styles} activeClassName="active" />
}
