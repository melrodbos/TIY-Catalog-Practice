var gulp = require('gulp-sass');

gulp.task('do-something', function(){
  console.log(arguments);
  console.log('I did something');
});

gulp.task('sass', function(){

  // var sass = require('node-sass');
  var sass = require('gulp-sass');

  gulp.src('src/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css/'))
});

gulp.task('build', [ 'sass' ],function(){
  gulp.src([ //gulp.from()
    'src/*', '!src/scss'
  ])
  .pipe(gulp.dest('dist/'));//gulp.into
});
