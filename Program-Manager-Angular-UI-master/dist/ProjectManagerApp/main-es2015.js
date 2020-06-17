(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-task/add-task.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-task/add-task.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <form #f=\"ngForm\">\n        <div class=\"form-group\">\n            <div class=\"row\">\n                <label for=\"projectInput\" class=\"col-md-2 text-middle font-weight-bold\">Project:</label>\n                <input type=\"text\" class=\"col-md-3 form-control form-control-sm\" id=\"projectInput\" name=\"projectInput\"\n                    style=\"background-color:gainsboro\" required readonly ngModel #projectInput=\"ngModel\"\n                    [(ngModel)]=\"searchProjItem\">\n                <button class=\"btn btn-outline-primary btn-sm mx-2\" type=\"button\"\n                    (click)=\"openProjectModal()\">Search</button>\n            </div>\n            <div class=\"row mt-2\">\n                <label for=\"taskInput\" class=\"col-md-2 text-middle font-weight-bold\">Task:</label>\n                <input type=\"text\" class=\"col-md-5 form-control form-control-sm\" id=\"taskInput\" name=\"taskInput\"\n                    style=\"background-color:gainsboro\" ngModel required #taskInput=\"ngModel\"\n                    [(ngModel)]=\"task.taskName\">\n            </div>\n            <div class=\"row mt-3\">\n                <div class=\"class col-md-2\">\n                </div>\n                <div class=\"checkbox\">\n                    <input type=\"checkbox\" class=\"mx-1\" name=\"parentcbox\" [(ngModel)]=\"parentcbox\"\n                        (click)=\"clickPTaskCBox()\">Parent Task\n                </div>\n            </div>\n            <div *ngIf=\"!parentcbox\">\n                <div class=\"row mt-2\">\n                    <label for=\"priority\" class=\"col-md-2 font-weight-bold\">Priority:</label>\n                    <div class=\"col-md-9\" id=\"priority_range\">\n                        <span>1</span>\n                        <input id=\"priority\" class=\"custom-range col-md-5 mx-2\" step=\"1\" name=\"priority\" type=\"range\"\n                            value=\"1\" ngModel #priority=\"ngModel\" min=\"1\" max=\"30\" oninput [(ngModel)]=\"task.priority\">\n                        <span>30</span>\n                        <p class=\"text-secondary font-weight-bold\">Selected Priority: {{task.priority}}</p>\n                    </div>\n                </div>\n                <div class=\"row mt-2\">\n                    <label for=\"parentTask\" class=\"col-md-2 text-middle font-weight-bold\">Parent Task:</label>\n                    <input type=\"text\" class=\"col-md-3 form-control form-control-sm\" id=\"parentTask\" name=\"parentTask\"\n                        style=\"background-color:gainsboro\" ngModel #parentTask=\"ngModel\" readonly [(ngModel)]=\"searchPTaskItem\">\n                    <button class=\"btn btn-outline-primary mx-2 btn-sm\" type=\"button\"\n                        (click)=\"openParentTaskModal()\">Search</button>\n                </div>\n                <div class=\"row mt-3\">\n                    <div class=\"col-md-2 font-weight-bold\">Start Date:</div>\n                    <div>\n                        <input type=\"date\" class=\"form-control\" id=\"startDate\" name=\"startDate\"\n                            style=\"background-color:gainsboro\" (change)=\"onDateChange()\" required placeholder=\"Start Date\" [(ngModel)]=\"task.startDate\">\n                    </div>\n                    <div class=\"col-md-1 text-right font-weight-bold\">End Date:</div>\n                    <div>\n                        <input type=\"date\" class=\"form-control\" id=\"endDate\" name=\"endDate\"\n                            style=\"background-color:gainsboro\" required (change)=\"onDateChange()\" placeholder=\"End Date\" [(ngModel)]=\"task.endDate\">\n                    </div>\n                    <span class=\"help-block text-danger text-center ml-2\" *ngIf=\"!datesValid\">Start Date cannot be after End Date</span>\n                </div>\n            </div>\n            <div class=\"row mt-2\">\n                <label for=\"user\" class=\"col-md-2 text-middle font-weight-bold\">User:</label>\n                <input type=\"text\" class=\"col-md-3 form-control form-control-sm\" id=\"user\" name=\"user\"\n                    style=\"background-color:gainsboro\" required ngModel #user=\"ngModel\"\n                    [(ngModel)]=searchUserItem readonly>\n                <button class=\"btn btn-outline-primary btn-sm mx-2\" type=\"button\"\n                    (click)=\"openUserModal()\">Search</button>\n            </div>\n            <div class=\"row mt-2\">\n                <div class=\"col-md-5\"><span class=\"text-success font-weight-bold\"\n                        *ngIf=\"successMessage\">{{successMessage}}</span><span class=\"text-danger font-weight-bold\"\n                        *ngIf=\"failureMessage\">{{failureMessage}}</span></div>\n                <button class=\"btn btn-success mr-2 col-md-1\" type=\"submit\" [disabled]=\"!f.valid || !datesValid\"\n                    (click)=\"onAdd()\">Add</button>\n                <button class=\"btn btn-info col-md-1\" (click)=\"onReset()\">Reset</button>\n                <div class=\"col-md-5\"></div>\n            </div>\n        </div>\n    </form>\n\n    <div class=\"modal\" id=\"projectSearch\" [ngStyle]=\"{'display':displayProjectModal}\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\">Project Search</h5>\n                </div>\n                <div class=\"modal-body\">\n                    <form>\n                        <p>Please select anyone of the project below</p>\n                        <div class=\"form-group\">\n                            <input type=\"text\" placeholder=\"Search...\" class=\"col-md-9 form-control\" id=\"searchProjItem\"\n                                name=\"searchProjItem\" style=\"background-color:gainsboro\" [(ngModel)]=\"searchProjItem\">\n                        </div>\n                        <div class=\"list-group\">\n                            <li class=\"list-group-item\"\n                                *ngFor=\"let project of retrievedProjects | filterProject:searchProjItem:'projName'\">\n                                <a href=\"#\" (click)=\"selectedProject(project, $event)\">{{project.projName}}</a>\n                            </li>\n                        </div>\n                    </form>\n                </div>\n                <div>\n                    <p>\n                        <span class=\"text-left text-primary font-weight-bold ml-4\">Selected Project Name:\n                        </span>{{project.projName}}\n                    </p>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"selectProjModal()\" data-dismiss=\"modal\"\n                        [disabled]=\"!project.projName\">Select</button>\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"closeProjectModal()\"\n                        data-dismiss=\"modal\">Close</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"modal\" id=\"userSearch\" [ngStyle]=\"{'display':displayUserModal}\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\">User Search</h5>\n                </div>\n                <div class=\"modal-body\">\n                    <form>\n                        <p>Please select anyone of the user below</p>\n                        <div class=\"form-group\">\n                            <input type=\"text\" placeholder=\"Search...\" class=\"col-md-9 form-control\" id=\"searchUserItem\"\n                                name=\"searchUserItem\" style=\"background-color:gainsboro\" [(ngModel)]=\"searchUserItem\">\n                        </div>\n                        <div class=\"list-group\">\n                            <li class=\"list-group-item\"\n                                *ngFor=\"let user of retrievedUsers | filterUser:searchUserItem:'fName':'lName'\">\n                                <a href=\"#\" (click)=\"selectedUser(user, $event)\">{{user.fName}} {{user.lName}}</a>\n                            </li>\n                        </div>\n                    </form>\n                </div>\n                <div>\n                    <p>\n                        <span class=\"text-left text-primary font-weight-bold ml-4\">Selected User Name:\n                        </span>{{userSelected.fName}} {{userSelected.lName}}\n                    </p>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"selectUserModal()\" data-dismiss=\"modal\"\n                        [disabled]=\"!userSelected.fName\">Select</button>\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"closeUserModal()\"\n                        data-dismiss=\"modal\">Close</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"modal\" id=\"pTaskSearch\" [ngStyle]=\"{'display':displayPTaskModal}\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\">Parent Task Search</h5>\n                </div>\n                <div class=\"modal-body\">\n                    <form>\n                        <p>Please select anyone of the task below</p>\n                        <div class=\"form-group\">\n                            <input type=\"text\" placeholder=\"Search...\" class=\"col-md-9 form-control\" id=\"searchPTaskItem\"\n                                name=\"searchPTaskItem\" style=\"background-color:gainsboro\" [(ngModel)]=\"searchPTaskItem\">\n                        </div>\n                        <div class=\"list-group\">\n                            <li class=\"list-group-item\"\n                                *ngFor=\"let pTask of retrievedPTasks | filterPTask:searchPTaskItem:'taskName'\">\n                                <a href=\"#\" (click)=\"selectedPTask(pTask, $event)\">{{pTask.taskName}}</a>\n                            </li>\n                        </div>\n                    </form>\n                </div>\n                <div>\n                    <p>\n                        <span class=\"text-left text-primary font-weight-bold ml-4\">Selected Parent Task Name:\n                        </span>{{pTaskSelected.taskName}}\n                    </p>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"selectPTaskModal()\" data-dismiss=\"modal\"\n                        [disabled]=\"!pTaskSelected.taskName\">Select</button>\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"closePTaskModal()\"\n                        data-dismiss=\"modal\">Close</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-task/edit-task.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-task/edit-task.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <form #f=\"ngForm\">\n        <div class=\"form-group\">\n            <div class=\"row\">\n                <label for=\"projectInput\" class=\"col-md-2 text-middle font-weight-bold\">Project:</label>\n                <input type=\"text\" class=\"col-md-3 form-control form-control-sm\" id=\"projectInput\" name=\"projectInput\"\n                    style=\"background-color:gainsboro\" readonly ngModel #projectInput=\"ngModel\"\n                    [(ngModel)]=\"searchProjItem\">\n            </div>\n            <div class=\"row mt-2\">\n                <label for=\"taskInput\" class=\"col-md-2 text-middle font-weight-bold\">Task:</label>\n                <input type=\"text\" class=\"col-md-5 form-control form-control-sm\" id=\"taskInput\" name=\"taskInput\"\n                    style=\"background-color:gainsboro\" ngModel required #taskInput=\"ngModel\"\n                    [(ngModel)]=\"task.taskName\">\n            </div>\n            <div>\n                <div class=\"row mt-2\">\n                    <label for=\"priority\" class=\"col-md-2 font-weight-bold\">Priority:</label>\n                    <div class=\"col-md-9\" id=\"priority_range\">\n                        <span>1</span>\n                        <input id=\"priority\" class=\"custom-range col-md-5 mx-2\" step=\"1\" name=\"priority\" type=\"range\"\n                            value=\"1\" ngModel #priority=\"ngModel\" min=\"1\" max=\"30\" required oninput\n                            [(ngModel)]=\"task.priority\">\n                        <span>30</span>\n                        <p class=\"text-secondary font-weight-bold\">Selected Priority: {{task.priority}}</p>\n                    </div>\n                </div>\n                <div class=\"row mt-2\">\n                    <label for=\"parentTask\" class=\"col-md-2 text-middle font-weight-bold\">Parent Task:</label>\n                    <input type=\"text\" class=\"col-md-3 form-control form-control-sm\" id=\"parentTask\" name=\"parentTask\"\n                        style=\"background-color:gainsboro\" ngModel #parentTask=\"ngModel\" readonly\n                        [(ngModel)]=\"searchPTaskItem\">\n                    <button class=\"btn btn-outline-primary mx-2 btn-sm\" type=\"button\"\n                        (click)=\"openParentTaskModal()\">Search</button>\n                </div>\n                <div class=\"row mt-3\">\n                    <div class=\"col-md-2 font-weight-bold\">Start Date:</div>\n                    <div>\n                        <input type=\"date\" class=\"form-control\" id=\"startDate\" name=\"startDate\"\n                            style=\"background-color:gainsboro\" (change)=\"onDateChange()\" required\n                            placeholder=\"Start Date\" [(ngModel)]=\"task.startDate\">\n                    </div>\n                    <div class=\"col-md-1 text-right font-weight-bold\">End Date:</div>\n                    <div>\n                        <input type=\"date\" class=\"form-control\" id=\"endDate\" name=\"endDate\"\n                            style=\"background-color:gainsboro\" required (change)=\"onDateChange()\" placeholder=\"End Date\"\n                            [(ngModel)]=\"task.endDate\">\n                    </div>\n                    <span class=\"help-block text-danger text-center ml-2\" *ngIf=\"!datesValid\">Start Date cannot be after\n                        End Date</span>\n                </div>\n            </div>\n            <div class=\"row mt-2\">\n                <label for=\"user\" class=\"col-md-2 text-middle font-weight-bold\">User:</label>\n                <input type=\"text\" class=\"col-md-3 form-control form-control-sm\" id=\"user\" name=\"user\"\n                    style=\"background-color:gainsboro\" required ngModel #user=\"ngModel\" [(ngModel)]=searchUserItem\n                    readonly>\n            </div>\n            <div class=\"row mt-2\">\n                <span class=\"text-secondary font-weight-bold\" *ngIf=\"status\">{{status}}</span>\n                <div class=\"col-md-5\"><span class=\"text-success font-weight-bold\"\n                        *ngIf=\"successMessage\">{{successMessage}}</span><span class=\"text-danger font-weight-bold\"\n                        *ngIf=\"failureMessage\">{{failureMessage}}</span></div>\n                <button class=\"btn btn-success mr-2 col-md-1\" type=\"submit\" [disabled]=\"!f.valid || !datesValid\"\n                    (click)=\"onUpdate()\">Update</button>\n                <button class=\"btn btn-info col-md-1\" routerLink=\"/tasks\">Cancel</button>\n                <div class=\"col-md-5\"></div>\n            </div>\n        </div>\n    </form>\n\n    <div class=\"modal\" id=\"pTaskSearch\" [ngStyle]=\"{'display':displayPTaskModal}\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\">Parent Task Search</h5>\n                </div>\n                <div class=\"modal-body\">\n                    <form>\n                        <p>Please select anyone of the task below</p>\n                        <div class=\"form-group\">\n                            <input type=\"text\" placeholder=\"Search...\" class=\"col-md-9 form-control\"\n                                id=\"searchPTaskItem\" name=\"searchPTaskItem\" style=\"background-color:gainsboro\"\n                                [(ngModel)]=\"searchPTaskItem\">\n                        </div>\n                        <div class=\"list-group\">\n                            <li class=\"list-group-item\"\n                                *ngFor=\"let pTask of retrievedPTasks | filterPTask:searchPTaskItem:'taskName'\">\n                                <a href=\"#\" (click)=\"selectedPTask(pTask, $event)\">{{pTask.taskName}}</a>\n                            </li>\n                        </div>\n                    </form>\n                </div>\n                <div>\n                    <p>\n                        <span class=\"text-left text-primary font-weight-bold ml-4\">Selected Parent Task Name:\n                        </span>{{pTaskSelected.taskName}}\n                    </p>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"selectPTaskModal()\" data-dismiss=\"modal\"\n                        [disabled]=\"!pTaskSelected.taskName\">Select</button>\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"closePTaskModal()\"\n                        data-dismiss=\"modal\">Close</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid p-0\">\n    <nav class=\"navbar navbar-expand-sm navbar-dark mb-5\" style=\"background-color: darkblue;\">\n        <a class=\"navbar-brand mr-5\"><b>Project Manager App</b></a>\n        <ul class=\"nav nav-tabs\">\n            <li role=\"presentation\" routerLinkActive=\"active\">\n                <a class=\"nav-link text-white mr-4\" routerLink=\"/users\">Add User</a>\n            </li>\n            <li role=\"presentation\" routerLinkActive=\"active\">\n                <a class=\"nav-link text-white mr-4\" routerLink=\"/projects\">Add Project</a>\n            </li>\n            <li role=\"presentation\" routerLinkActive=\"active\">\n                <a class=\"nav-link text-white mr-4\" routerLink=\"/addTask\">Add Task</a>\n            </li>\n            <li role=\"presentation\" routerLinkActive=\"active\">\n                <a class=\"nav-link text-white\" routerLink=\"/tasks\">View Task</a>\n            </li>\n        </ul>\n    </nav>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n        <div class=\"form-group\">\n            <div class=\"row\">\n                <label for=\"projName\" class=\"col-md-2 text-middle font-weight-bold\">Project Name:</label>\n                <input type=\"text\" class=\"col-md-5 form-control form-control-sm\" id=\"projName\" name=\"projName\"\n                    style=\"background-color:gainsboro\" ngModel required #projName=\"ngModel\"\n                    [(ngModel)]=\"project.projName\">\n                <span class=\"help-block text-danger text-center ml-2\" *ngIf=\"!projName.valid && projName.touched\">Please\n                    provide Project name</span>\n            </div>\n            <div class=\"row mt-3\">\n                <div class=\"col-md-2\"></div>\n                <div class=\"checkbox\">\n                    <input type=\"checkbox\" class=\"mx-1\" name=\"setDate\" [(ngModel)]=\"enableDate\" (click)=\"setDates()\">Set\n                    Start and End Date\n                </div>\n                <div class=\"col-md-2\">\n                    <input [type]=\"dateType\" [disabled]=\"datesDisabled\" class=\"form-control\" id=\"startDate\"\n                        name=\"startDate\" [readonly]=\"notAllowDates\" (change)=\"onDateChange()\"\n                        style=\"background-color:gainsboro\" [(ngModel)]=\"project.startDate\" required\n                        placeholder=\"Start Date\">\n                </div>\n                <div class=\"col-md-2\">\n                    <input [type]=\"dateType\" [disabled]=\"datesDisabled\" class=\"form-control\" id=\"endDate\" name=\"endDate\"\n                        style=\"background-color:gainsboro\" (change)=\"onDateChange()\" [readonly]=\"notAllowDates\"\n                        [(ngModel)]=\"project.endDate\" required placeholder=\"End Date\">\n                </div>\n                <span class=\"help-block text-danger text-center ml-2\" *ngIf=\"!datesValid\">Start Date cannot be after End\n                    Date</span>\n            </div>\n            <div class=\"row mt-3\">\n                <label for=\"priority\" class=\"col-md-2 font-weight-bold\">Priority:</label>\n                <div class=\"col-md-9\" id=\"priority_range\">\n                    <span>1</span>\n                    <input id=\"priority\" class=\"custom-range col-md-5 mx-2\" step=\"1\" name=\"priority\" type=\"range\"\n                        value=\"1\" ngModel required #priority=\"ngModel\" [(ngModel)]=\"project.priority\" min=\"1\" max=\"30\"\n                        oninput>\n                    <span>30</span>\n                    <p class=\"text-secondary font-weight-bold\">Selected Priority: {{project.priority}}</p>\n                </div>\n            </div>\n            <div class=\"row mt-2\">\n                <label for=\"manager\" class=\"col-md-2 text-middle font-weight-bold\">Manager:</label>\n                <input type=\"text\" class=\"col-md-3 form-control form-control-sm\" id=\"manager\" name=\"manager\"\n                    style=\"background-color:gainsboro\" ngModel readonly required #manager=\"ngModel\"\n                    [(ngModel)]=searchItem>\n                <button class=\"btn btn-outline-primary mx-2\" type=\"button\" (click)=\"openModal()\">Search</button>\n                <span class=\"help-block text-danger text-center ml-2\" *ngIf=\"!manager.valid && manager.touched\">Please\n                    provide manager</span>\n            </div>\n            <div class=\"row mt-2\">\n                <div class=\"col-md-5\"><span class=\"text-success font-weight-bold\"\n                        *ngIf=\"successMessage\">{{successMessage}}</span><span class=\"text-danger font-weight-bold\"\n                        *ngIf=\"failureMessage\">{{failureMessage}}</span></div>\n                <button class=\"btn btn-success mr-2 col-md-1 mb-1\" type=\"submit\" [disabled]=\"!(f.valid && datesValid)\"\n                    [ngStyle]=\"{'display':display}\" (click)=\"onAdd()\">Add</button>\n                <button class=\"btn btn-info col-md-1\" (click)=\"onReset()\" [ngStyle]=\"{'display':display}\">Reset</button>\n                <button class=\"btn btn-info col-md-1\" (click)=\"onUpdate()\" [ngStyle]=\"{'display':displayUpdate}\"\n                    [disabled]=\"!(f.valid && datesValid)\">Update</button>\n                <div class=\"col-md-5\"></div>\n            </div>\n        </div>\n    </form>\n\n    <hr class=\"style13\" />\n\n    <div class=\"row\">\n        <div class=\"col-md-2 text-center font-weight-bold text-primary\">\n            Sort By:\n        </div>\n        <div class=\"col-md-8\">\n            <button class=\"btn btn-outline-secondary mx-3\" type=\"button\" (click)=\"sortByStartDate()\">\n                Start Date\n            </button>\n            <button class=\"btn btn-outline-secondary mx-3\" type=\"button\" (click)=\"sortByEndDate()\">End Date</button>\n            <button class=\"btn btn-outline-secondary mx-3\" type=\"button\" (click)=\"sortByPriority()\">Priority</button>\n            <button class=\"btn btn-outline-secondary mx-3\" type=\"button\"\n                (click)=\"sortByCompletedTasks()\">Completed</button>\n        </div>\n        <div class=\"col-md-2\"></div>\n    </div>\n\n    <hr class=\"style2\" />\n    <div id=\"userList\" *ngFor=\"let project of retrievedProjects\">\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <div class=\"bg-light\"><b>Project:</b> {{project.projName}}</div>\n                <div class=\"bg-light\"><b>No of Tasks:</b> {{project.noOfTasks}}</div>\n                <div class=\"bg-light\"><b>Start Date:</b> {{project.startDate}}</div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"bg-light\"> </div>\n                <br>\n                <div class=\"bg-light\"><b>Completed:</b> {{project.noOfCompTasks}}</div>\n                <div class=\"bg-light\"><b>End Date:</b> {{project.endDate}}</div>\n            </div>\n            <div class=\"col-md-2\">\n                <div class=\"bg-light\"> </div>\n                <br>\n                <div class=\"bg-light text-center\"><b>Priority</b></div>\n                <div class=\"bg-light text-center\">{{project.priority}}</div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"row\">\n                    <button class=\"btn btn-warning col-md-4 mb-1\" type=\"button\"\n                        (click)=\"onEditProject(project)\">Update</button>\n                </div>\n                <div class=\"row\">\n                    <button class=\"btn btn-danger col-md-4\" type=\"button\" (click)=\"onSuspend(project)\">Suspend</button>\n                </div>\n            </div>\n        </div>\n        <hr class=\"style2\" />\n    </div>\n\n    <div class=\"modal\" id=\"userSearch\" [ngStyle]=\"{'display':displayModal}\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\">User Search</h5>\n                </div>\n                <div class=\"modal-body\">\n                    <form>\n                        <p>Please select anyone of the user below</p>\n                        <div class=\"form-group\">\n                            <input type=\"text\" placeholder=\"Search...\" class=\"col-md-9 form-control\" id=\"searchItem\"\n                                name=\"searchItem\" style=\"background-color:gainsboro\" [(ngModel)]=\"searchItem\">\n                        </div>\n                        <div class=\"list-group\">\n                            <li class=\"list-group-item\"\n                                *ngFor=\"let user of retrievedUsers | filterUser:searchItem:'fName':'lName'\">\n                                <a href=\"#\" (click)=\"selectedUser(user, $event)\">{{user.fName}} {{user.lName}}</a>\n                            </li>\n                        </div>\n                    </form>\n                </div>\n                <div>\n                    <p>\n                        <span class=\"text-left text-primary font-weight-bold ml-4\">Selected User Name:\n                        </span>{{user.fName}} {{user.lName}}\n                    </p>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"select()\" data-dismiss=\"modal\"\n                        [disabled]=\"!user.fName\">Select</button>\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"closeModal()\"\n                        data-dismiss=\"modal\">Close</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tasks/tasks.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tasks/tasks.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"row\">\n        <label for=\"projName\" class=\"text-middle font-weight-bold mx-3\">Project Name:</label>\n        <input type=\"text\" class=\"col-md-2 form-control form-control-sm\" id=\"projName\" name=\"projName\"\n            style=\"background-color:gainsboro\" readonly ngModel required #projName=\"ngModel\" [(ngModel)]=\"searchItem\">\n        <button class=\"btn btn-outline-primary btn-sm mx-2\" type=\"button\" (click)=\"openProjectModal()\">Search</button>\n        <div class=\"col-md-1 text-center font-weight-bold text-primary\">\n            Sort By:\n        </div>\n        <div class=\"col-md-6\">\n            <button class=\"btn btn-outline-secondary mx-1\" type=\"button\" (click)=\"sortByStartDate()\">\n                Start Date\n            </button>\n            <button class=\"btn btn-outline-secondary mx-1\" type=\"button\" (click)=\"sortByEndDate()\">End Date</button>\n            <button class=\"btn btn-outline-secondary mx-1\" type=\"button\" (click)=\"sortByPriority()\">Priority</button>\n        </div>\n    </div>\n    <hr class=\"style13\" />\n    <div class=\"row\">\n        <div class=\"col-lg-12 text-center font-weight-bold\">\n            <span class=\"text-danger font-weight-bold\" *ngIf=\"tasksfailureMessage\">{{tasksfailureMessage}}</span>\n            <span class=\"text-success font-weight-bold\"\n                *ngIf=\"endTasksuccessMessage\">{{endTasksuccessMessage}}</span><span class=\"text-danger font-weight-bold\"\n                *ngIf=\"endTaskfailureMessage\">{{endTaskfailureMessage}}</span>\n        </div>\n    </div>\n    <div id=\"taskList\" *ngFor=\"let task of retrievedTasks\">\n        <div class=\"row\">\n            <div class=\"col-md-2 text-center\"><span class=\"font-weight-bold\">Task</span><br><span\n                    class=\"bg-light\">{{task.taskName}}</span></div>\n            <div class=\"col-md-2 text-center\"><span class=\"font-weight-bold\">Parent</span><br>\n                <span class=\"bg-light\" *ngIf=\"task.parentTaskID === 0\">This Task has no Parent Task</span>\n                <span class=\"bg-light\" *ngIf=\"task.parentTaskID != 0\">Parent Task {{task.parentTaskID}}</span>\n\n            </div>\n            <div class=\"col-md-1 text-center\"><span class=\"font-weight-bold\">Priority</span><br><span\n                    class=\"bg-light\">{{task.priority}}</span>\n            </div>\n            <div class=\"col-md-1 text-center\"><span class=\"font-weight-bold\">Start Date</span><br><span\n                    class=\"bg-light\">{{task.startDate}}</span></div>\n            <div class=\"col-md-1 text-center\"><span class=\"font-weight-bold\">End Date</span><br><span\n                    class=\"bg-light\">{{task.endDate}}</span></div>\n            <div class=\"col-md-4\">\n                <button class=\"btn btn-warning col-md-4 my-1\" type=\"button\" *ngIf=\"task.status === 0\" routerLink=\"/editTask/{{task.taskID}}/{{task.userID}}/{{task.projID}}/{{task.parentTaskID}}\">Edit</button>\n                <br>\n                <button class=\"btn btn-danger col-md-4 my-1\" type=\"button\" *ngIf=\"task.status === 0\"\n                    (click)=\"onEndTask(task)\">End Task</button>\n            </div>\n            <br>\n        </div>\n        <hr class=\"style13\" />\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-lg-12 text-center font-weight-bold\">\n            <span class=\"text-success font-weight-bold\"\n                *ngIf=\"endPTasksuccessMessage\">{{endPTasksuccessMessage}}</span><span\n                class=\"text-danger font-weight-bold\" *ngIf=\"endPTaskfailureMessage\">{{endPTaskfailureMessage}}</span>\n        </div>\n    </div>\n    <div id=\"taskList\" *ngFor=\"let ptask of retrievedPTasks\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 text-info text-center font-weight-bold\">\n                PARENT TASKS\n            </div>\n        </div>\n        <br>\n        <div class=\"row\">\n            <div class=\"col-md-2 text-center\"><span class=\"font-weight-bold\">Task</span><br><span\n                    class=\"bg-light\">{{ptask.taskName}}</span></div>\n            <div class=\"col-md-2 text-center\"><span class=\"font-weight-bold\">Parent</span><br>\n                <span class=\"bg-light\">This task is a Parent Task</span>\n            </div>\n            <div class=\"col-md-1 text-center\"><span class=\"font-weight-bold\">Priority</span><br><span\n                    class=\"bg-light\">Parent Task doesn't have priority</span>\n            </div>\n            <div class=\"col-md-1 text-center\"><span class=\"font-weight-bold\">Start Date</span><br><span\n                    class=\"bg-light\">Parent Task doesn't have start date</span></div>\n            <div class=\"col-md-1 text-center\"><span class=\"font-weight-bold\">End Date</span><br><span\n                    class=\"bg-light\">Parent Task doesn't have end date</span></div>\n            <div class=\"col-md-4\">\n                <button class=\"btn btn-danger col-md-4 my-1\" type=\"button\" *ngIf=\"ptask.status === 0\"\n                    (click)=\"onEndPTask(ptask)\">End Task</button>\n            </div>\n            <br>\n        </div>\n        <hr class=\"style6\" />\n    </div>\n\n\n\n    <div class=\"modal\" id=\"projectSearch\" [ngStyle]=\"{'display':display}\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\">Project Search</h5>\n                </div>\n                <div class=\"modal-body\">\n                    <form>\n                        <p>Please select anyone of the project below</p>\n                        <div class=\"form-group\">\n                            <input type=\"text\" placeholder=\"Search...\" class=\"col-md-9 form-control\" id=\"searchItem\"\n                                name=\"searchItem\" style=\"background-color:gainsboro\" [(ngModel)]=\"searchItem\">\n                        </div>\n                        <span class=\"text-danger font-weight-bold\"\n                            *ngIf=\"projectsfailureMessage\">{{projectsfailureMessage}}</span>\n                        <div class=\"list-group\">\n                            <li class=\"list-group-item\"\n                                *ngFor=\"let project of retrievedProjects | filterProject:searchItem:'projName'\">\n                                <a href=\"#\" (click)=\"selectedProject(project, $event)\">{{project.projName}}</a>\n                            </li>\n                        </div>\n                    </form>\n                </div>\n                <div>\n                    <p>\n                        <span class=\"text-left text-primary font-weight-bold ml-4\">Selected Project Name:\n                        </span>{{project.projName}}\n                    </p>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"select()\" data-dismiss=\"modal\"\n                        [disabled]=\"!project.projName\">Select</button>\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"closeModal()\"\n                        data-dismiss=\"modal\">Close</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n        <div class=\"form-group\">\n            <div class=\"row\">\n                <label for=\"fName\" class=\"col-md-2 text-middle\">First Name:</label>\n                <input type=\"text\" class=\"col-md-5 form-control form-control-sm\" id=\"fName\" name=\"fName\"\n                    style=\"background-color:gainsboro\" required ngModel #fName=\"ngModel\" [(ngModel)]=\"user.fName\">\n                <span class=\"help-block text-danger text-center ml-2\" *ngIf=\"!fName.valid && fName.touched\">Please\n                    provide First name</span>\n            </div>\n            <div class=\"row mt-2\">\n                <label for=\"lName\" class=\"col-md-2 text-middle\">Last Name:</label>\n                <input type=\"text\" class=\"col-md-5 form-control form-control-sm\" id=\"lName\" name=\"lName\"\n                    style=\"background-color:gainsboro\" ngModel required #lName=\"ngModel\" [(ngModel)]=\"user.lName\">\n                <span class=\"help-block text-danger text-center ml-2\" *ngIf=\"!lName.valid && lName.touched\">Please\n                    provide Last name</span>\n            </div>\n            <div class=\"row mt-2\">\n                <label for=\"empID\" class=\"col-md-2 text-middle\">Employee ID:</label>\n                <input type=\"text\" class=\"col-md-3 form-control form-control-sm\" id=\"empID\" name=\"empID\"\n                    style=\"background-color:gainsboro\" ngModel required #empID=\"ngModel\" [(ngModel)]=\"user.empID\">\n                <span class=\"help-block text-danger text-center ml-2\" *ngIf=\"!empID.valid && empID.touched\">Please\n                    provide Employee ID</span>\n            </div>\n            <div class=\"row mt-2\">\n                <div class=\"col-md-5\"><span class=\"text-success font-weight-bold\" *ngIf=\"successMessage\">{{successMessage}}</span><span class=\"text-danger font-weight-bold\" *ngIf=\"failureMessage\">{{failureMessage}}</span></div>\n                <button class=\"btn btn-success mr-2 col-md-1 mb-1\" type=\"submit\" [disabled]=\"!f.valid\" [ngStyle]=\"{'display':display}\" (click)=\"onAdd(user)\">Add</button>\n                <button class=\"btn btn-info col-md-1\" (click)=\"onReset()\" [ngStyle]=\"{'display':display}\">Reset</button>\n                <button class=\"btn btn-info col-md-1\" (click)=\"onUpdate(user)\" [ngStyle]=\"{'display':displayUpdate}\">Update</button>\n                <div class=\"col-md-5\"></div>\n            </div>\n        </div>\n    </form>\n\n    <hr class=\"style13\" />\n    <div class=\"row\">\n        <div class=\"col-md-2\">\n            <input type=\"text\" class=\"form-control form-control-sm\" id=\"searchItem\" name=\"searchItem\"\n                    style=\"background-color:gainsboro\" placeholder=\"Search by Name...\" [(ngModel)]=\"searchItem\">\n        </div>\n        <div class=\"col-md-8\">\n            <button class=\"btn btn-outline-secondary mx-3\" type=\"button\" (click)=\"sortByFirstName()\">\n                First Name\n            </button>\n            <button class=\"btn btn-outline-secondary mx-3\" type=\"button\" (click)=\"sortByLastName()\">Last\n                Name</button>\n            <button class=\"btn btn-outline-secondary mx-3\" type=\"button\" (click)=\"sortByEmpId()\">ID</button>\n        </div>\n        <div class=\"col-md-2\"></div>\n    </div>\n    <hr class=\"style2\" />\n    <div id=\"userList\" *ngFor=\"let user of retrievedUsers | filterUser:searchItem:'fName':'lName'\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"bg-light my-1\">{{user.fName}}</div>\n                <div class=\"bg-light my-1\">{{user.lName}}</div>\n                <div class=\"bg-light my-1\">{{user.empID}}</div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"row\">\n                    <button class=\"btn btn-warning col-md-4 mb-1\" type=\"button\" (click)=\"onEditUser(user)\">Edit</button>\n                </div>\n                <div class=\"row\">\n                    <button class=\"btn btn-danger col-md-4\" type=\"button\" (click)=\"onDelete(user)\">Delete</button>\n                </div>\n            </div>\n        </div>\n        <hr class=\"style2\" />\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/add-task/add-task.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-task/add-task.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC10YXNrL2FkZC10YXNrLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/add-task/add-task.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-task/add-task.component.ts ***!
  \************************************************/
/*! exports provided: AddTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskComponent", function() { return AddTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _projects_project_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projects/project.model */ "./src/app/projects/project.model.ts");
/* harmony import */ var _users_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users/user.model */ "./src/app/users/user.model.ts");
/* harmony import */ var _tasks_parentTask_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tasks/parentTask.model */ "./src/app/tasks/parentTask.model.ts");
/* harmony import */ var _projects_project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../projects/project.service */ "./src/app/projects/project.service.ts");
/* harmony import */ var _tasks_task_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tasks/task.model */ "./src/app/tasks/task.model.ts");
/* harmony import */ var _users_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../users/user.service */ "./src/app/users/user.service.ts");
/* harmony import */ var _tasks_task_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tasks/task.service */ "./src/app/tasks/task.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");










