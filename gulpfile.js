var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

//  llena con tu propia información / fill with your own information
// var path = "C:/xampp/htdocs/sitefolder/wp-content/themes/themefolder/";

var path = "C:/xampp/htdocs/example.com/wp-content/themes/mytheme/";
var site = "example.com/"

//
gulp.task('browser-sync', function() {
    
    if(useProxy){
        browserSync({
            proxy: "localhost/" + site,
            notify: false
        });
    }
    
});

// actualiza el navegador / reload the browser 

gulp.task('reload', function(){
    browserSync.reload();
});

// accede a los archivos sass de la carpeta del tema  / read the .sass files in the folder

gulp.task('sass', function() {
     return gulp.src([path + '**.sass',"!" + path + 'assets/css/_*.sass', path + 'assets/css/*.sass'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(path))
        .pipe(browserSync.reload({stream:true}));
    
});


gulp.task('watch', function() {
  gulp.watch(path + 'assets/css/**',['sass']);
  gulp.watch([path + '*.php'],['reload']);
});



gulp.task('default',['index','watch',"browser-sync"]);
