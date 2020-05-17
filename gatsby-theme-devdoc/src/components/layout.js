/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { AccordionNav } from "@theme-ui/sidenav";
import SwaggerUI from "swagger-ui-react";

import Header from "./header";

import Sidebar from "../sidebar.mdx";
const sidebar = {
  wrapper: AccordionNav,
};


const shortcodes = { SwaggerUI };

const Layout = (props) => (
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
        <Header siteTitle={data.site.siteMetadata.title} />
        <Sidebar
          components={sidebar}
          pathname={props.location.pathname}
          sx={{
            width: 256,
            flex: "none",
            px: 3,
            pt: 3,
            pb: 4,
            mt: [64, 0],
          }}
        />
        <div
          style={{
            margin: "0 auto",
            maxWidth: 960,
            padding: "0px 1.0875rem 1.45rem",
            paddingTop: 0,
          }}
        >
          <MDXProvider components={shortcodes}>{props.children}</MDXProvider>
        </div>
      </Styled.root>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
