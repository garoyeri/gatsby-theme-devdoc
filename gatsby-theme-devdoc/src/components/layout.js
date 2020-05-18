/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { AccordionNav } from '@theme-ui/sidenav'
import { Flex, Box } from '@theme-ui/components'
import SwaggerUI from 'swagger-ui-react'

import MenuButton from './menu-button'
import NavLink from './nav-link'
import Pagination from './pagination'
import SEO from './seo'

import Sidebar from '../sidebar.mdx'
const sidebar = {
  wrapper: AccordionNav,
  a: NavLink,
}

const shortcodes = { SwaggerUI, SEO }

const Layout = (props) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const nav = useRef(null)

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <Styled.root>
          {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
          <Flex
            sx={{
              flexDirection: 'column',
              minHeight: '100vh',
            }}
          >
            <Flex
              as="header"
              sx={{
                height: 64,
                px: 3,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Flex sx={{ alignItems: 'center' }}>
                <MenuButton
                  onClick={(e) => {
                    setMenuOpen(!menuOpen)
                    if (!nav.current) return
                    const navLink = nav.current.querySelector('a')
                    if (navLink) navLink.focus()
                  }}
                />
                <Link to="/" sx={{ variant: 'links.nav' }}>
                  {data.site.siteMetadata.title}
                </Link>
              </Flex>
            </Flex>
            <Box
              sx={{
                flex: '1 1 auto',
              }}
            >
              <div
                sx={{
                  display: ['block', 'flex'],
                }}
              >
                <div
                  ref={nav}
                  onFocus={(e) => {
                    setMenuOpen(true)
                  }}
                  onBlur={(e) => {
                    setMenuOpen(false)
                  }}
                  onClick={(e) => {
                    setMenuOpen(false)
                  }}
                >
                  <Sidebar
                    open={menuOpen}
                    components={sidebar}
                    pathname={props.location.pathname}
                    sx={{
                      display: [null, 'block'],
                      width: 256,
                      flex: 'none',
                      px: 3,
                      pt: 3,
                      pb: 4,
                      mt: [64, 0],
                    }}
                  />
                </div>
                <main
                  id="content"
                  sx={{
                    width: '100%',
                    minWidth: 0,
                    maxWidth: 1024,
                    mx: 'auto',
                    px: 3,
                  }}
                >
                  <MDXProvider components={shortcodes}>
                    {props.children}
                  </MDXProvider>
                  <Pagination />
                </main>
              </div>
            </Box>
          </Flex>
        </Styled.root>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
