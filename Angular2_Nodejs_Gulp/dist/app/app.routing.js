"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component/home.component');
var createUser_component_1 = require('./createUserComponent/createUser.component');
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'create-user', component: createUser_component_1.CreateUserComponent },
];
exports.routing = router_1.RouterModule.forRoot(routes);

//# sourceMappingURL=app.routing.js.map
