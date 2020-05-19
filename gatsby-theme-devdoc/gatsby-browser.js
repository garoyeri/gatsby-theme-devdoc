require("prismjs/themes/prism.css")
require("prismjs/plugins/command-line/prism-command-line.css")
require("swagger-ui/dist/swagger-ui.css")

const SwaggerUI = require('swagger-ui')
window.SwaggerUI = SwaggerUI;

export { wrapPageElement } from './src'
