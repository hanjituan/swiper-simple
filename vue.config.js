const path = require('path')
function resolve(dir) {
	return path.join(__dirname, dir)
}
module.exports = {
	// 修改 src 为 examples
	pages: {
		// lintOnSave: false,
		index: {
			entry: "examples/main.js",
			template: "public/index.html",
			filename: "index.html"
		}
	},
	// 组件样式内联
	css: {
		extract: false
	},
	// 扩展 webpack 配置，使 packages 加入编译
	chainWebpack: config => {
		config.resolve.alias
			.set('@', resolve('examples'))
			.set('~', resolve('packages'))
	}
}