let AddTaskComponent = class AddTaskComponent {
    constructor(projectSvc, userSvc, taskSvc, datePipe) {
        this.projectSvc = projectSvc;
        this.userSvc = userSvc;
        this.taskSvc = taskSvc;
        this.datePipe = datePipe;
        this.displayProjectModal = 'none';
        this.displayUserModal = 'none';
        this.displayPTaskModal = 'none';
        this.datesValid = true;
        this.successMessage = '';
        this.failureMessage = '';
        this.user = new _users_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.userSelected = new _users_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.pTaskSelected = new _tasks_parentTask_model__WEBPACK_IMPORTED_MODULE_4__["ParentTask"]();
        this.task = new _tasks_task_model__WEBPACK_IMPORTED_MODULE_6__["Task"]();
        this.project = new _projects_project_model__WEBPACK_IMPORTED_MODULE_2__["Project"]();
        this.retrievedProjects = [];
        this.retrievedUsers = [];
        this.retrievedPTasks = [];
    }
    ngOnInit() {
        this.task.startDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        this.task.endDate = this.datePipe.transform(new Date().setDate(new Date().getDate() + 1), 'yyyy-MM-dd');
    }
    retreiveAllProjects() {
        this.projectSvc.getProjects().subscribe(response => {
            for (const key in response) {
                if (key === 'projects') {
                    this.retrievedProjects = response[key];
                    console.log(this.retrievedProjects);
                }
                else if (key === 'port') {
                    console.log(response[key]);
                }
            }
        });
    }
    retrieveAllUsers() {
        this.userSvc.getUsers().subscribe(response => {
            for (const key in response) {
                if (key === 'users') {
                    this.retrievedUsers = response[key];
                    console.log(this.retrievedUsers);
                }
                else if (key === 'port') {
                    console.log(response[key]);
                }
            }
        });
    }
    retreiveAllPTask() {
        this.taskSvc.getPTasks().subscribe(response => {
            for (const key in response) {
                if (key === 'pTasks') {
                    this.retrievedPTasks = response[key];
                    console.log(this.retrievedPTasks);
                }
                else if (key === 'port') {
                    console.log(response[key]);
                }
            }
        });
    }
    onDateChange() {
        if (this.task.startDate > this.task.endDate) {
            this.datesValid = false;
        }
        else {
            this.datesValid = true;
        }
    }
    clickPTaskCBox() {
        this.parentcbox = !this.parentcbox;
    }
    onReset() {
        this.taskForm.reset();
    }
    onAdd() {
        if (this.parentcbox) {
            const parentTask = new _tasks_parentTask_model__WEBPACK_IMPORTED_MODULE_4__["ParentTask"]();
            parentTask.projID = this.project.projID;
            parentTask.taskName = this.task.taskName;
            parentTask.userID = parseInt(this.userSelected.userID, 10);
            this.addParentTask(parentTask);
        }
        else {
            this.task.parentTaskID = this.pTaskSelected.parentTaskID;
            this.task.userID = parseInt(this.userSelected.userID, 10);
            this.task.projID = this.project.projID;
            console.log(this.task);
            this.addTask(this.task);
        }
    }
    addParentTask(task) {
        this.taskSvc.addParentTask(task).subscribe(resp => {
            this.retreiveAllProjects();
            this.successMessage = 'Parent Task added Successfully !';
        }, error => this.failureMessage = 'Parent Task addition Failed. Try Again Later');
    }
    addTask(task) {
        this.taskSvc.addTask(task).subscribe(resp => {
            this.retreiveAllProjects();
            this.successMessage = 'Task added Successfully !';
        }, error => this.failureMessage = 'Task addition Failed. Try Again Later');
    }
    selectedProject(project, event) {
        event.preventDefault();
        this.searchProjItem = project.projName;
        this.project = project;
        console.log(this.project);
    }
    selectedPTask(task, event) {
        event.preventDefault();
        this.searchPTaskItem = task.taskName;
        this.pTaskSelected = task;
        console.log(this.pTaskSelected);
    }
    selectProjModal() {
        this.displayProjectModal = 'none';
    }
    selectPTaskModal() {
        this.displayPTaskModal = 'none';
    }
    selectUserModal() {
        this.displayUserModal = 'none';
    }
    openProjectModal() {
        this.displayProjectModal = 'block';
        this.searchProjItem = '';
        this.retreiveAllProjects();
    }
    openUserModal() {
        this.displayUserModal = 'block';
        this.searchUserItem = '';
        this.userSelected = new _users_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.retrieveAllUsers();
    }
    openParentTaskModal() {
        this.displayPTaskModal = 'block';
        this.searchPTaskItem = '';
        this.retreiveAllPTask();
    }
    closeProjectModal() {
        this.displayProjectModal = 'none';
    }
    closeUserModal() {
        this.displayUserModal = 'none';
    }
    closePTaskModal() {
        this.displayPTaskModal = 'none';
    }
    selectedUser(user, event) {
        event.preventDefault();
        console.log(user.userID);
        this.userSelected.fName = user.fName;
        this.userSelected.lName = user.lName;
        this.userSelected.userID = user.userID;
        this.searchUserItem = user.fName + ' ' + user.lName;
        console.log(this.userSelected.userID);
    }
};
AddTaskComponent.ctorParameters = () => [
    { type: _projects_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"] },
    { type: _users_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _tasks_task_service__WEBPACK_IMPORTED_MODULE_8__["TaskService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false })
], AddTaskComponent.prototype, "taskForm", void 0);
AddTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-task',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-task.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-task/add-task.component.html")).default,
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-task.component.css */ "./src/app/add-task/add-task.component.css")).default]
    })
], AddTaskComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");
/* harmony import */ var _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-task/add-task.component */ "./src/app/add-task/add-task.component.ts");
/* harmony import */ var _edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-task/edit-task.component */ "./src/app/edit-task/edit-task.component.ts");








