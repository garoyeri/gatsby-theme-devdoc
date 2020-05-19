# Gatsby Developer Documentation Theme

## Quick Start

```shell
mkdir my-site
cd my-site
yarn init
# install gatsby-theme-devdoc and it's dependencies
yarn add gatsby react react-dom gatsby-theme-devdoc
```

Then add the theme to your `gatsby-config.js`.

```javascript
module.exports = {
  // optionally, set your site metadata to use the default title and description
  siteMetadata: {
    title: "DevDoc",
    description: "Use this site to communicate the details of your API",
    author: "@garoyeri",
  },
  plugins: [
    // include the devdoc theme
    {
      resolve: `gatsby-theme-devdoc`,
      options: {},
    },
    // include the pages and images so that you can load images that are stored in the pages folder
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // optionally, set a plugin manifest for PWA
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-theme-devdoc-example",
        short_name: "DevDoc Example",
        start_url: "/",
        background_color: "#07C",
        theme_color: "#07C",
        display: "browser",
        icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
      },
    },
  ],
};
```

That's it, you can now run your gatsby site using

```shell
yarn gatsby develop
```

Note that this site doesn't _do_ anything, so you're see a missing
resources error. Create a MDX (Markdown) page as `src/pages/index.mdx`, and set the frontmatter title.

```md
---
title: My Developer Page
---

# My Snazzy Developer Documentation Site

```

## Theme Components and Features

This theme has a lot of built-in components that developers tend to use when documenting their code.

### SwaggerUI

[Swagger UI](https://swagger.io/tools/swagger-ui/) is built-in as a React component that you can include in your developer pages.

File: `src/pages/api-example.yml`

```yml
openapi: 3.0.0
info:
  version: 1.0.0
  title: Sample API
  description: A sample API to illustrate OpenAPI concepts
paths:
  /list:
    get:
      description: Returns a list of stuff              
      responses:
        '200':
          description: Successful response
```

File: `src/pages/api.mdx`

```mdx
---
title: Open API
---

import ApiSpec from './api-example.yml'

<SwaggerUI spec={ApiSpec} docExpansion="list" />
```

### Diagrams

The theme uses [Mermaid](https://mermaid-js.github.io/mermaid/#/) to generate rich diagrams using a markdown-ish syntax.

File: `src/pages/diagrams.mdx`

````md
---
title: Open API
---

​```mermaid
graph RL
 subgraph Workspace: Pulse CX Insights
 A(Report:<br />Pulse CX Insights) --> B((Dataset:<br />Pulse CX Insights))
 B --> C{{Dataflow:<br />Pulse Database}}
 B --> E[(Data Source:<br />appFigures)]
 C --> F[(Data Source:<br />Pulse Database)]
 end
```

````

### Mathematical Symbols and Formulas

This doesn't work yet ... but we'll get there.

### Adding Images

For images, just add them to the same folder as the markdown file and link to it normally in the Markdown content.

### Source Code Formatting

[PrismJS](https://prismjs.com/) is included with support for a lot of languages. You can look up the short name for your favorite language and specify it in the backtick set.

### Theming and Styling

This theme uses [ThemeUI](https://theme-ui.com/) to style the components. By default, it uses the `base` preset and makes some customizations. You can override the entire theme by creating a file in your project at `src/gatsby-plugin-theme-ui/index.js` and returning a preset or custom [ThemeUI Theme](https://theme-ui.com/theming).

Using the "shadowing" feature ([more details here](https://www.gatsbyjs.org/docs/themes/shadowing/)), you can also override other components of the DevDoc theme. For example, if you want to add more stuff to the header of the site, create a React component at `src/gatsby-theme-devdoc/components/header-content.js` and it will replace the header content with your own.

## Acknowledgements

Most of this came together from the plugins and documentation on the [GatsbyJS](https://www.gatsbyjs.org/docs/) site. There are a ton of examples and plugins that we're taking advantage of here to build up this easy way to setup developer documentation.

The main structure of the layout and some components for it came directly from the [ThemeUI documentation site](https://github.com/system-ui/theme-ui/tree/v0.3.1/packages/docs) which I thought was super slick and I liked. It's a great example of a lot of cool Gatsby and Theme UI features.
