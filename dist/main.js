"use strict";
function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging();
    console.log("configuration called?");
    aurelia.start().then(() => aurelia.setRoot());
}
exports.configure = configure;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLG1CQUEwQixPQUFnQjtJQUN0QyxPQUFPLENBQUMsR0FBRztTQUNOLHFCQUFxQixFQUFFO1NBQ3ZCLGtCQUFrQixFQUFFLENBQUM7SUFFMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBRXJDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUNsRCxDQUFDO0FBUmUsaUJBQVMsWUFReEIsQ0FBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdXJlbGlhfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGF1cmVsaWE6IEF1cmVsaWEpIHtcclxuICAgIGF1cmVsaWEudXNlXHJcbiAgICAgICAgLnN0YW5kYXJkQ29uZmlndXJhdGlvbigpXHJcbiAgICAgICAgLmRldmVsb3BtZW50TG9nZ2luZygpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiY29uZmlndXJhdGlvbiBjYWxsZWQ/XCIpO1xyXG5cclxuICAgIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=