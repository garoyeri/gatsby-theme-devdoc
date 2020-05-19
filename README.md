# Developer Documentation Site Theme

If this is the first time you're hearing about Gatsby Themes, go to the [What are Gatsby Themes?](https://www.gatsbyjs.org/docs/themes/what-are-gatsby-themes/) page first and read up a little before coming back. The goal of this theme is to provide a baseline developer documentation site for teams that want to use Markdown to document their APIs and services, and generate a static HTML site to make it available to others.

To use this theme, read the [Quick Start Guide](gatsby-theme-devdoc/README.md) for guidance and instructions. Overriding the theme components is done through [Shadowing in Gatsby Themes](https://www.gatsbyjs.org/docs/themes/shadowing/), and there are a bunch of ways to override the color schemes, typography and stuff through Theme UI.

This theme was inspired by my need to easily generate useful documentation for work projects as well as for personal projects. I like to write a lot and making good documentation goes a long way in helping people use your API or software more easily. Most of this came together from the plugins and documentation on the [GatsbyJS](https://www.gatsbyjs.org/docs/) site. There are a ton of examples and plugins that we're taking advantage of here to build up this easy way to setup developer documentation.

The main structure of the layout and some components for it came directly from the [ThemeUI documentation site](https://github.com/system-ui/theme-ui/tree/v0.3.1/packages/docs) which I thought was super slick and I liked. It's a great example of a lot of cool Gatsby and Theme UI features.

## Getting Started

You'll need to install `yarn` v1.x and have [NodeJS v12+](https://nodejs.org/en/) installed.

```shell
npm install -g yarn
```

After you clone the repository, run this to download the entire Internet into your `node_modules` folder:

```shell
yarn install
```

Then you can get started!

## Yarn Workspace

This repository is a `yarn` workspace that makes it easy to make changes to the base theme and see how it affects the example site. You can use it as well if you want to modify the base theme and publish the example site yourself. Or you can create an entirely separate Gatsby project and reference the theme from npm (see the Quick Start Guide for that).

Read up on [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) to see how this works. There are some useful top level commands that will help you out:

* `yarn install`: install all the necessary dependencies for the workspace (`node_modules`).
* `yarn develop`: run a development environment that watches for changes and recompiles the site. Hosted on http://localhost:8000.
* `yarn build`: build the static site for deployment, the result will be in the `example/public` folder.
* `yarn serve`: after building the static site for deployment, go ahead and serve up that content locally. Hosted on http://localhost:9000.
* `yarn clean`: sometimes the Gatsby cache gets whacked (or otherwise out of sorts). Use this command to wipe it out and the build results to try again. Sometimes when you change the plugins or you're seeing that some files aren't regenerating, `clean` the environment and try again.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)