const routes = [
    { path: '', component: _users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"] },
    { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"] },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"] },
    { path: 'tasks', component: _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_5__["TasksComponent"] },
    { path: 'addTask', component: _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_6__["AddTaskComponent"] },
    { path: 'editTask/:tid/:uid/:pid/:ptid', component: _edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_7__["EditTaskComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ProjectManagerApp';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");
/* harmony import */ var _projects_project_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projects/project.pipe */ "./src/app/projects/project.pipe.ts");
/* harmony import */ var _users_user_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./users/user.pipe */ "./src/app/users/user.pipe.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-task/add-task.component */ "./src/app/add-task/add-task.component.ts");
/* harmony import */ var _tasks_parentTask_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tasks/parentTask.pipe */ "./src/app/tasks/parentTask.pipe.ts");
/* harmony import */ var _edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./edit-task/edit-task.component */ "./src/app/edit-task/edit-task.component.ts");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
            _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"],
            _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_9__["TasksComponent"],
            _projects_project_pipe__WEBPACK_IMPORTED_MODULE_10__["ProjectPipe"],
            _users_user_pipe__WEBPACK_IMPORTED_MODULE_11__["UserPipe"],
            _tasks_parentTask_pipe__WEBPACK_IMPORTED_MODULE_14__["ParentTaskPipe"],
            _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_13__["AddTaskComponent"],
            _edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_15__["EditTaskComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/edit-task/edit-task.component.css":
/*!***************************************************!*\
  !*** ./src/app/edit-task/edit-task.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtdGFzay9lZGl0LXRhc2suY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/edit-task/edit-task.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-task/edit-task.component.ts ***!
  \**************************************************/
/*! exports provided: EditTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTaskComponent", function() { return EditTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tasks_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tasks/task.service */ "./src/app/tasks/task.service.ts");
/* harmony import */ var _tasks_task_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tasks/task.model */ "./src/app/tasks/task.model.ts");
/* harmony import */ var _projects_project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../projects/project.service */ "./src/app/projects/project.service.ts");
/* harmony import */ var _projects_project_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../projects/project.model */ "./src/app/projects/project.model.ts");
/* harmony import */ var _users_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../users/user.service */ "./src/app/users/user.service.ts");
/* harmony import */ var _users_user_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../users/user.model */ "./src/app/users/user.model.ts");
/* harmony import */ var _tasks_parentTask_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tasks/parentTask.model */ "./src/app/tasks/parentTask.model.ts");










