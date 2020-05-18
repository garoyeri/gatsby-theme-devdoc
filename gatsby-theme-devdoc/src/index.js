/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from './components/layout'

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props} children={element} />
)

export { default as Header } from "./components/header"
export { default as SEO } from "./components/seo"
export { default as Layout } from "./components/layout"