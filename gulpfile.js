var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
const minify = require('gulp-minify-css');
const postcss = require('gulp-postcss')


gulp.task("style", () => {
    return gulp.src('script/src/*.scss')
          .pipe(sass())
          .pipe(postcss([ autoprefixer() ]))
          .on("error", sass.logError)
          .pipe(gulp.dest('dist/css'));
});

gulp.task("mini", () => {
	  return gulp.src('dist/css/*.css')
	    	.pipe(minify())
	    	.pipe(gulp.dest('dist/css/minifiles'));
});

gulp.task("test", () => {
    return gulp.watch('script/src/*.scss', gulp.series(['style', 'mini']));
});