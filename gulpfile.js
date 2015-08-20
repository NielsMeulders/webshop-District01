var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
minifyCSS = require('gulp-minify-css');

gulp.task('imagemin', function(){
    gulp.src('public/images/*') 
        .pipe(imagemin())
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(gulp.dest('public/images/')); 
});

gulp.task('styles', function() {
 gulp.src('public/stylesheets/css/*.css')
 .pipe(minifyCSS())
 .pipe(gulp.dest('public/stylesheets/css'))
}); 

gulp.task('watch', function(){ 
	gulp.watch('public/stylesheets/css/*.css', ['styles']);
}) 

gulp.task('go',['watch', 'styles', 'imagemin']);