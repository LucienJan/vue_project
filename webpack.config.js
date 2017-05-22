module.exports = {
	devtool:"source-map",
	entry: __dirname + "/entry.js",
	output: {
		path: __dirname + "/public",
		filename:"bundle.js",
	},
	module:{
		loaders:[{
			test:/\.js$/,
			loader:"babel-loader"
		},{
			test:/\.vue$/,
			loader:"vue-loader"
		},{
			test:/\.css$/,
			loader:"style-loader!css-loader"
		},{
			test:/\.(jpg|jpeg|png|gif|bmp)$/,
			loader:"url-loader"
		}]
	},
	devServer:{
		contentBase:"./public",
		//port:54321,
		inline:true
	},
	resolve:{
		alias:{
			vue:'vue/dist/vue.js'
		}
	},
	plugins:[
		//new webpack.optimize.UglifyJsPlugin()
	]
}