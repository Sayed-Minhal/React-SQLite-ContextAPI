const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
module.exports={
	entry: path.resolve(__dirname,'src/index.js'),
	output:{
		path: path.resolve(__dirname,'build'),
		filename:'bundle.js'
	},
	module: {
	  rules: [
		{
		  test: /\.m?js$/,
		  exclude: /(node_modules|bower_components)/,
		  include: path.resolve(__dirname,'src'),
		  use: {
			loader: 'babel-loader',
			options: {
			  presets: ['@babel/preset-react'],
			  plugins: ["@babel/plugin-proposal-class-properties"]
			}
		  }
		}
	  ]
	},
	devServer: {
		contentBase: path.join(__dirname, 'build'),
		compress: true,
		port: 9000
	},
	plugins: [
		new HtmlWebpackPlugin({"template":path.resolve(__dirname,'src/index.html')})
	  ]
	
}