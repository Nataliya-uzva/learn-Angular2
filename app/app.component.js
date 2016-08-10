"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var TodoApp = (function () {
    function TodoApp() {
        this.todos = [];
    }
    TodoApp.prototype.add = function (text) {
        this.todos.push({ text: text });
    };
    TodoApp.prototype.destroy = function (todoToRemove) {
        this.todos = this.todos.filter(function (todo) { return todo !== todoToRemove; });
    };
    TodoApp = __decorate([
        core_1.Component({
            selector: 'todo-app',
            template: " \n              <section class=\"todoapp\">\n                <section class=\" header\">\n                  <form (ngSubmit)=\"add(newTodoText.value); newTodoText.value = '';\">\n                    <h1>ng2dos</h1>\n                    <input class=\"new-todo\" placeholder=\"What needs to be done?\" #newTodoText autofocus>\n                  </form>\n                </section>\n                <section class=\"main\">\n                  <ul class=\"todo-list\">\n                    <li class=\"todo\" *ngFor=\"let todo of todos\">\n                      <div class=\"view\">\n                        <label>{{todo.text}}</label>\n                        <button class=\"destroy\" (click)=\"destroy(todo)\"></button>\n                      </div>\n                    </li>\n                  </ul>\n                </section>\n              </section>"
        }), 
        __metadata('design:paramtypes', [])
    ], TodoApp);
    return TodoApp;
}());
exports.TodoApp = TodoApp;
platform_browser_dynamic_1.bootstrap(TodoApp);
//# sourceMappingURL=app.component.js.map