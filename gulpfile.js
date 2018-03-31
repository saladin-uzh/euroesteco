var gulp = require("gulp"),
    gutil = require("gulp-util"),
    ftp = require("vinyl-ftp");

gulp.task("deploy", function() {
    var conn = ftp.create({
        host: "joncol00.ftp.tools",
        user: "joncol00_eee",
        password: "f95aji58",
        log: gutil.log
    });

    var globs = [
        "build/*",
        "build/**/*",
        "build/**/**/*",
        "build/**/**/**/*"
    ];

    return gulp.src(globs)
        .pipe(conn.newer("/"))
        .pipe(conn.dest("/"));
});