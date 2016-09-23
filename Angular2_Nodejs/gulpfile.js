var path = require('path');
var gulp = require('gulp');
var ts = require('gulp-typescript');
var runSequence = require('run-sequence');
var del= require('del');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

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
var jsNPMDependencies = [
    'core-js/client/shim.min.js',
    'systemjs/dist/system.src.js',
    'zone.js/dist/zone.js',
    'reflect-metadata/Reflect.js'
] 

gulp.task('build:index', function(){
    var mappedPaths = jsNPMDependencies.map(file => {return path.resolve('node_modules', file)}) 
    
    //Let's copy our head dependencies into a dist/libs
    var copyJsNPMDependencies = gulp.src(mappedPaths, {base:'node_modules'})
        .pipe(gulp.dest('dist/libs'))
     
    //Let's copy our index into dist   
    var copyIndex = gulp.src('client/index.html')
        .pipe(gulp.dest('dist'));
    //copy systemjs into dist
    var copySystemJs = gulp.src('client/systemjs.config.js')
        .pipe(gulp.dest('dist'))
    return [copyJsNPMDependencies, copyIndex, copySystemJs];
});

gulp.task('build:app', function(){
    // var tsProject = ts.createProject('client/tsconfig.json');
    // var tsResult = gulp.src('client/**/*.ts')
	// 	.pipe(sourcemaps.init())
    //     .pipe(ts(tsProject))
	// return tsResult.js
    //     .pipe(sourcemaps.write()) 
	// 	.pipe(gulp.dest('dist'))


    return gulp
    .src('client/**/*.ts')
    .pipe(sourcemaps.init())          // <--- sourcemaps
    .pipe(ts(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('.'))      // <--- sourcemaps
    .pipe(gulp.dest('dist'));
});



gulp.task('build', function(){
	runSequence('clean','build:server','build:index','build:app');
})
gulp.task('default',['build']);