const path = require('path');
const outDir='dist';

module.exports = {
    outDir : outDir,
    output: path.resolve(__dirname, outDir),
    publicPath: `/${outDir}/`,
    outFilename: 'bundle.js'
};