let EditTaskComponent = class EditTaskComponent {
    constructor(route, taskSvc, projectSvc, userSvc) {
        this.route = route;
        this.taskSvc = taskSvc;
        this.projectSvc = projectSvc;
        this.userSvc = userSvc;
        this.retrievesuccessMessage = '';
        this.retrievefailureMessage = '';
        this.task = new _tasks_task_model__WEBPACK_IMPORTED_MODULE_4__["Task"]();
        this.project = new _projects_project_model__WEBPACK_IMPORTED_MODULE_6__["Project"]();
        this.user = new _users_user_model__WEBPACK_IMPORTED_MODULE_8__["User"]();
        this.ptask = new _tasks_parentTask_model__WEBPACK_IMPORTED_MODULE_9__["ParentTask"]();
        this.searchProjItem = '';
        this.displayPTaskModal = 'none';
        this.retrievedPTasks = [];
        this.pTaskSelected = new _tasks_parentTask_model__WEBPACK_IMPORTED_MODULE_9__["ParentTask"]();
        this.searchUserItem = '';
        this.datesValid = true;
        this.status = '';
        this.updateSuccessMessage = '';
        this.updateFailureMessage = '';
        this.searchPTaskItem = '';
    }
    ngOnInit() {
        this.retrieveTask(this.route.snapshot.params['tid']);
        this.retrieveUser(this.route.snapshot.params['uid']);
        this.retrieveProject(this.route.snapshot.params['pid']);
        this.retrievePTask(this.route.snapshot.params['ptid']);
    }
    retrieveTask(tid) {
        this.taskSvc.getTask(tid).subscribe(resp => {
            this.task = resp;
            this.retrievesuccessMessage = 'Task retrieved Successfully !';
        }, error => this.retrievefailureMessage = 'Task retrieval Failed. Try Again Later');
    }
    onDateChange() {
        if (this.task.startDate > this.task.endDate) {
            this.datesValid = false;
        }
        else {
            this.datesValid = true;
        }
    }
    retrievePTask(ptid) {
        this.taskSvc.getPTask(ptid).subscribe(resp => {
            this.ptask = resp;
            console.log('FFDS');
            console.log(resp);
            this.searchPTaskItem = this.ptask.taskName;
            this.retrievesuccessMessage = 'Parent Task retrieved Successfully !';
        }, error => this.retrievefailureMessage = 'Parent Task retrieval Failed. Try Again Later');
    }
    retrieveProject(pid) {
        this.projectSvc.getProject(pid).subscribe(resp => {
            this.project = resp;
            this.searchProjItem = this.project.projName;
            this.retrievesuccessMessage = 'Project retrieved Successfully !';
        }, error => this.retrievefailureMessage = 'Project retrieval Failed. Try Again Later');
    }
    retrieveUser(uid) {
        this.userSvc.getUser(uid).subscribe(resp => {
            this.user = resp;
            this.searchUserItem = this.user.fName + ' ' + this.user.lName;
            this.retrievesuccessMessage = 'User retrieved Successfully !';
        }, error => this.retrievefailureMessage = 'User retrieval Failed. Try Again Later');
    }
    openParentTaskModal() {
        this.displayPTaskModal = 'block';
        this.searchPTaskItem = '';
        this.retreiveAllPTask();
    }
    retreiveAllPTask() {
        this.taskSvc.getPTasks().subscribe(response => {
            for (const key in response) {
                if (key === 'pTasks') {
                    this.retrievedPTasks = response[key];
                    console.log(this.retrievedPTasks);
                }
                else if (key === 'port') {
                    console.log(response[key]);
                }
            }
        });
    }
    selectedPTask(task, event) {
        event.preventDefault();
        this.searchPTaskItem = task.taskName;
        this.pTaskSelected = task;
        this.task.parentTaskID = this.pTaskSelected.parentTaskID;
    }
    selectPTaskModal() {
        this.displayPTaskModal = 'none';
    }
    closePTaskModal() {
        this.displayPTaskModal = 'none';
    }
    onUpdate() {
        if (!this.searchPTaskItem) {
            this.task.parentTaskID = 0;
        }
        this.onUpdateProject(this.task);
    }
    onUpdateProject(task) {
        this.taskSvc.updateTask(task).subscribe(resp => {
            this.status = 'Project updated Successfully !';
        }, error => this.status = 'Project update Failed. Try Again Later');
    }
};
EditTaskComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _tasks_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"] },
    { type: _projects_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"] },
    { type: _users_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
];
EditTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-task',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-task.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-task/edit-task.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-task.component.css */ "./src/app/edit-task/edit-task.component.css")).default]
    })
], EditTaskComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/projects/project.model.ts":
/*!*******************************************!*\
  !*** ./src/app/projects/project.model.ts ***!
  \*******************************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Project {
    constructor() {
        this.priority = 1;
        this.noOfTasks = 0;
        this.noOfCompTasks = 0;
    }
}


/***/ }),

