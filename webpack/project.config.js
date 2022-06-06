/**
 * This holds the custom project configuration.
 *
 * @since 1.0.0
 */
const path = require('path');

module.exports = (dir) => {
	return {
		/**
		 * Source Directory.
		 */
		projectJsPath: 'src/js',
		projectScssPath: 'src/scss',
		projectImagesPath: 'src/images',

		/**
		 * Output Directory.
		 */
		projectOutput: 'assets',

		/**
		 * Package Directory.
		 */
		projectPackageDir: 'dist',

		/**
		 * CSS File name
		 */
		css: ['styles'],

		/**
		 * JS File name
		 */
		js: ['app'],

		/**
		 * Files & folders to be added to zip file.
		 */
		buildIncludes: [
			'assets',
			'index.html',
			path.basename(path.resolve(dir)) + '.php', // plugin slug.php.
		],

		/**
		 * Translation.
		 */
		packageName: 'webpack-configuration',
		textDomain: 'webpack-configuration',
		translationSrc: '**/**/**/*.php',
		translationDirectory: 'languages/webpack-configuration.pot',

		/**
		 * Server.
		 */
		localhost: 'http://sample.local/',
	};
};
