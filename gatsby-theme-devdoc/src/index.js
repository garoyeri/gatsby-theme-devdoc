/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from './components/layout'

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props} children={element} />
)

export { Header } from "./components/header"
export { SEO } from "./components/seo"
export { Layout } from "./components/layout"