/***/ "./src/app/projects/project.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/projects/project.pipe.ts ***!
  \******************************************/
/*! exports provided: ProjectPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPipe", function() { return ProjectPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProjectPipe = class ProjectPipe {
    transform(value, filterString, propName) {
        if (!value) {
            return [];
        }
        if (!filterString || filterString.trim() === '') {
            return value;
        }
        const resultArray = [];
        for (const item of value) {
            if (item[propName].toLowerCase().includes(filterString.toLowerCase())) {
                resultArray.push(item);
            }
        }
        return resultArray;
    }
};
ProjectPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterProject'
    })
], ProjectPipe);



/***/ }),

/***/ "./src/app/projects/project.service.ts":
/*!*********************************************!*\
  !*** ./src/app/projects/project.service.ts ***!
  \*********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ProjectService = class ProjectService {
    constructor(http) {
        this.http = http;
        this.baseURI = 'http://localhost:8001/project/';
    }
    getProjects() {
        return this.http.get(this.baseURI + 'getprojects');
    }
    deleteProject(projID) {
        console.log('Service User Id - ' + projID);
        return this.http.delete(this.baseURI + 'deleteproject/' + projID);
    }
    updateProject(project) {
        console.log('Service User Id - ' + project);
        return this.http.put(this.baseURI + 'updateproject/' + project.projID, project);
    }
    addProject(project) {
        console.log('Service User Id - ' + project);
        return this.http.post(this.baseURI + 'addproject', project);
    }
    getProject(pid) {
        return this.http.get(this.baseURI + 'getproject/' + pid);
    }
};
ProjectService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProjectService);



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("hr.style13 {\n  height: 10px;\n  border: 0;\n  box-shadow: 0 10px 10px -10px #8c8b8b inset;\n}\n\nhr.style2 {\n  border-top: 3px double #8c8b8b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixTQUFTO0VBQ1QsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhyLnN0eWxlMTMge1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlcjogMDtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDEwcHggLTEwcHggIzhjOGI4YiBpbnNldDtcbn1cblxuaHIuc3R5bGUyIHtcbiAgYm9yZGVyLXRvcDogM3B4IGRvdWJsZSAjOGM4YjhiO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _project_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.model */ "./src/app/projects/project.model.ts");
/* harmony import */ var _users_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users/user.model */ "./src/app/users/user.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project.service */ "./src/app/projects/project.service.ts");
/* harmony import */ var _users_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../users/user.service */ "./src/app/users/user.service.ts");
/* harmony import */ var _tasks_task_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tasks/task.service */ "./src/app/tasks/task.service.ts");








