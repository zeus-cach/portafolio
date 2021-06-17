const {src, dest, watch} = require('gulp');
const compileSasss = require('gulp-sass');

compileSasss.compiler = require('node-sass');

const bundleSass = () => {
    return src('./src/sass/**/*.scss')
    .pipe(compileSasss().on('error', compileSasss.logError))
    .pipe(dest('./build/css'));
}

const devWatch = () => {
    watch('./src/sass/**/*.scss', bundleSass);
}

exports.bundleSass = bundleSass;
exports.devWatch = devWatch;