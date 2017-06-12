module.exports = {
	devtool: "source-map",
	entry: "./index.js",
	output: {
		filename: "index.js"
	},
	resolve: {
		extensions: [".js"]
	},
	module: {
		rules: [{
			enforce: "pre",
			test: /\.js$/,
			loader: "source-map-loader"
		}]
	}
};
