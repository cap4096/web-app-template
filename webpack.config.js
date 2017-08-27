const path = require('path');
const pathConfig = require('./path_config');
const webpack = require('webpack');

const DEVELOPMENT = process.env.NODE_ENV === "development";
const PRODUCTION = process.env.NODE_ENV === "production";

const plugins = PRODUCTION ?
      [ new webpack.optimize.UglifyJsPlugin({

	  comments: false,

	  mangle: true,

	  compress: {
	      warnings: true
	  }
      }) ] :
      [] ;

plugins.push(new webpack.DefinePlugin({
    DEVELOPMENT: JSON.stringify(DEVELOPMENT),
    PRODUCTION: JSON.stringify(PRODUCTION)
}));


const cssIdentifier = PRODUCTION ?
      'localIdentName=[hash]' :
      'localIdentName=[path][name]---[local]-[hash]';

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
	loaders: [
	    {
		test: /\.(js|jsx)$/,
		loader: 'babel-loader',
		exclude: /node_modules/,

		// Instead of .babelrc
		options: {
		    babelrc: false,

		    presets: [['es2015', {modules: false}],
			      'stage-0',
			      'react'],

		    plugins: [
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

	    {
		test: /\.(png|gif|jpg|jpeg)$/,
		loader: 'url-loader?limit=10000&name=images/[hash]-[name].[ext]',
		exclude: /node_modules/
	    },

	    {
		test: /\.(css)$/,
		loaders: ['style-loader', 'css-loader?'+cssIdentifier],
		exclude: /node_modules/
	    }


	]
    }
};

console.log(config);

module.exports = config;
