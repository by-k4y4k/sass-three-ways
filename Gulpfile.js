const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('scss', () =>
  gulp
    .src('./gulp-sass/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(gulp.dest('./dest'))
);

gulp.task('default', gulp.series('scss'));
