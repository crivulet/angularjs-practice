angular.module('controllerExample', []).controller('todoCtrl', ['$scope', todoCtrl]);

var todoList = [ { done : true, title : "AngularJS 독서"},
{ done : false, title : "AngularJS 공부하기"},
{ done : false, title : "개인 프로젝트 구성"}];

function todoCtrl($scope) {
	$scope.name = "AngularJS TODO App"
	$scope.todoList = todoList;
}