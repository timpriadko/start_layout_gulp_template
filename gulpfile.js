var gulp       	 	 = require('gulp'),
	sass 		 	 = require('gulp-sass'),
	browserSync  	 = require('browser-sync'),
	concat       	 = require('gulp-concat'),
	uglify       	 = require('gulp-uglifyjs'),
	cssnano      	 = require('gulp-cssnano'),
	rename       	 = require('gulp-rename'),
	del          	 = require('del'),
	cache        	 = require('gulp-cache'),
	autoprefixer 	 = require('gulp-autoprefixer'),
	babel        	 = require('gulp-babel');
	sourcemaps 	 	 = require('gulp-sourcemaps');
	imagemin 		 = require('gulp-imagemin');
	pngquant 		 = require('imagemin-pngquant');

gulp.task('sass', function(){
	return gulp.src('app/scss/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(autoprefixer({
            browsers: ['last 25 versions']
        }, { cascade: true }))
		.pipe(cssnano())
		.pipe(rename({suffix: '.min'}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('app/css'))
		// .pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts', function(){
	return gulp.src('app/js/scripts.js')
		.pipe(concat('scripts.min.js'))
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(uglify())
		.pipe(gulp.dest('app/js/'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('libsjs', ['scripts'], function() {
	return gulp.src([
		'app/libs/jquery/jquery-1.11.1.min.js',
		'app/libs/slick/slick.min.js',
	])
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(concat('libs.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('app/js'));
});

gulp.task('libscss', ['sass'], function(){
	return gulp.src([
		'app/libs/slick/slick.css',
		'app/libs/magnific-popup/magnific-popup.css',
	])
		.pipe(concat('libs.min.css'))
		.pipe(cssnano())
		.pipe(gulp.dest('app/css/'))
});

gulp.task('watch', ['browser-sync', 'libscss', 'libsjs'], function() {
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('app/js/**/*.js', ['scripts']);
	gulp.watch('app/*.html', browserSync.reload);
});

gulp.task('clean', function() {
	return del.sync('dist');
});

gulp.task('img', function() {
	return gulp.src('app/img/**/*')
		.pipe(cache(imagemin({
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
		.pipe(gulp.dest('dist/img'));
});

gulp.task('build', ['clean', 'img', 'libscss', 'libsjs'], function() {

	var buildCss = gulp.src([
		'app/css/*.css',
		])
	.pipe(gulp.dest('dist/css'))

	var buildFonts = gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'))

	var buildJs = gulp.src([
		'app/js/libs.min.js',
		'app/js/scripts.min.js',
		])
	.pipe(gulp.dest('dist/js'))

	var buildHtml = gulp.src('app/*.html')
	.pipe(gulp.dest('dist'));

});

gulp.task('clear', function (callback) {
	return cache.clearAll();
})

gulp.task('default', ['watch']);
