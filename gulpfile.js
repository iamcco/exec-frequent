var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('build', function() {
    gulp.src('./index.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/index.js'));
});
