module.exports = {
	devtool: "source-map",
	entry: "./index.ts",
	output: {
		filename: "index.js"
	},
	resolve: {
		extensions: [".js", ".ts"]
	},
	module: {
		rules: [{
			test: /\.ts$/,
			loader: "ts-loader"
		}]
	}
};
