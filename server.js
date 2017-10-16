'use strict';

//
// Initialize logging framework.
//
var winston = require('winston');
var logger = new(winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            level: 'debug'
        }),

        new (winston.transports.File)({
            filename: 'log-file.log',
            level: 'debug'
        })
    ]
});


//const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);
//const io = require('socket.io')(server);
const pathConfig = require('./path_config');

const port = process.env.PORT || 3000;
const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

if(PRODUCTION){
    logger.info('Running server in production mode.');
} else {
    logger.info('Running server in development mode.');
}

app.use('/', express.static(pathConfig.outDir));

if(DEVELOPMENT){
    const webpack = require('webpack');
    const config = require('./webpack.config.js');
    const DashboardPlugin = require('webpack-dashboard/plugin');
    //const WebpackDevServer = require('webpack-dev-server');

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

    compiler.apply(new DashboardPlugin());

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
