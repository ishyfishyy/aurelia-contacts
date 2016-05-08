System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var App;
    return {
        setters:[],
        execute: function() {
            App = (function () {
                function App() {
                    console.log("App constructor");
                }
                App.prototype.configureRouter = function (config, router) {
                    console.log("geliyomu?");
                    config.title = 'Aurelia - Contacts';
                    config.map([
                        { route: '/', name: '', moduleId: 'no-selection', title: 'Select' },
                        { route: 'contacts', name: 'contacts', moduleId: 'no-selection' },
                        { route: 'contacts/:id', name: 'contacts', moduleId: 'contact-detail' }
                    ]);
                    this.router = router;
                };
                return App;
            }());
            exports_1("App", App);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBRUE7Z0JBR0k7b0JBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO2dCQUVELDZCQUFlLEdBQWYsVUFBZ0IsTUFBMkIsRUFBRSxNQUFjO29CQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUV6QixNQUFNLENBQUMsS0FBSyxHQUFHLG9CQUFvQixDQUFDO29CQUNwQyxNQUFNLENBQUMsR0FBRyxDQUFDO3dCQUNQLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBZSxJQUFJLEVBQUUsRUFBRSxFQUFjLFFBQVEsRUFBRSxjQUFjLEVBQUksS0FBSyxFQUFFLFFBQVEsRUFBQzt3QkFDN0YsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFHLElBQUksRUFBQyxVQUFVLEVBQU8sUUFBUSxFQUFFLGNBQWMsRUFBRTt3QkFDdEUsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFHLElBQUksRUFBQyxVQUFVLEVBQU8sUUFBUSxFQUFFLGdCQUFnQixFQUFFO3FCQUMvRSxDQUFDLENBQUM7b0JBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQ3pCLENBQUM7Z0JBQ0wsVUFBQztZQUFELENBbEJBLEFBa0JDLElBQUE7WUFsQkQscUJBa0JDLENBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3V0ZXIsIFJvdXRlckNvbmZpZ3VyYXRpb259IGZyb20gXCJhdXJlbGlhLXJvdXRlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcbiAgICByb3V0ZXI6IFJvdXRlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkFwcCBjb25zdHJ1Y3RvclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25maWd1cmVSb3V0ZXIoY29uZmlnOiBSb3V0ZXJDb25maWd1cmF0aW9uLCByb3V0ZXI6IFJvdXRlcil7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJnZWxpeW9tdT9cIik7XHJcblxyXG4gICAgICAgIGNvbmZpZy50aXRsZSA9ICdBdXJlbGlhIC0gQ29udGFjdHMnO1xyXG4gICAgICAgIGNvbmZpZy5tYXAoW1xyXG4gICAgICAgICAgICB7IHJvdXRlOiAnLycsICAgICAgICAgICAgICBuYW1lOiAnJywgICAgICAgICAgICAgbW9kdWxlSWQ6ICduby1zZWxlY3Rpb24nLCAgIHRpdGxlOiAnU2VsZWN0J30sXHJcbiAgICAgICAgICAgIHsgcm91dGU6ICdjb250YWN0cycsICBuYW1lOidjb250YWN0cycsICAgICAgbW9kdWxlSWQ6ICduby1zZWxlY3Rpb24nIH0sXHJcbiAgICAgICAgICAgIHsgcm91dGU6ICdjb250YWN0cy86aWQnLCAgbmFtZTonY29udGFjdHMnLCAgICAgIG1vZHVsZUlkOiAnY29udGFjdC1kZXRhaWwnIH1cclxuICAgICAgICBdKTtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
