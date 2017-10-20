//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

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
		.pipe(gulp.dest('./dist'))
		.pipe(rename('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist'));
})

gulp.task('default', function() {
	gulp.run('lint', 'scripts');
});