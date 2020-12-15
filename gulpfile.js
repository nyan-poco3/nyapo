var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function(){
    gulp.src('public')
    .pipe(webserver({
      livereload: true,
      open: true,
      port: 8000
    }));
});

gulp.task('cindex', () => {
  return gulp.src('./public/index.html').pipe(gulp.dest("./"));
});
