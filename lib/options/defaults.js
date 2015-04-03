module.exports = {
	silent: false,
	files: {
		sketch: 'example/src/icons.sketch',
		dist: 'example/dist/'
	},
	svg: {
		keepSingle: false,
		padding: 0
	},
	css: {
		template: 'example/src/template.css',
		dist: 'dist/icons.css'
	},
	png: false,
	cacheBusting: false,
	clearBeforeGenerate: false
};
