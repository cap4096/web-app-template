const path = require('path');
const outDir='dist';

//const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
	outDir : outDir,
	output: path.resolve(__dirname, outDir),
	publicPath: '/', //PRODUCTION ? '/' : `/${outDir}/`,
	outFilename:  PRODUCTION ? '[hash]-bundle.min.js' : 'bundle.js'
};
