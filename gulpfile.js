//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCss = require("gulp-minify-css");
var minifyHtml = require("gulp-minify-html");

//定义一个testLess任务（自定义任务名称）

gulp.task('lint',
	function() {
		gulp.src('./views/js/main.js')
			.pipe(jshint())
			.pipe(jshint.reporter('default'));
	});

gulp.task('scripts', function() {
	gulp.src('./views/js/main.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('./views/dist/js'))
		.pipe(rename('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./views/dist/js'));
});

gulp.task('css', function() {
	gulp.src('./views/css/*.css')
		.pipe(concat('all.css'))
		.pipe(gulp.dest('./views/dist/css'))
		.pipe(rename('all.min.css'))
		.pipe(minifyCss())
		.pipe(gulp.dest('./views/dist/css'));
});

gulp.task('img', function() {
	gulp.src('./views/images/*.*')
		.pipe(gulp.dest('./views/dist/images'));
});

gulp.task('html', function() {
	gulp.src('./views/pizza.html')
		.pipe(minifyHtml())
		.pipe(gulp.dest('./views/dist'));
});

gulp.task('default', function() {
	gulp.run('img', 'scripts', 'css', 'html');
});