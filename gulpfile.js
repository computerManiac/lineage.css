const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildCssFiles() {
	return src('lineage/**/*.scss')
		.pipe(sass({
			silenceDeprecations: ['import']
		}))
		.pipe(dest('css'))
}

function watchFile() {
	watch(['lineage/**/*.scss'], buildCssFiles)
}

exports.default = series(buildCssFiles, watchFile);