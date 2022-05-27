const gulp = require('gulp');
var gulpCopy = require('gulp-copy');
var destination = 'dist/';
sass=require('gulp-sass'),
autoprefixer=require('gulp-autoprefixer');


gulp.task('Inicio', function() {
    console.log('Generando proyecto CV');
  });

  gulp.task('Final', function() {
    console.log('Proyecto CV generado');
  });

gulp.task('copy', function () {
    return gulp.src('.')
        .pipe(gulpCopy('Web.html'))
        .pipe(gulpCopy('cv.css'))
        .pipe(gulp.dest(destination))
     
});
gulp.task('doc', function(){ 
  return gulp.src('./scss/cv.scss')
    .pipe(sass()
    .pipe(gulp.dest('./css')))
  
})
gulp.task('img', function () {
  return gulp.src('.')
      .pipe(gulpCopy('./img/perfi.jpeg'))
      .pipe(gulpCopy('./img/fondo.jpg'))
      .pipe(gulp.dest('./dist/img'))
   
});

