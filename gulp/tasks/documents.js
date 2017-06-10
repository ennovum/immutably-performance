const gulp = require('gulp');

const buildconf = require('./../../buildconf.js');
const jobs = {
    watch: require('./../jobs/watch.js')
};

const src = buildconf.path.root + buildconf.dir.src;
const dev = buildconf.path.root + buildconf.dir.dev;
const dist = buildconf.path.root + buildconf.dir.dist;

gulp.task(
    'documents:dev',
    jobs.watch(src + '/*.html', ['documents:dev-build']));

gulp.task(
    'documents:dev-build',
    () => gulp.src(src + '/*.html')
        .pipe(gulp.dest(dev + '/')));
    
gulp.task(
    'documents:build',
    () => gulp.src(src + '/*.html')
        .pipe(gulp.dest(dist + '/')));

