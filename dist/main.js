System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .developmentLogging();
        console.log("configuration called?");
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports_1("configure", configure);
    return {
        setters:[],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBRUEsbUJBQTBCLE9BQWdCO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHO2FBQ04scUJBQXFCLEVBQUU7YUFDdkIsa0JBQWtCLEVBQUUsQ0FBQztRQUUxQixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFFckMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7SUFDbEQsQ0FBQztJQVJELGlDQVFDLENBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhOiBBdXJlbGlhKSB7XHJcbiAgICBhdXJlbGlhLnVzZVxyXG4gICAgICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxyXG4gICAgICAgIC5kZXZlbG9wbWVudExvZ2dpbmcoKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImNvbmZpZ3VyYXRpb24gY2FsbGVkP1wiKTtcclxuXHJcbiAgICBhdXJlbGlhLnN0YXJ0KCkudGhlbigoKSA9PiBhdXJlbGlhLnNldFJvb3QoKSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
