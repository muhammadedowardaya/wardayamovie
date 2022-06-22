const express = require("express")
const server = express()
// import path from "path"

const isProd = process.env.NODE_ENV === "production"
if (!isProd) {
    const webpack = require("webpack")
    const config = require("./webpack.dev.js")
    const compiler = webpack(config)

    const webpackDevMiddleware = require("webpack-dev-middleware")(compiler, config.devServer)
    const webpackHotMiddleware = require("webpack-hot-middleware")(compiler, config.devServer)

    server.use(webpackDevMiddleware)
    server.use(webpackHotMiddleware)
    console.log("Middleware enable")
}

const staticMiddleware = express.static('dist')
server.use(staticMiddleware)

const PORT = process.env.PORT || 8080
server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})