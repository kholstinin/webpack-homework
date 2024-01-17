const crypto = require("node:crypto");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const generateNonce = () => {
	return crypto.randomBytes(16).toString("base64");
};

module.exports = {
	devtool: false,
	mode: "development",
	entry: "./src/app.js",

	plugins: [
		new HtmlWebpackPlugin({
			inject: false,
			template: "./index.html"
		})
	],

	devServer: {
		setupMiddlewares: (middlewares, devServer) => {
			devServer.app.route("/").get((req, res) => {
				const nonce = generateNonce();
				res.setHeader("Content-Security-Policy", `script-src 'nonce-${nonce}'; trusted-types webpack-dev-server#overlay webpack-policy custom-policy; require-trusted-types-for 'script'`);

				const html = devServer.compiler.outputFileSystem.readFileSync("./dist/index.html").toString();
				res.send(html.replaceAll("{NONCE}", nonce));
			});

			return middlewares;
		}
	},

	// ваш конфиг
}
