var path = require('path');
var gulp = require('gulp');
var ts = require('gulp-typescript');
var runSequence = require('run-sequence');
var del= require('del');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
 var gnf = require('gulp-npm-files');

const tscConfig = require('./client/tsconfig.json');

gulp.task('clean', function(){
	return del('dist');
})
//SERVER
gulp.task('build:server', function () {
	var tsProject = ts.createProject('server/tsconfig.json');
    var tsResult = gulp.src('server/**/*.ts')
		.pipe(sourcemaps.init())
        .pipe(ts(tsProject))
	return tsResult.js
        .pipe(concat('server.js'))
        .pipe(sourcemaps.write()) 
		.pipe(gulp.dest('dist'))
});

//CLIENT

gulp.task('copyNpmDependenciesOnly', function() {
  gulp.src(gnf(), {base:'./'}).pipe(gulp.dest('./dist'));
});

gulp.task('build:index', function(){
   //Let's copy our angular2 template into dist   
    var copyTemplate = gulp.src('client/**/*.html')
        .pipe(gulp.dest('dist'));
     
    //Let's copy our index into dist   
    var copyIndex = gulp.src('client/index.html')
        .pipe(gulp.dest('dist'));
    //copy systemjs into dist
    var copySystemJs = gulp.src('client/systemjs.config.js')
        .pipe(gulp.dest('dist'))
    return [copyTemplate, copyIndex, copySystemJs];
});

gulp.task('build:app', function(){
    return gulp
    .src('client/**/*.ts')
    .pipe(sourcemaps.init())          
    .pipe(ts(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('.'))      
    .pipe(gulp.dest('dist'));
});



gulp.task('build', function(){
	runSequence('clean','build:server','build:index','build:app','copyNpmDependenciesOnly');
})
gulp.task('default',['build']);