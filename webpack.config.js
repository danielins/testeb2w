/**
 * Configuração do WebPack
 */

module.exports = {
	entry: './app/App.js',
	output: {
		path: './public',
		filename: 'bundle.js',
		publicPath: './public/'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: '/node_modules/',
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react']
			}
		}, {
			test: /\.scss$/,
			loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
		}, {
			test: /\.png|gif$/,
			loaders: ['file-loader']
		}]
	},
	devServer: {
		port: 4000,
		contentBase: 'public',
		historyApiFallback: true,
	}
}