let ProjectsComponent = class ProjectsComponent {
    constructor(datePipe, projectSvc, userSvc, taskSvc) {
        this.datePipe = datePipe;
        this.projectSvc = projectSvc;
        this.userSvc = userSvc;
        this.taskSvc = taskSvc;
        this.notAllowDates = true;
        this.datesValid = true;
        this.user = new _users_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.project = new _project_model__WEBPACK_IMPORTED_MODULE_2__["Project"]();
        this.retrievedUsers = [];
        this.retrievedProjects = [];
        this.display = 'block';
        this.displayUpdate = 'none';
        this.displayModal = 'none';
        this.successMessage = '';
        this.failureMessage = '';
    }
    ngOnInit() {
        this.retreiveAllProjects();
    }
    setDates() {
        this.enableDate = !this.enableDate;
        if (this.enableDate) {
            this.notAllowDates = false;
            this.project.startDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
            this.project.endDate = this.datePipe.transform(new Date().setDate(new Date().getDate() + 1), 'yyyy-MM-dd');
            this.dateType = 'date';
        }
        else {
            this.notAllowDates = true;
            this.project.startDate = '';
            this.project.endDate = '';
            this.dateType = 'text';
        }
    }
    onReset() {
        this.projForm.reset();
        this.dateType = 'text';
    }
    onUpdate(project) {
        this.project.userID = parseInt(this.user.userID, 10);
        this.updateProject(this.project);
        this.onReset();
        this.display = 'block';
        this.displayUpdate = 'none';
    }
    onSubmit() {
    }
    onAdd() {
        this.project.userID = parseInt(this.user.userID, 10);
        console.log(this.project);
        this.addProject(this.project);
    }
    onDateChange() {
        if (this.project.startDate > this.project.endDate) {
            this.datesValid = false;
        }
        else {
            this.datesValid = true;
        }
    }
    selectedUser(user, event) {
        event.preventDefault();
        console.log(user.userID);
        this.user.fName = user.fName;
        this.user.lName = user.lName;
        this.user.userID = user.userID;
        console.log(this.user.userID);
    }
    onSuspend(project) {
        this.deleteProject(project);
    }
    openModal() {
        this.displayModal = 'block';
        this.searchItem = '';
        this.user = new _users_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.retriveAllUsers();
    }
    closeModal() {
        this.displayModal = 'none';
    }
    select() {
        this.searchItem = this.user.fName + ' ' + this.user.lName;
        this.displayModal = 'none';
    }
    onEditProject(project) {
        this.display = 'none';
        this.displayUpdate = 'block';
        this.project.endDate = project.endDate;
        this.project.startDate = project.startDate;
        this.project.projName = project.projName;
        this.project.projID = project.projID;
        this.project.priority = project.priority;
        this.project.userID = project.userID;
    }
    retriveAllUsers() {
        this.userSvc.getUsers().subscribe(response => {
            for (const key in response) {
                if (key === 'users') {
                    this.retrievedUsers = response[key];
                    console.log(this.retrievedUsers);
                }
                else if (key === 'port') {
                    console.log(response[key]);
                }
            }
        });
    }
    sortByPriority() {
        this.retrievedProjects = this.retrievedProjects.sort((a, b) => (a.priority > b.priority) ? 1 : -1);
    }
    sortByCompletedTasks() {
        this.retrievedProjects = this.retrievedProjects.sort((a, b) => (a.noOfCompTasks > b.noOfCompTasks) ? 1 : -1);
    }
    sortByEndDate() {
        this.retrievedProjects = this.retrievedProjects.sort((a, b) => (a.endDate) > (b.endDate) ? 1 : -1);
    }
    sortByStartDate() {
        this.retrievedProjects = this.retrievedProjects.sort((a, b) => (a.startDate > b.startDate) ? 1 : -1);
    }
    retreiveAllProjects() {
        this.projectSvc.getProjects().subscribe(response => {
            for (const key in response) {
                if (key === 'projects') {
                    this.retrievedProjects = response[key];
                    console.log(this.retrievedProjects);
                }
                else if (key === 'port') {
                    console.log(response[key]);
                }
            }
        });
    }
    deleteProject(project) {
        this.projectSvc.deleteProject(project.projID).subscribe(resp => {
            this.retreiveAllProjects();
            this.successMessage = 'Project Deleted Successfully !';
        }, error => this.failureMessage = 'Delete Project Failed. Try Again Later');
    }
    addProject(project) {
        this.projectSvc.addProject(project).subscribe(resp => {
            this.retreiveAllProjects();
            this.successMessage = 'Project added Successfully !';
        }, error => this.failureMessage = 'Project addition Failed. Try Again Later');
    }
    updateProject(project) {
        this.projectSvc.updateProject(project).subscribe(resp => {
            this.retreiveAllProjects();
            this.successMessage = 'Project updated Successfully !';
        }, error => this.failureMessage = 'Project update Failed. Try Again Later');
    }
};
ProjectsComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
    { type: _project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"] },
    { type: _users_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _tasks_task_service__WEBPACK_IMPORTED_MODULE_7__["TaskService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false })
], ProjectsComponent.prototype, "projForm", void 0);
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html")).default,
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")).default]
    })
], ProjectsComponent);



