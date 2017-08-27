"use strict";

const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const pathConfig = require('./path_config');

const port = process.env.PORT || 3000;
const DEVELOPMENT = process.env.NODE_ENV === "development";
const PRODUCTION = process.env.NODE_ENV === "production";

if(PRODUCTION){
}
app.use('/', express.static(pathConfig.outDir));

if(DEVELOPMENT){
    const webpack = require('webpack');
    const config = require('./webpack.config.js');
    const WebpackDevServer = require('webpack-dev-server');

    config.entry.client.unshift(
	`webpack-hot-middleware/client?http://localhost:${port}/`);
    config.devServer.contentBase = pathConfig.output;
    config.devServer.inline = true;
    config.devServer.hot = true;
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
    config.plugins.push(new webpack.NoEmitOnErrorsPlugin());

    config.devtool = 'source-map';

    const webpackDevMiddleware = require('webpack-dev-middleware');
    const compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, {
	filename: config.output.filenme,
	publicPath: config.output.publicPath,
	stats: {
	    colors: true
	}
    }));

    app.use(require('webpack-hot-middleware')(compiler));
}

server.listen(port);
