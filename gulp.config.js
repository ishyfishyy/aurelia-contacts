var appRoot = './src/';
var outputRoot = './dist/';
var stylesRoot = './styles/';

module.exports = {
	root: appRoot,
	source: appRoot + '**/*.ts',
	html: appRoot + '**/*.html',
	scss: stylesRoot + 'scss/' + '**/*.scss',
	mainScss: stylesRoot + 'scss/' + '**/*.scss',
	mainCss: outputRoot,
	output: outputRoot
};