/***/ }),

/***/ "./src/app/tasks/parentTask.model.ts":
/*!*******************************************!*\
  !*** ./src/app/tasks/parentTask.model.ts ***!
  \*******************************************/
/*! exports provided: ParentTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentTask", function() { return ParentTask; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ParentTask {
    constructor() {
        this.status = 0;
    }
}


/***/ }),

/***/ "./src/app/tasks/parentTask.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/tasks/parentTask.pipe.ts ***!
  \******************************************/
/*! exports provided: ParentTaskPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentTaskPipe", function() { return ParentTaskPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ParentTaskPipe = class ParentTaskPipe {
    transform(value, filterString, propName) {
        if (!value) {
            return [];
        }
        if (!filterString || filterString.trim() === '') {
            return value;
        }
        const resultArray = [];
        for (const item of value) {
            if (item[propName].toLowerCase().includes(filterString.toLowerCase())) {
                resultArray.push(item);
            }
        }
        return resultArray;
    }
};
ParentTaskPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterPTask'
    })
], ParentTaskPipe);



/***/ }),

/***/ "./src/app/tasks/task.model.ts":
/*!*************************************!*\
  !*** ./src/app/tasks/task.model.ts ***!
  \*************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Task {
    constructor() {
        this.priority = 1;
        this.status = 0;
    }
}


/***/ }),

/***/ "./src/app/tasks/task.service.ts":
/*!***************************************!*\
  !*** ./src/app/tasks/task.service.ts ***!
  \***************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let TaskService = class TaskService {
    constructor(http) {
        this.http = http;
        this.baseURI = 'http://localhost:8002/task/';
    }
    getPTasks() {
        return this.http.get(this.baseURI + 'getptasks');
    }
    getRelatedTasks(pid) {
        return this.http.get(this.baseURI + 'getalltasks/' + pid);
    }
    getRelatedPTasks(pid) {
        return this.http.get(this.baseURI + 'getallptasks/' + pid);
    }
    endPTask(task) {
        return this.http.put(this.baseURI + 'endptask/' + task.parentTaskID, task);
    }
    endTask(task) {
        return this.http.put(this.baseURI + 'endtask/' + task.taskID, task);
    }
    getTask(tid) {
        return this.http.get(this.baseURI + 'gettask/' + tid);
    }
    getPTask(ptid) {
        return this.http.get(this.baseURI + 'getptask/' + ptid);
    }
    updateTask(task) {
        return this.http.put(this.baseURI + 'updateTask/' + task.taskID, task);
    }
    /*deleteProject(projID: number): any {
        console.log('Service User Id - ' + projID);
        return this.http.delete(this.baseURI + 'deleteproject/' + projID);
    }
    
    updateProject(project: Project): any {
        console.log('Service User Id - ' + project);
        return this.http.put(this.baseURI + 'updateproject/' + project.projID, project);
    }
    
    addProject(project: Project): any {
        console.log('Service User Id - ' + project);
        return this.http.post(this.baseURI + 'addproject', project);
    }*/
    addParentTask(task) {
        return this.http.post(this.baseURI + 'addparenttask', task);
    }
    addTask(task) {
        return this.http.post(this.baseURI + 'addtask', task);
    }
};
TaskService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TaskService);



/***/ }),

/***/ "./src/app/tasks/tasks.component.css":
/*!*******************************************!*\
  !*** ./src/app/tasks/tasks.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("hr.style13 {\n  height: 10px;\n  border: 0;\n  box-shadow: 0 10px 10px -10px #8c8b8b inset;\n}\n\nhr.style2 {\n  border-top: 3px double #8c8b8b;\n}\n\nhr.style6 {\n\tbackground-color: #fff;\n\tborder-top: 2px dotted #8c8b8b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza3MvdGFza3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixTQUFTO0VBQ1QsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLDhCQUE4QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL3Rhc2tzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoci5zdHlsZTEzIHtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXI6IDA7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAxMHB4IC0xMHB4ICM4YzhiOGIgaW5zZXQ7XG59XG5cbmhyLnN0eWxlMiB7XG4gIGJvcmRlci10b3A6IDNweCBkb3VibGUgIzhjOGI4Yjtcbn1cblxuaHIuc3R5bGU2IHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0Ym9yZGVyLXRvcDogMnB4IGRvdHRlZCAjOGM4YjhiO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/tasks/tasks.component.ts":
/*!******************************************!*\
  !*** ./src/app/tasks/tasks.component.ts ***!
  \******************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _users_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users/user.model */ "./src/app/users/user.model.ts");
/* harmony import */ var _projects_project_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projects/project.model */ "./src/app/projects/project.model.ts");
/* harmony import */ var _projects_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../projects/project.service */ "./src/app/projects/project.service.ts");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task.service */ "./src/app/tasks/task.service.ts");






