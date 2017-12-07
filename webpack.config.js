const pathConfig = require('./path_config');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

const plugins = [];


const extractCSS = new ExtractTextPlugin('[contenthash].[name].css.css');
const extractLess = new ExtractTextPlugin('[contenthash].[name].less.css');
const extractSCSS = new ExtractTextPlugin('[contenthash].[name].scss.css');
const extractSASS = new ExtractTextPlugin('[contenthash].[name].sass.css');

plugins.push(new webpack.DefinePlugin({
    DEVELOPMENT: JSON.stringify(DEVELOPMENT),
    PRODUCTION: JSON.stringify(PRODUCTION)
}));

if(PRODUCTION){
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        comments: false,
        mangle: true,
        compress: {
            warnings: true
        }
    }));

    plugins.push(extractCSS);
    plugins.push(extractLess);
    plugins.push(extractSCSS);
    plugins.push(extractSASS);

    plugins.push(new HTMLWebpackPlugin({
        template: 'index-template.html'
    }));
}

if(DEVELOPMENT){
    plugins.push(new HTMLWebpackPlugin({
        template: 'index-template.html'
    }));
}

//
// Setup loaders
//

//-----------------------------------
// Asset loader
//const assetLoader = {
//    test: /\.(png|woff|woff2|eot|ttf|svg|gif|jpg|jpeg)$/,
//   loader: 'url-loader?limit=10000&name=images/[hash]-[name].[ext]'
//exclude: /node_modules/
//};


const pngLoader = {
    test: /\.png$/,
    loader: 'url-loader?limit=100000'
};

const woffLoader = {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader?limit=10000&mimetype=application/font-woff'
};

const assetLoaders = {
    test: /\.(ttf|otf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?|(jpg|gif)$/,
    loader: 'file-loader'
};

//-----------------------------------
// CSS Loader
const cssLoaderProd = extractCSS.extract({
    fallback: 'style-loader',
    use: ['css-loader?localIdentName=localIdentName=[hash]']
});

const cssLoaderDev =
      ['style-loader',
          'css-loader?localIdentName=[path][name]---[local]-[hash]'];

const cssLoader = {
    test: /\.css$/,
    loaders:  PRODUCTION ? cssLoaderProd : cssLoaderDev
    //exclude: /node_modules/
};

//-----------------------------------
// LESS Loader
const lessLoaderProd = extractLess.extract({
    fallback: 'style-loader',
    use: ['css-loader?localIdentName=localIdentName=[hash]', 'less-loader']
});

const lessLoaderDev = [
    'style-loader',
    'css-loader?localIdentName=[path][name]---[local]-[hash]',
    'less-loader'
];

const lessLoader = {
    test: /\.less$/,
    loaders:  PRODUCTION ? lessLoaderProd : lessLoaderDev
    //exclude: /node_modules/
};

const config = {
    entry:{
        client:
  [
      //	    "babel-polyfill",
      './client/index.js'
  ]
    },

    devServer: {
    },

    plugins: plugins,

    output: {
        path:       pathConfig.output,
        publicPath: pathConfig.publicPath,
        filename:   pathConfig.outFilename
    },

    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,

            // Instead of .babelrc
            options: {
                babelrc: false,

                presets: [
                    ['env', {
                        modules: false,
                        targets: {
                            browsers: ["last 2 versions", "ie >=11","safari >9"]
                        }
                    }],

                    'react',
                    'stage-2'
                ],


                plugins: [
                    'transform-class-properties',
                    'transform-exponentiation-operator',
                    'transform-async-to-generator',
                    'transform-es2015-unicode-regex',
                    'transform-es2015-typeof-symbol',
                    'transform-es2015-template-literals',
                    'transform-es2015-sticky-regex',
                    'transform-es2015-spread',
                    'transform-es2015-shorthand-properties',
                    'transform-es2015-parameters',
                    'transform-es2015-object-super',
                    'transform-es2015-literals',
                    'transform-es2015-function-name',
                    'transform-es2015-for-of',
                    'transform-es2015-destructuring',
                    'transform-es2015-computed-properties',
                    'transform-es2015-classes',
                    'transform-es2015-block-scoping',
                    'transform-es2015-block-scoped-functions',
                    'transform-es2015-arrow-functions',
                    'check-es2015-constants',
                    'transform-es5-property-mutators',
                    'transform-react-constant-elements',
                    'transform-react-display-name',
                    'transform-react-inline-elements',
                    'transform-react-jsx',
                    'transform-react-jsx-compat',
                    'transform-react-jsx-self',
                    'transform-react-jsx-source'
                ]
            }
        },
        pngLoader,
        woffLoader,
        assetLoaders,
        cssLoader,
        lessLoader]}
};

module.exports = config;
