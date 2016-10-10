System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CourseSerivce;
    return {
        setters:[],
        execute: function() {
            CourseSerivce = (function () {
                function CourseSerivce() {
                }
                CourseSerivce.prototype.getCourses = function () {
                    return ["Course1", "Course2", "Course3"];
                };
                return CourseSerivce;
            }());
            exports_1("CourseSerivce", CourseSerivce);
        }
    }
});
//# sourceMappingURL=course.service.js.map