let TasksComponent = class TasksComponent {
    constructor(projectSvc, taskSvc) {
        this.projectSvc = projectSvc;
        this.taskSvc = taskSvc;
        this.display = 'none';
        this.projectsfailureMessage = '';
        this.pTasksfailureMessage = '';
        this.tasksfailureMessage = '';
        this.endPTasksuccessMessage = '';
        this.endPTaskfailureMessage = '';
        this.endTasksuccessMessage = '';
        this.endTaskfailureMessage = '';
        this.retrievedProjects = [];
        this.tasks = [];
        this.retrievedTasks = [];
        this.retrievedPTasks = [];
        this.resultArray = [];
        this.user = new _users_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.project = new _projects_project_model__WEBPACK_IMPORTED_MODULE_3__["Project"]();
    }
    ngOnInit() {
    }
    openProjectModal() {
        this.display = 'block';
        this.searchItem = '';
        this.retreiveAllProjects();
    }
    onEndPTask(task) {
        this.taskSvc.endPTask(task).subscribe(response => {
            this.endPTasksuccessMessage = 'Parent Task ended Successfully !';
            this.select();
        }, error => this.endPTaskfailureMessage = 'Parent Task end Failed. Try Again Later');
    }
    onEndTask(task) {
        this.taskSvc.endTask(task).subscribe(response => {
            this.endTasksuccessMessage = 'Task ended Successfully !';
            console.log(this.endTasksuccessMessage);
            this.select();
        }, error => this.endTaskfailureMessage = 'Tasks end Failed. Try Again Later');
    }
    closeModal() {
        this.display = 'none';
    }
    select() {
        this.searchItem = this.project.projName;
        this.display = 'none';
        this.retrieveRelatedTasks(this.project.projID);
        this.retrieveRelatedPTasks(this.project.projID);
    }
    selectedProject(project, event) {
        event.preventDefault();
        this.project.projName = project.projName;
        this.project.projID = project.projID;
        this.searchItem = project.projName;
    }
    retrieveRelatedTasks(pid) {
        this.taskSvc.getRelatedTasks(pid).subscribe(response => {
            for (const key in response) {
                if (key === 'tasks') {
                    this.retrievedTasks = response[key];
                    console.log(this.retrievedTasks);
                }
                else if (key === 'port') {
                    console.log(response[key]);
                }
            }
        }, error => this.tasksfailureMessage = 'Tasks retrieval Failed. Try Again Later');
    }
    retrieveRelatedPTasks(pid) {
        this.taskSvc.getRelatedPTasks(pid).subscribe(response => {
            for (const key in response) {
                if (key === 'pTasks') {
                    this.retrievedPTasks = response[key];
                    console.log('pTask');
                    console.log(this.retrievedPTasks);
                }
                else if (key === 'port') {
                    console.log(response[key]);
                }
            }
        }, error => this.pTasksfailureMessage = 'Parent Tasks retrieval Failed. Try Again Later');
    }
    sortByPriority() {
        this.retrievedTasks = this.retrievedTasks.sort((a, b) => (a.priority > b.priority) ? 1 : -1);
    }
    sortByEndDate() {
        this.retrievedTasks = this.retrievedTasks.sort((a, b) => (a.endDate) > (b.endDate) ? 1 : -1);
    }
    sortByStartDate() {
        this.retrievedTasks = this.retrievedTasks.sort((a, b) => (a.startDate > b.startDate) ? 1 : -1);
    }
    retreiveAllProjects() {
        this.projectSvc.getProjects().subscribe(response => {
            for (const key in response) {
                if (key === 'projects') {
                    this.retrievedProjects = response[key];
                    console.log(this.retrievedProjects);
                }
                else if (key === 'port') {
                    console.log(response[key]);
                }
            }
        }, error => this.projectsfailureMessage = 'Projects retrieval Failed. Try Again Later');
    }
};
TasksComponent.ctorParameters = () => [
    { type: _projects_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"] },
    { type: _task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"] }
];
TasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tasks',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tasks.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tasks/tasks.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tasks.component.css */ "./src/app/tasks/tasks.component.css")).default]
    })
], TasksComponent);



/***/ }),

/***/ "./src/app/users/user.model.ts":
/*!*************************************!*\
  !*** ./src/app/users/user.model.ts ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/users/user.pipe.ts":
/*!************************************!*\
  !*** ./src/app/users/user.pipe.ts ***!
  \************************************/
/*! exports provided: UserPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPipe", function() { return UserPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserPipe = class UserPipe {
    transform(value, filterString, propName1, propName2) {
        if (!value) {
            return [];
        }
        if (!filterString || filterString.trim() === '') {
            return value;
        }
        const resultArray = [];
        for (const item of value) {
            if (item[propName1].toLowerCase().includes(filterString.toLowerCase()) ||
                item[propName2].toLowerCase().includes(filterString.toLowerCase())) {
                resultArray.push(item);
            }
        }
        return resultArray;
    }
};
UserPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterUser'
    })
], UserPipe);



/***/ }),

/***/ "./src/app/users/user.service.ts":
/*!***************************************!*\
  !*** ./src/app/users/user.service.ts ***!
  \***************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.baseURI = 'http://localhost:8000/user/';
        this.retrievedUsers = [];
    }
    getUsers() {
        return this.http.get(this.baseURI + 'getusers');
    }
    deleteUser(userId) {
        console.log('Service User Id - ' + userId);
        return this.http.delete(this.baseURI + 'deleteuser/' + userId);
    }
    updateUser(user) {
        console.log('Service User Id - ' + user);
        return this.http.put(this.baseURI + 'updateuser/' + user.userID, user);
    }
    addUser(user) {
        console.log('Service User Id - ' + user);
        return this.http.post(this.baseURI + 'adduser', user);
    }
    getUser(uid) {
        return this.http.get(this.baseURI + 'getuser/' + uid);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("hr.style13 {\n  height: 10px;\n  border: 0;\n  box-shadow: 0 10px 10px -10px #8c8b8b inset;\n}\n\nhr.style2 {\n  border-top: 3px double #8c8b8b;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixTQUFTO0VBQ1QsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhyLnN0eWxlMTMge1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlcjogMDtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDEwcHggLTEwcHggIzhjOGI4YiBpbnNldDtcbn1cblxuaHIuc3R5bGUyIHtcbiAgYm9yZGVyLXRvcDogM3B4IGRvdWJsZSAjOGM4YjhiO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.model */ "./src/app/users/user.model.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/users/user.service.ts");




let UsersComponent = class UsersComponent {
    constructor(userSvc) {
        this.userSvc = userSvc;
        this.retrievedUsers = [];
        this.user = new _user_model__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.display = 'block';
        this.displayUpdate = 'none';
        this.successMessage = '';
        this.failureMessage = '';
    }
    ngOnInit() {
        this.retriveAllUsers();
    }
    onEditUser(user) {
        this.user.fName = user.fName;
        this.user.lName = user.lName;
        this.user.empID = user.empID;
        this.user.userID = user.userID;
        this.display = 'none';
        this.displayUpdate = 'block';
    }
    onUpdate(user) {
        this.updateUser(user);
        this.onReset();
        this.display = 'block';
        this.displayUpdate = 'none';
    }
    onAdd(user) {
        this.addUser(user);
        this.onReset();
        this.display = 'block';
        this.displayUpdate = 'none';
    }
    sortByFirstName() {
        this.retrievedUsers = this.retrievedUsers.sort((a, b) => (a.fName > b.fName) ? 1 : -1);
    }
    sortByLastName() {
        this.retrievedUsers = this.retrievedUsers.sort((a, b) => (a.lName > b.lName) ? 1 : -1);
    }
    sortByEmpId() {
        this.retrievedUsers = this.retrievedUsers.sort((a, b) => (a.empID) > (b.empID) ? 1 : -1);
    }
    onReset() {
        this.userForm.reset();
    }
    onSubmit() {
    }
    onDelete(user) {
        this.deleteUser(user);
    }
    retriveAllUsers() {
        this.userSvc.getUsers().subscribe(response => {
            for (const key in response) {
                if (key === 'users') {
                    this.retrievedUsers = response[key];
                    console.log(this.retrievedUsers);
                }
                else if (key === 'port') {
                    console.log(response[key]);
                }
            }
        });
    }
    deleteUser(user) {
        this.userSvc.deleteUser(user.userID).subscribe(resp => {
            this.retriveAllUsers();
            this.successMessage = 'User Deleted Successfully !';
        }, error => this.failureMessage = 'Delete User Failed. Try Again Later');
    }
    updateUser(user) {
        this.userSvc.updateUser(user).subscribe(resp => {
            this.retriveAllUsers();
            this.successMessage = 'User updated Successfully !';
        }, error => this.failureMessage = 'User update Failed. Try Again Later');
    }
    addUser(user) {
        this.userSvc.addUser(user).subscribe(resp => {
            this.retriveAllUsers();
            this.successMessage = 'User added Successfully !';
        }, error => this.failureMessage = 'User add Failed. Try Again Later');
    }
};
UsersComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false })
], UsersComponent.prototype, "userForm", void 0);
UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")).default]
    })
], UsersComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ctsjavauser109\Downloads\Program-Manager-Angular-UI-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map